"use client";

import "@ant-design/v5-patch-for-react-19";
import { Input, Layout, ConfigProvider } from "antd";
import type { GetProps } from "antd";
// import React, { useState } from "react";
import { AudioOutlined } from "@ant-design/icons";

type SearchProps = GetProps<typeof Input.Search>;
export default function Home() {
    const { Search } = Input;
    const { Header } = Layout;
    const onSearch: SearchProps["onSearch"] = (value) => alert(value);
    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: "#1677ff",
            }}
        />
    );
    const header_style: React.CSSProperties = {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 30,
                    colorPrimary: "rgb(0, 126, 229)",
                },
                components: {
                    Layout: {
                        headerPadding: "10px 5px 5px 5px",
                        headerHeight: "auto",
                        headerBg: "rgba(255, 255, 255, 0)",
                    },
                },
            }}
        >
            <Layout style={{ height: "calc(100svh - 45px)", width: "100svw" }}>
                <Header style={header_style}>
                    <Search
                        placeholder="input search text"
                        onSearch={onSearch}
                        enterButton
                        suffix={suffix}
                        size="large"
                    />
                </Header>
            </Layout>
        </ConfigProvider>
    );
}
