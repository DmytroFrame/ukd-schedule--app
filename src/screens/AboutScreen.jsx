import { Typography } from "antd";
import React from "react";

const { Link, Text, Title } = Typography;

export default function AboutScreen() {
  return (
    <div>
      <Title
        style={{
          marginTop: 5,
          marginBottom: 15,
        }}
        level={4}
      >
        Authors
      </Title>
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

      <Title
        style={{
          marginTop: 30,
          marginBottom: 15,
        }}
        level={4}
      >
        GitHub repositories
      </Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text>
          <Link
            href="https://github.com/DmytroFrame/ukd-schedule--app"
            target="_blank"
          >
            UKD Schedule APP
          </Link>
          {" Frontend"}
        </Text>

        <Text>
          <Link
            href="https://github.com/DmytroFrame/ukd-schedule--api"
            target="_blank"
          >
            UKD Schedule API
          </Link>
          {" Backend"}
        </Text>
      </div>
      <br />
      <Text style={{ opacity: 0.6 }}>
        Build date:{" "}
        {new Date(BUILD_DATE)
          .toISOString()
          .replace("T", " ")
          .split(".")
          .shift()}
      </Text>
    </div>
  );
}
