import React from "react";
import { Card } from "antd";
import { ImageModelType } from "../../types/image";

export interface IProps {
  images: ImageModelType[];
}

const Thumbnail = ({ images }: IProps) => {
  return (
    <>
      {images?.map((item: ImageModelType) => (
        <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt={item?.title} src={item?.link} />}
        >
          <Card.Meta title={item?.title} description={item?.description} />
        </Card>
      ))}
    </>
  );
};

export default Thumbnail;
