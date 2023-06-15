import { Row, Col, Layout, Space } from "antd";
import React from "react";
import Thumbnail from "../Image/Thumbnail";
import { Header } from "antd/es/layout/layout";
import { Container } from "./ContainerStyles";
import { useImageGalleryData } from "../../hooks/useImageGalleryData";
import { DataType } from "../../types/image";

export default function MainPage() {
  const { list } = useImageGalleryData();

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Layout>
        <Header style={{ backgroundColor: "rgb(37, 150, 190)" }}></Header>
        <Container>
          <Row gutter={[16, 16]}>
            {list.map((item: DataType, index: any) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Thumbnail
                  link={item?.images?.link}
                  title={item.title}
                  description={item.description}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </Space>
  );
}
