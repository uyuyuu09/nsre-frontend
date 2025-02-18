"use client";
import "./globals.css";
import "@ant-design/v5-patch-for-react-19";
// import { Input, Layout, ConfigProvider, Row, Col } from "antd";
import { Layout, ConfigProvider, Row, Col } from "antd";
// import type { GetProps } from "antd";
// import React, { useState } from "react";
import Link from "next/link";
import {
    SearchOutlined,
    HomeOutlined,
    UserOutlined,
    StarOutlined,
    HeartOutlined,
    BellOutlined,
} from "@ant-design/icons";

// type SearchProps = GetProps<typeof Input.Search>;
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { Footer } = Layout;
    // const onSearch: SearchProps["onSearch"] = (value) => alert(value);
    const default_nav_icon_style: React.CSSProperties = {
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
    };
    const footer_style: React.CSSProperties = {
        alignItems: "center",
        bottom: "0",
        height: "45px",
    };
    const navs = [
        {
            icon: <HomeOutlined style={default_nav_icon_style} />,
            link: "/",
        },
        {
            icon: <SearchOutlined style={default_nav_icon_style} />,
            link: "/search",
        },
        {
            icon: <StarOutlined style={default_nav_icon_style} />,
            link: "/bookmark",
        },
        {
            icon: <HeartOutlined style={default_nav_icon_style} />,
            link: "/heart",
        },
        {
            icon: <BellOutlined style={default_nav_icon_style} />,
            link: "/notification",
        },
        {
            icon: <UserOutlined style={default_nav_icon_style} />,
            link: "/user",
        },
    ];
    return (
        <html lang="ja">
            <body>
                <ConfigProvider
                    theme={{
                        token: {},
                        components: {
                            Layout: {
                                bodyBg: "#fff",
                                footerBg: "#fff",
                                footerPadding: "1px 0 1px 0",
                            },
                            Button: {},
                            Input: { hoverBorderColor: "#fff" },
                        },
                    }}
                >
                    <Layout
                        style={{
                            height: "100svh",
                            width: "100svw",
                        }}
                    >
                        <Layout>{children}</Layout>
                        <Footer style={footer_style}>
                            <Row>
                                {navs.map((nav, index) => (
                                    <Col
                                        key={index}
                                        span={4}
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Link
                                            href={nav.link}
                                            style={{ display: "flex" }}
                                        >
                                            {nav.icon}
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Footer>
                    </Layout>
                </ConfigProvider>
            </body>
        </html>
    );
}
