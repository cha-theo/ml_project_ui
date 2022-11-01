import { Link, useLocation } from "react-router-dom";
import { Layout, Menu, Row, Col, Typography, Button } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

const menuItems = [
  {
    key: "models",
    label: <Link to="/models">Models</Link>,
  },
  {
    key: "stats",
    label: <Link to="/stats">Stats</Link>,
  },
  {
    key: "raw-data",
    label: (
      <a href="http://localhost:5001/bnb/api/v1/stats/raw_data" target="_blank">
        Raw Data
      </a>
    ),
  },
];

const AppHeader = () => {
  const { pathname } = useLocation();
  const selectedkey = pathname.replace(/\//g, "");

  return (
    <>
      <Header>
        <Link to="/">
          <h1>Team 5</h1>
        </Link>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={selectedkey}
          style={{ minWidth: 0, flex: "auto" }}
          items={menuItems}
        />
        
          <img src="https://i.ibb.co/ZJ4ffdD/Code-Hub-logo-Full-e1515417616834-1.png" width={120} height={27}></img>
        
      </Header>
    </>
  );
};

export default AppHeader;
