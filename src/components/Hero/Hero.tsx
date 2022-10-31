import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import TagList from "../TagList/TagList";

const Hero = () => {
  const techList: Object[] = [
    { label: "React", type: "code" },
    { label: "Typescript", type: "code" },
    { label: "Javascript ES6", type: "code" },
    { label: "HTML", type: "code" },
    { label: "CSS", type: "code" },
    { label: "SCSS", type: "code" },
    { label: "CSS Modules", type: "code" },
    { label: "Responsive Web Design", type: "code" },
    { label: "Gulp", type: "code" },
    { label: "Webpack", type: "code" },
    { label: "GIT CLI", type: "code" },
    { label: "NodeJS", type: "code" },
    { label: "Sharepoint", type: "code" },
    { label: "Umbraco", type: "code" },
    { label: "Wordpress", type: "code" },
    { label: "WooCommerce", type: "code" },
    { label: "SQL", type: "code" },
    { label: "CRON", type: "code" },
    { label: "Adobe Illustrator", type: "design" },
    { label: "Adobe Photoshop", type: "design" },
    { label: "Adobe After Effects", type: "design" },
    { label: "Adobe InDesign", type: "design" },
    { label: "Figma", type: "design" },
    { label: "Microsoft Office", type: "business" },
    { label: "AGILE / SCRUM", type: "business" },
    { label: "Public Presentations", type: "business" },
  ];

  const learningGoals = [
    { label: "React Native", type: "code" },
    { label: "Next.js", type: "code" },
    { label: "Headless CMS", type: "code" },
    { label: "Testing Frameworks", type: "code" },
  ];
  const HeroLinks: any = () => {
    const links = [
      { label: "See Projects", key: "projects" },
      { label: "Get in Touch", key: "contact" },
    ];

    const displayLinks = links.map((link) => {
      return (
        <Link to={link.key} key={link.label} className={"button"}>
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
        I have the skills to get your project from idea and pitch to production,
        faster than you think.
      </h2>
      <div className={styles.heroLinks}>
        <HeroLinks />
      </div>
      <TagList tagList={techList} heading={"My Powers"} />
      <TagList tagList={learningGoals} heading={"My Learning Goals"} />
    </div>
  );
};

export default Hero;
