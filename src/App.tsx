import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";

function App() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const [activeNavKey, setActiveNavKey] = useState("home");

  return (
    <div className={styles.home}>
      <h1>
        In my brain I rearrange the letters on the page to spell your name
      </h1>
      <h2>Courtney Barnett</h2>
    </div>
  );
}

export default App;
