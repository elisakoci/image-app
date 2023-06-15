import { Row, Col, Layout, Space } from "antd";
import React from "react";
import Thumbnail from "../Image/Thumbnail";
import { Header } from "antd/es/layout/layout";
import { Container } from "./ContainerStyles";

const data = [
  { title: "Image 1", description: "Description 1", imageUrl: "url1" },
  { title: "Image 2", description: "Description 2", imageUrl: "url2" },
  { title: "Image 3", description: "Description 3", imageUrl: "url3" },
  { title: "Image 4", description: "Description 3", imageUrl: "url3" },
];

export default function MainPage() {
  return (
    <Space direction="vertical" style={{ width: "100%" }} >
      <Layout>
        <Header style={{ backgroundColor: 'rgb(37, 150, 190)'}}></Header>
        <Container>
          <Row gutter={[16, 16]}>
            {data.map((image, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Thumbnail image={image} />
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </Space>
  );
}
