import { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { TeachersService } from "../services/teachers.service";
import BackButton from "./BackButton";
import FindInput from "./FindInput";

export default function SelectByTeacher({ saveByTeacher, back }) {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    TeachersService.getAll()
      .then((data) => setTeachers(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 20 }} level={3}>
        Choose your name
      </Typography.Title>
      <FindInput
        data={teachers}
        onSelect={setSelectedTeacher}
        placeholder="Select a teacher"
        isloading={isLoading}
        width={220}
      />
      <Button
        type="primary"
        disabled={!selectedTeacher}
        style={{ marginLeft: 10 }}
        onClick={() => {
          saveByTeacher(selectedTeacher);
        }}
      >
        Save
      </Button>
      <br /> <br />
      <BackButton onClick={back} />
    </div>
  );
}
