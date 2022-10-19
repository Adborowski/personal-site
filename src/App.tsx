import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
const { Header, Content, Footer } = Layout;
import styles from "./App.module.css";

function App() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const [activeNavKey, setActiveNavKey] = useState("home");

  return (
    <div className={styles.main}>
      <Footer className={styles.footer} style={{ textAlign: "center" }}>
        © 2022 Adam Borowski
      </Footer>
    </div>
  );
}

export default App;
