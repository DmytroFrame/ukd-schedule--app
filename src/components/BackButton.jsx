import React from "react";
import { Typography } from "antd";

export default function BackButton({ name = "Back to selection", onClick }) {
  return (
    <div style={{ textAlign: "left", marginLeft: 25, marginTop: 25 }}>
      <Typography.Link onClick={onClick}>&larr; {name}</Typography.Link>
    </div>
  );
}
