import React from "react";
import TeamMembers from "./TeamMembers";
import Progress from "./Progress";
import Intro from "./Intro";
import { Typography, Divider, Row, Col } from "antd";
const { Title } = Typography;


function Home() {
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
