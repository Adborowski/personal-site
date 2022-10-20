import styles from "./Technologies.module.css";

const Technologies = () => {
  const DisplayTechs: any = () => {
    const techList = [
      { label: "React", type: "code" },
      { label: "Typescript", type: "code" },
      { label: "Javascript ES6", type: "code" },
      { label: "HTML", type: "code" },
      { label: "CSS", type: "code" },
      { label: "SCSS", type: "code" },
      { label: "CSS Modules", type: "code" },
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
    ];

    const techTypes: any = {
      code: { color: "#bae1ff" },
      design: { color: "#ffb3ba" },
      business: { color: "#baffc9" },
    };

    // #ffb3ba
    // #ffdfba
    // #ffffba
    // #baffc9
    // #bae1ff

    const displayTechs = techList.map((tech) => {
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

  const DisplayGoals = () => {
    const learningGoals = [
      { label: "React Native", type: "code" },
      { label: "Next.js", type: "code" },
    ];
  };

  return (
    <div className={styles.Technologies}>
      <h2>My Powers</h2>
      <DisplayTechs />
    </div>
  );
};

export default Technologies;
