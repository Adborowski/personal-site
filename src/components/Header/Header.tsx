import { NavLink, useParams, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

import { Transition } from "react-transition-group";
import { useRef } from "react";

const SiteHeader = () => {
  const MenuItems: any = () => {
    const items = [
      { label: "Home", key: "home" },
      // { label: "About", key: "about" },
      { label: "Projects", key: "projects" },
      { label: "Contact", key: "contact" },
    ];

    const menuItems = items.map((item) => {
      return (
        <NavLink
          key={item.label}
          onClick={onLinkClick}
          to={item.key}
          className={styles.menuItem}
        >
          {item.label}
        </NavLink>
      );
    });

    return menuItems;
  };

  const onLinkClick = () => {
    setIsNavOpen(false);
  };

  const onBurgerClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.brandBar}>
        <div className={styles.logo}>
          <img src="./logo.svg" />
        </div>
        <div className={styles.name}>Adam Borowski</div>
      </div>
      <div onClick={onBurgerClick} className={styles.burger}>
        <span>≡</span>
      </div>

      {/* mobile menu */}
      <div className={`${styles.menu} ${isNavOpen ? styles.isOpen : ""}`}>
        <MenuItems />
      </div>
      {/* desktop menu */}
      <div className={styles.desktopMenu}>
        <MenuItems />
      </div>
    </div>
  );
};

export default SiteHeader;
