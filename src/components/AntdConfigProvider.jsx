import React from "react";
import { ConfigProvider, theme } from "antd";

export default function AntdConfigProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => setIsDarkMode(event.matches));

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {children}
    </ConfigProvider>
  );
}
