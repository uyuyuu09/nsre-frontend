"use client";
import React from "react";
import "@ant-design/v5-patch-for-react-19";
import { Button, Result, Layout } from "antd";

export default function NotFound() {
    const { Content } = Layout;
    const not_found_style: React.CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Layout>
            <Content style={not_found_style}>
                <Result
                    status="404"
                    title="404"
                    subTitle="Sorry, the page you visited does not exist."
                    extra={<Button type="primary">Back Home</Button>}
                />
            </Content>
        </Layout>
    );
}
