import React from "react";
import { Card } from "antd";
import { ImageModelType } from "../../types/image";

const Thumbnail = ({ title, link, description}: ImageModelType) => {

  return (
    <Card
      hoverable
      style={
        {width: 300}
      }
      cover={<img alt={title} src={link} />}
    >
      <Card.Meta title={title} description={description} />
    </Card>
  );
};

export default Thumbnail;
