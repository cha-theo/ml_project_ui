import {
  Typography,
  Divider,
  Avatar,
  Card,
  Col,
  
} from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

import team from "../data/teamMembers";
const { Meta } = Card;
const { Title } = Typography;

const TeamMembers = () => (
  <>
    <Divider />
    <Col xs={{ span: 24 }} lg={{ span: 3 }}>
      <Title>Our Team</Title>
    </Col>
    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
      <Card
        // style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <FacebookOutlined key="facebook" />,
          <GithubOutlined key="github" />,
          <LinkedinOutlined key="linkedin" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
      <Card
        // style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <FacebookOutlined key="facebook" />,
          <GithubOutlined key="github" />,
          <LinkedinOutlined key="linkedin" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
      <Card
        // style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <FacebookOutlined key="facebook" />,
          <GithubOutlined key="github" />,
          <LinkedinOutlined key="linkedin" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>
    <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
      <Card
        // style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <FacebookOutlined key="facebook" />,
          <GithubOutlined key="github" />,
          <LinkedinOutlined key="linkedin" />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
    </Col>

    {/* <List
      size="large"
      bordered
      dataSource={team}
      renderItem={({ name, image, description }) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={45} src={image} />}
            title={name}
            description={description}
          />
        </List.Item>
      )}
    /> */}
  </>
);

export default TeamMembers;
