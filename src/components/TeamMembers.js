import { Typography, Divider, Card, Col, Button } from "antd";
import { LinkedinOutlined } from "@ant-design/icons";

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
              <Button
                href={person.linkedin}
                target="_blank"
                icon={<LinkedinOutlined />}
              />,
            ]}
          >
            <Meta title={person.name} description={person.description} />
          </Card>
        </Col>
      );
    })}
  </>
);

export default TeamMembers;
