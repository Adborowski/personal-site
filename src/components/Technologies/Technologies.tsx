import styles from "./Technologies.module.css";

const Technologies = () => {
  const DisplayTechs: any = () => {
    const techList = [
      { label: "React", type: "code" },
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
    ];

    const techTypes: any = {
      code: { color: "darkred" },
      design: { color: "darkblue" },
      business: { color: "darkgreen" },
    };

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

  return (
    <div className={styles.Technologies}>
      <h2>My Technologies</h2>
      <DisplayTechs />
    </div>
  );
};

export default Technologies;
