import React from "react";
import { Select } from "antd";

export default function FindInput({
  data = [],
  width = 140,
  onSelect,
  placeholder = "",
  isloading = false,
}) {
  return (
    <Select
      showSearch
      style={{
        width,
        textAlign: "left",
      }}
      options={data.map((value) => ({ value: value, label: value }))}
      onSelect={onSelect}
      placeholder={placeholder}
      optionFilterProp="children"
      loading={isloading}
      filterOption={(input, option) =>
        (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())
      }
      filterSort={(optionA, optionB) =>
        (optionA?.label ?? "")
          .toLowerCase()
          .localeCompare((optionB?.label ?? "").toLowerCase())
      }
    />
  );
}
