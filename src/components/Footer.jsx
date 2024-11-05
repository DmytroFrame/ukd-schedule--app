import React from "react";
import { Button, Modal, Typography } from "antd";
import {
  GlobalOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Link, Text } = Typography;

export default function Footer() {
  async function onShare() {
    if (!navigator.share)
      return alert("Shitt... this share button isn't working ╭∩╮(-_-)╭∩╮");

    navigator
      .share({
        title: "Rozklad is here:",
        url: "https://rozklad.dmytroframe.com",
      })
      .then((err) => console.error(err));
  }

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <footer>
      <Link onClick={onShare}>
        <ShareAltOutlined /> Share
      </Link>

      <Text> - </Text>

      <Link onClick={showModal}>
        <UserOutlined /> Authors
      </Link>

      <Text> - </Text>

      <Link
        href="http://195.162.83.28/cgi-bin/timetable.cgi?n=700"
        target="_blank"
      >
        <GlobalOutlined /> Source
      </Link>

      <Modal
        title="Authors"
        open={isModalOpen}
        centered
        onCancel={handleCancel}
        width={320}
        footer={[
          <Button key="close" type="primary" onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text>
            <Link href="https://github.com/DmytroFrame" target="_blank">
              Dmytro Kostyshyn
            </Link>
            {" Backend"}
          </Text>

          <Text>
            <Link
              href="https://linkedin.com/in/vladyslav-lutchyn/"
              target="_blank"
            >
              Vladyslav Lutchyn
            </Link>
            {" Frontend"}
          </Text>
        </div>
      </Modal>
    </footer>
  );
}
