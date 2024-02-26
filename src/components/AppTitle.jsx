import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AppTitle() {
  return (
    <Typography>
      <Title>Pidval project presents:</Title>
      <Paragraph>
        The most useless scheduler in your life. Better go to stroika
      </Paragraph>
    </Typography>
  );
}
