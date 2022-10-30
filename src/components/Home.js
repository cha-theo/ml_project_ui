import React from "react";
import TeamMembers from "./TeamMembers";
import Progress from "./Progress";
import Intro from "./Intro";
import { Typography, Divider, Row, Col } from "antd";
import { getTestStats } from "../api/api";
import { useState, useEffect } from "react";
const { Title } = Typography;


function Home() {

  const [testStatsData, setTestStatsData] = useState(null);

  useEffect(() => {
    getTestStats().then((data) => {
      setTestStatsData(data);
    });
  }, []);
console.log(testStatsData)

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Intro />
        <TeamMembers />
      </Row>
    </>
  );
}

export default Home;
