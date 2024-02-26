import React from "react";
import { Typography } from "antd";

const { Link, Text } = Typography;

export default function Footer() {
  return (
    <footer>
      <Text> Authors </Text>

      <Link href="https://github.com/DmytroFrame" target="_blank">
        D. Kostyshyn
      </Link>
      <Text> & </Text>
      <Link href="https://linkedin.com/in/vladyslav-lutchyn/" target="_blank">
        V. Lutchyn
      </Link>

      <Text> - </Text>
      <Link
        href="http://195.162.83.28/cgi-bin/timetable.cgi?n=700"
        target="_blank"
      >
        Source
      </Link>
    </footer>
  );
}
