import {Space, Spin} from "antd";
import React from "react";

export default function LoadingSpinner() {
    return (
        <Space size="middle" style={{ marginTop: '50px'}}>
            <Spin size="large" />
        </Space>
    )
}