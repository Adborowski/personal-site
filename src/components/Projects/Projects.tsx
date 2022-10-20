import styles from "./Projects.module.css";

const Projects = () => {
  const ProjectsList: any = () => {
    const projectsList = [
      {
        label: "Echo",
        image: "sample.jpeg",
        description: "Typewriter-inspired experimental drawing tool",
        stack: ["Javascript", "HTML", "CSS"],
      },
      {
        label: "Topdog",
        image: "sample.jpeg",
        description: "Lorem Ipsum Dolor sit Amet Consectatum",
        stack: ["Javascript", "JQuery", "SCSS", "SQL"],
      },
    ];

    const projectsDisplay = projectsList.map((proj) => {
      return (
        <div key={proj.label} className={styles.project}>
          <div
            style={{ backgroundImage: `url("${proj.image}")` }}
            className={styles.image}
          ></div>
          <section>
            <div className={styles.name}>{proj.label}</div>
            <div className={styles.description}>{proj.description}</div>
          </section>
        </div>
      );
    });

    return projectsDisplay;
  };
  return (
    <div className={"main"}>
      <div className={styles.ProjectsList}>
        <ProjectsList />
      </div>
    </div>
  );
};

export default Projects;
