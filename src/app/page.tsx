"use client";

import "@ant-design/v5-patch-for-react-19";
import {
    Input,
    Layout,
    ConfigProvider,
    // Tooltip,
    // Button,
    // Modal,
    Image,
    Row,
    Col,
} from "antd";
import type { GetProps } from "antd";
// import React, { useState } from "react";
import {
    // SearchOutlined,
    HomeOutlined,
    UserOutlined,
    StarOutlined,
    HeartOutlined,
    AudioOutlined,
} from "@ant-design/icons";

type SearchProps = GetProps<typeof Input.Search>;
export default function Home() {
    const { Search } = Input;
    const { Header, Content, Footer } = Layout;
    const onSearch: SearchProps["onSearch"] = (value) => alert(value);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };
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
        borderRadius: "0px",
    };
    const default_nav_style: React.CSSProperties = {
        fontSize: "25px",
        display: "flex",
        alignItems: "center",
        padding: "10px",
    };
    const content_style: React.CSSProperties = {
        height: "100%",
    };
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 0,
                    colorPrimary: "rgb(0, 48, 87)",
                },
                components: {
                    Layout: {
                        headerPadding: "0 0 0 0",
                        headerHeight: "auto",
                        headerBg: "rgba(255, 255, 255, 0)",
                        bodyBg: "#fff",
                        footerBg: "#fff",
                        footerPadding: "5px 0 5px 0",
                    },
                    Button: {},
                    Input: { hoverBorderColor: "#fff" },
                },
            }}
        >
            <Layout style={{ height: "100svh", width: "100vw" }}>
                <Header style={header_style}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        suffix={suffix}
                        onSearch={onSearch}
                    />
                </Header>
                <Layout>
                    <Content style={{ overflow: "hidden" }}>
                        <Image
                            src="/test.jpg"
                            style={content_style}
                            preview={false}
                        />
                    </Content>
                </Layout>
                <Footer
                    style={{
                        borderTop: "1px solid rgb(206, 206, 206)",
                    }}
                >
                    <Row>
                        <Col
                            span={6}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <HomeOutlined style={default_nav_style} />
                        </Col>
                        <Col
                            span={6}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <StarOutlined style={default_nav_style} />
                        </Col>
                        <Col
                            span={6}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <HeartOutlined style={default_nav_style} />
                        </Col>
                        <Col
                            span={6}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <UserOutlined style={default_nav_style} />
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </ConfigProvider>
    );
}
