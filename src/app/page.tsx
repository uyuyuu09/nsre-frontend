"use client";

import "@ant-design/v5-patch-for-react-19";
import { Layout, ConfigProvider, Image, Card } from "antd";
// import React from "react";
import {
    StarOutlined,
    DislikeOutlined,
    LikeOutlined,
    SendOutlined,
} from "@ant-design/icons";

export default function Home() {
    const { Content, Sider } = Layout;
    // const content_style: React.CSSProperties = {
    //     display: "flex",
    //     objectFit: "cover",
    //     height: "calc(100svh - 45px)",
    //     width: "100vw",
    // };
    const sider_style: React.CSSProperties = {
        marginLeft: "80%",
        fontSize: "30px",
        display: "flex",
        position: "absolute",
        justifyContent: "center",
        top: "50%",
        transform: "translateY(-50%)",
        lineHeight: "100px",
    };
    const info_card_style: React.CSSProperties = {
        zIndex: 10,
        top: "calc((100svh - 45px) - 80px)",
        transform: "translateY(40%)",
        position: "absolute",
        marginLeft: "20px",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgb(255, 255, 255)",
        fontWeight: "bold",
        fontSize: "20px",
        boxShadow: "none",
    };
    const sider_icons_style: React.CSSProperties = {
        color: "rgb(255, 255, 255)",
    };
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        bodyBg: "#fff",
                        siderBg: "rgba(0, 0, 0, 0)",
                    },
                    Button: {},
                    Card: {
                        headerPadding: 0,
                        bodyPadding: 0,
                    },
                },
            }}
        >
            <Layout>
                <Card
                    variant="borderless"
                    style={info_card_style}
                >
                    詳細
                </Card>
                <Content>
                    {/* <Image
                        src="/tes.jpg"
                        style={content_style}
                        preview={false}
                    /> */}
                    <Content
                        style={{
                            height: "100%",
                            backgroundColor: "rgb(0, 0, 0)",
                        }}
                    ></Content>
                </Content>

                <Sider
                    width={"20%"}
                    style={sider_style}
                >
                    <div>
                        <LikeOutlined style={sider_icons_style} />
                    </div>
                    <div>
                        <DislikeOutlined style={sider_icons_style} />
                    </div>
                    <div>
                        <StarOutlined style={sider_icons_style} />
                    </div>
                    <div>
                        <SendOutlined style={sider_icons_style} />
                    </div>
                </Sider>
            </Layout>
        </ConfigProvider>
    );
}
