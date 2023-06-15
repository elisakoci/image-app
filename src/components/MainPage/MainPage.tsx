import { Row, Col, Layout, Space } from "antd";
import React from "react";
import Thumbnail from "../Image/Thumbnail";
import { Header } from "antd/es/layout/layout";
import { Container } from "./ContainerStyles";
import { useImageGalleryData } from "../../hooks/useImageGalleryData";

export default function MainPage() {
  const { list } = useImageGalleryData();

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header style={{ backgroundColor: "rgb(37, 150, 190)" }} />
        <Container>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Thumbnail images={list?.images} />
            </Col>
          </Row>
        </Container>
      </Layout>
    </Space>
  );
}
