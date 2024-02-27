import { Alert, Space } from "antd";

export default function ErrorAlert({ error }) {
  const errorMsg = JSON.parse(error.message);

  const description = errorMsg.message || "";
  const name = `${errorMsg.statusCode} ${errorMsg.error}`;

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Alert message={name} description={description} type="error" showIcon />
    </Space>
  );
}
