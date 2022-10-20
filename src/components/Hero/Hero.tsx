import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const HeroLinks: any = () => {
    const links = [
      { label: "See Projects", key: "projects" },
      { label: "Get in Touch", key: "contact" },
    ];

    const displayLinks = links.map((link) => {
      return (
        <Link to={link.key} key={link.label} className={styles.heroLink}>
          {link.label}
        </Link>
      );
    });

    return displayLinks;
  };

  return (
    <div className={styles.Hero}>
      <h1>
        Are you ready to build something{" "}
        <span className={styles.highlight}>great?</span>
      </h1>
      <h2>
        I have the skills to get your project from idea to production faster
        than you think.
      </h2>
      <div className={styles.heroLinks}>
        <HeroLinks />
      </div>
    </div>
  );
};

export default Hero;
