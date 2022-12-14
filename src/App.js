import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Models from "./components/Models";
import Stats from "./components/Stats";
import NotFound from "./components/NotFound";
import Home from "./components/Home"


const { Content } = Layout;

const App = () => (
  <Router>
    <Layout className="layout">
      <AppHeader />
      
      <Content className="main-container">
        
        
          <Routes>
            <Route path="/models" element={<Models />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      
      </Content>
      <AppFooter />
    </Layout>
  </Router>
);

export default App;
