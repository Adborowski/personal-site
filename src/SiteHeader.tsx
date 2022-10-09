import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import {
  CodeOutlined,
  HomeOutlined,
  MailOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const SiteHeader = () => {
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
    <Header>
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
        selectedKeys={[activeNavKey]}
        onClick={({ key }) => {
          setActiveNavKey(key);
          navigate(key);
        }}
      ></Menu>
    </Header>
  );
};

export default SiteHeader;
