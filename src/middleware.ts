import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/"],
};

export function middleware(req: NextRequest) {
    if (process.env.ENABLE_BASIC_AUTH !== "true") {
        return NextResponse.next();
    }
    if (
        process.env.BASIC_AUTH_USERNAME === undefined ||
        process.env.BASIC_AUTH_PASSWORD === undefined
    ) {
        return NextResponse.next();
    }

    const basicAuth = req.headers.get("authorization");

    if (basicAuth) {
        const authValue = basicAuth.split(" ")[1];
        const [username, password] = Buffer.from(authValue, "base64")
            .toString()
            .split(":");
        if (
            username === process.env.BASIC_AUTH_USERNAME &&
            password === process.env.BASIC_AUTH_PASSWORD
        ) {
            return NextResponse.next();
        }
    }

    return NextResponse.json(
        { error: "Basic Auth Required" },
        {
            headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
            status: 401,
        }
    );
}
