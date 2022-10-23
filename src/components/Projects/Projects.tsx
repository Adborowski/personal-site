import { NavLink } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  const ProjectsList: any = () => {
    const projectsList = [
      {
        label: "Echo",
        image: "sample.jpeg",
        description: "Typewriter-inspired experimental drawing tool",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "echo",
      },
      {
        label: "Topdog",
        image: "sample.jpeg",
        description: "Matchmaking app for aspiring dog owners and shelters",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "topdog",
      },
      {
        label: "Ivy Ukraine",
        image: "sample.jpeg",
        description: "EduTech app supporting Ukrainian refugees in Poland",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "ivyukraine",
      },
      {
        label: "Central Rental",
        image: "sample.jpeg",
        description: "Booking site for short-term apartment rentals",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "centralrental",
      },
      {
        label: "DI-Map",
        image: "sample.jpeg",
        description: "Gig economy app prototype for generalized work",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "centralrental",
      },
      {
        label: "Orsted Academy",
        image: "sample.jpeg",
        description: "Figma-based concept for an internal education app UI",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "centralrental",
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
            <NavLink className={styles.button} to={proj.route}>
              More
            </NavLink>
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
