import { Typography, Divider, Avatar, Card, Col, List, Button } from "antd";
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

    {team.map((person) => {
      return (
        <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
          <Card
            style={{ width: 250 }}
            cover={<img alt={person.name} src={person.image} />}
            
            actions={[
              <Button href={person.linkedin} target="_blank" icon={<LinkedinOutlined/>}/>
            ]}
          >
            <Meta title={person.name} description={person.description} />
          </Card>
        </Col>
      );
    })}

{/* {team.map((person) => {
      return (
        <Col className="gutter-row" xs={{ span: 12 }} lg={{ span: 5 }}>
<Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src={person.image} />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
  </Col>
  );
})} */}

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
