import {Alert, Space} from "antd";

export default function ErrorAlert() {
    return (
        <Space direction="vertical" style={{ width: '100%'}}>
            <Alert
                message="Error"
                description="Не вдається получити дані з серверу"
                type="error"
                showIcon
            />
        </Space>
    );
}