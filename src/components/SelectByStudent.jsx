import { useState, useEffect } from "react";
import { Button, Typography } from "antd";
import { GroupsService } from "../services/groups.service";
import BackButton from "./BackButton";
import FindInput from "./FindInput";
import ErrorAlert from "./Ui/ErrorAlert";

export default function SelectByStudent({ saveByGroup, back }) {
  const [selectedGroup, setSelectedGroup] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = `UKD Schedule | Select Group`;
    GroupsService.getAll()
      .then((data) => setGroups(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 0, marginTop: 0 }} level={3}>
        Choose your group
      </Typography.Title>
      <br />
      {error ? (
        <ErrorAlert error={error} />
      ) : (
        <>
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
        </>
      )}

      <BackButton onClick={back} />
    </div>
  );
}
