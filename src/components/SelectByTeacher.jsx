import { useEffect, useState } from "react";
import { Button, Typography } from "antd";
import { TeachersService } from "../services/teachers.service";
import BackButton from "./BackButton";
import FindInput from "./FindInput";
import ErrorAlert from "./Ui/ErrorAlert";

export default function SelectByTeacher({ saveByTeacher, back }) {
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = `UKD Schedule | Select Teacher`;
    TeachersService.getAll()
      .then((data) => setTeachers(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <Typography.Title style={{ marginBottom: 0, marginTop: 0 }} level={3}>
        Choose your name
      </Typography.Title>
      <br />
      {error ? (
        <ErrorAlert error={error} />
      ) : (
        <>
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
        </>
      )}

      <BackButton onClick={back} />
    </div>
  );
}
