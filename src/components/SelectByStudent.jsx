import { useState, useEffect } from "react";
import { Button, Typography } from "antd";
import { GroupsService } from "../services/groups.service";
import BackButton from "./BackButton";
import FindInput from "./FindInput";

export default function SelectByStudent({ saveByGroup, back }) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    GroupsService.getAll()
      .then((data) => setGroups(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 0, marginTop: 0 }} level={3}>
        Choose your group
      </Typography.Title>
      <br />
      <FindInput
        data={groups}
        onSelect={setSelectedGroup}
        placeholder="Select a group"
        isloading={isLoading}
      />
      <Button
        type="primary"
        disabled={!selectedGroup}
        style={{ marginLeft: 10 }}
        onClick={() => {
          saveByGroup(selectedGroup);
        }}
      >
        Save
      </Button>

      <BackButton onClick={back} />
    </div>
  );
}
