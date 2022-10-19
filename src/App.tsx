import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./Footer";

function App() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const [activeNavKey, setActiveNavKey] = useState("home");

  return (
    <div className={styles.home}>
      <h1>Let's build something!</h1>
      <h2>I am adam</h2>
    </div>
  );
}

export default App;
