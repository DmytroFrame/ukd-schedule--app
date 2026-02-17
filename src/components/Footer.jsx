import React from "react";
import { Button, Modal, Typography } from "antd";
import {
  GlobalOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import AboutScreen from "../screens/AboutScreen";

const { Link, Text } = Typography;

export default function Footer() {
  async function onShare() {
    if (!navigator.share)
      return alert("Shitt... this share button isn't working ╭∩╮(-_-)╭∩╮");

    navigator
      .share({
        title: "Rozklad is here:",
        url: "https://ukd-rozklad.pages.dev/",
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
        <InfoCircleOutlined /> About
      </Link>

      <Text> - </Text>

      <Link href={import.meta.env.VITE_SOURCE_LINK} target="_blank">
        <GlobalOutlined /> Source
      </Link>

      <Modal
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
        <AboutScreen />
      </Modal>
    </footer>
  );
}
