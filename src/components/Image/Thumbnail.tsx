import React from "react";
import { Card } from "antd";

const Thumbnail = ({ image }: any) => {
  const { title, description, imageUrl } = image;

  return (
    <Card
      hoverable
      style={
        {width: 300}
      }
      cover={<img alt={title} src={imageUrl} />}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );
};

export default Thumbnail;
