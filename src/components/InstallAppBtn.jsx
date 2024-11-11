import { CloudDownloadOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";

export default function InstallAppBtn() {
  const [deferredPrompt, setDeferredPrompt] = React.useState(null);
  const [showInstallButton, setShowInstallButton] = React.useState(false);

  React.useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    setDeferredPrompt(null);
    setShowInstallButton(false);
  };

  if (!showInstallButton) return null;

  return (
    <Button
      color="default"
      size="large"
      variant="filled"
      onClick={handleInstallClick}
    >
      <CloudDownloadOutlined /> Install App
    </Button>
  );
}
