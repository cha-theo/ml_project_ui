import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { CalculatorOutlined, DatabaseOutlined } from "@ant-design/icons";

const { Title } = Typography;

function Banner() {
  return (
    <Row className="main-banner" align="middle" justify="center">
      <Row>
        <Col span={24} className="image_banner">
          <img
            alt="team5-logo"
            style={{ width: "300px" }}
            src="https://i.ibb.co/7jQx5dn/Capture-removebg-preview.png"
          ></img>
        </Col>
        <Col span={24}>
          <Title level={4}>
            Welcome to our brand new web app. <br />
            You can calculate the ideal price for your property or download the
            raw data that we used to create our ML model.
          </Title>
        </Col>
        <Col span={24} className="button_section">
          <Button
            type="primary"
            shape="round"
            size="large"
            href="/models"
            icon={<CalculatorOutlined />}
          >
            Price Calculator
          </Button>
          <Button
            size="large"
            shape="round"
            href="http://localhost:5001/bnb/api/v1/stats/raw_data"
            icon={<DatabaseOutlined />}
          >
            Raw Data
          </Button>
        </Col>
      </Row>
    </Row>
  );
}

export default Banner;
