import React from "react";
import { Select, Button } from "antd";
import { GroupsService } from "../services/groups.service";

export default function SelectGroup({ saveGroup }) {
  const [groups, setGroups] = React.useState([]);
  const [selectedGroup, setSelectedGroup] = React.useState("");

  React.useEffect(() => {
    GroupsService.getAll().then((data) =>
      setGroups(data.map((group) => ({ value: group, label: group })))
    );
  }, []);

  return (
    <div>
      <Select
        showSearch
        style={{
          width: 140,
          textAlign: "left",
        }}
        options={groups}
        onSelect={(value) => setSelectedGroup(value)}
        placeholder="Select a group"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label.toLowerCase() ?? "").includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
      />
      <Button
        type="primary"
        onClick={() => {
          saveGroup(selectedGroup);
        }}
        disabled={!selectedGroup}
        style={{ marginLeft: 8 }}
      >
        Save
      </Button>
    </div>
  );
}
