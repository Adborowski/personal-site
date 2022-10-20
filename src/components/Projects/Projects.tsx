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
  };
  return (
    <div className={styles.Projects}>
      <h1>Projects</h1>
      <ProjectsList />
    </div>
  );
};

export default Projects;
