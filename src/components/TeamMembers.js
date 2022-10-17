import {
  List,
  Typography,
  Divider,
  Avatar,
  Card,
  Row,
  Col,
  Timeline,
} from "antd";
import {
  FacebookOutlined,
  GithubOutlined,
  LinkedinOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import team from "../data/teamMembers";
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;

const TeamMembers = () => (
  <>
    <Title>Welcome to Team 5 Web App</Title>
    <Divider />

    <Typography>
      <Title>Introduction</Title>
      <Paragraph>
        In the process of internal desktop applications development, many
        different design specs and implementations would be involved, which
        might cause designers and developers difficulties and duplication and
        reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to 
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to 
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design
        language for background applications, is refined by Ant UED Team, which
        aims to 
        <Text strong>
          uniform the user interface specs for internal background projects,
          lower the unnecessary cost of design differences and implementation
          and liberate the resources of design and front-end development
        </Text>
      </Paragraph>
    </Typography>
    <Divider />

    <Title level={2}>The Team</Title>
    <Divider />
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

    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <Card
          style={{ width: 300 }}
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
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card
          style={{ width: 300 }}
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
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card
          style={{ width: 300 }}
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
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
      <Col className="gutter-row" span={6}>
        <Card
          style={{ width: 300 }}
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
            avatar={<Avatar src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            title="Card title"
            description="This is the description"
          />
        </Card>
      </Col>
    </Row>

    

    <Divider />
    <Timeline mode="alternate">
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item color="green">
        Solve initial network problems 2015-09-01
      </Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </Timeline.Item>
      <Timeline.Item color="red">
        Network problems being solved 2015-09-01
      </Timeline.Item>
      <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
      <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}>
        Technical testing 2015-09-01
      </Timeline.Item>
    </Timeline>

    
  </>
);

export default TeamMembers;
