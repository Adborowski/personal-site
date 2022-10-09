import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Content, Footer } = Layout;
import "./App.css";
import {
  CodeOutlined,
  HomeOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";

function App() {
  const menuItems = [
    { label: "Home", key: "home", icon: <HomeOutlined /> }, // remember to pass the key prop
    { label: "About", key: "about", icon: <QuestionCircleOutlined /> }, // which is required
    { label: "Projects", key: "projects", icon: <CodeOutlined /> }, // which is required
    { label: "Contact", key: "contact", icon: <MailOutlined /> }, // which is required
  ];

  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const [activeNavKey, setActiveNavKey] = useState("home");

  return (
    <Layout className="layout">
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <h1>Hey, my name is Adam and I'm a web developer!</h1>
          <p>
            I specialize in React, pixel-perfect designs, and CSS. I have
            several years of international experience both freelance and
            in-house.
          </p>

          <p>
            Check out my projects and get in touch, I am thrilled to hear about
            your idea, and how we can work together to make it happen.
          </p>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>© 2022 Adam Borowski</Footer>
    </Layout>
  );
}

export default App;
