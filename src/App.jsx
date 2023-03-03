import React from "react";
import "./App.css";
import {useQuery} from "react-query";
import {Alert, Divider, Space, Spin, Tabs, Timeline, Typography} from 'antd';
import axios from "axios";
const { Title, Paragraph } = Typography;

function App() {
  const { isLoading, error, data } = useQuery("schedules", () =>
      axios
          .get("https://api.dmytroframe.site/ukd/schedules?group=ІПЗс-19")
          .then((response) => response.data)
  );

    return (
    <div className="App">
      <Typography>
        <Title>Pidval project presents:</Title>
          <Paragraph>
              The most useless scheduler in your life.
              Better go to stroika
          </Paragraph>
      </Typography>

        <Divider />

        { error &&
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            ><Alert
            message="Error"
            description="Не вдається получити дані з серверу"
            type="error"
            showIcon
        />
            </Space>
        }

        { isLoading && (
            <Space size="middle" style={{ marginTop: '50px'}}>
                <Spin size="large" />
            </Space>
        )
        }

        {
            !isLoading && (
                <Tabs
                    tabPosition={'left'}
                    items={data?.map(_data => ({
                        label: _data.weekName,
                        key: Math.random(),
                        children: <Timeline
                            reverse
                            items={_data.lessons.map(lesson => ({children: `${lesson.date} - ${lesson.title}`}))}
                        />,
                    }))}
                />
            )
        }


    </div>
  );
}

export default App;
