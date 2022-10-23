import styles from "./Technologies.module.css";

const Technologies = () => {
  const techList = [
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

  const techTypes: any = {
    code: { color: "#bae1ff" },
    design: { color: "#ffb3ba" },
    business: { color: "#baffc9" },
  };

  const DisplayTechs: any = ({ list }: any) => {
    const displayTechs = list.map((tech: any) => {
      return (
        <div
          key={tech.label}
          style={{ backgroundColor: techTypes[tech.type].color }}
          className={styles.tech}
        >
          {tech.label}
        </div>
      );
    });

    return displayTechs;
  };

  return (
    <div className={styles.Technologies}>
      <h2>My Powers</h2>
      <DisplayTechs list={techList} />
      <h2>Learning Goals</h2>
      <DisplayTechs list={learningGoals} />
    </div>
  );
};

export default Technologies;
