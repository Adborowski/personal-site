import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Projects from "./components/Projects/Projects";
import Contact from "./routes/contact";
import styles from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import IvyUkraine from "./routes/ivyukraine";
import Topdog from "./routes/topdog";
import Osiris from "./routes/osiris";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="projects" element={<Projects />} />
          <Route path="projects/ivyukraine" element={<IvyUkraine />} />
          <Route path="projects/topdog" element={<Topdog />} />
          <Route path="projects/osiris" element={<Osiris />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
