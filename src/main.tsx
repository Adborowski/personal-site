import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import "./index.css";
import Projects from "./routes/projects";
import SiteHeader from "./SiteHeader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="home" element={<App />}></Route>
        <Route path="/" element={<App />}></Route>
        <Route path="projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

{
  /* <Route exact path="/">
    <Redirect to="/home" />
</Route> */
}
