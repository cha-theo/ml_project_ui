import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

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
    label: <Link to="http://127.0.0.1:5001/emp/api/v1/stats/raw_data" target="_blank">Raw Data</Link>,
  }
];

const AppHeader = () => {
  const { pathname } = useLocation();
  const selectedkey = pathname.replace(/\//g, "");

  return (
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
    </Header>
  );
};

export default AppHeader;
