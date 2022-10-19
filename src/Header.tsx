import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./App.module.css";

import { Transition } from "react-transition-group";
import { useRef } from "react";

const SiteHeader = () => {
  const menuItems = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Projects", key: "projects" },
    { label: "Contact", key: "contact" },
  ];

  const onLinkClick = () => {
    setIsNavOpen(false);
  };

  const onBurgerClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div onClick={onBurgerClick} className={styles.burger}>
        <span>≡</span>
      </div>
      <div className={`${styles.menu} ${isNavOpen ? styles.isOpen : ""}`}>
        {menuItems.map((item) => {
          return (
            <Link
              onClick={onLinkClick}
              to={item.key}
              className={styles.menuItem}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SiteHeader;
