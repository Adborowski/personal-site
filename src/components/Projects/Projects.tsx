import { NavLink } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  const ProjectsList: any = () => {
    const projectsList = [
      {
        label: "Ivy Ukraine",
        image: "ivy.png",
        description: "EduTech app supporting Ukrainian refugees in Poland",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "ivyukraine",
      },
      {
        label: "Topdog",
        image: "topdog.png",
        description: "Matchmaking app for aspiring dog owners and shelters",
        route: "topdog",
      },
      {
        label: "Osiris",
        image: "osiris.png",
        description: "Cybersecurity dashboard for secure data backup",
        route: "osiris",
      },
      {
        label: "Central Rental",
        image: "central.png",
        description: "Commercial web app for short-term flat rentals",
        route: "centralrental",
      },
      {
        label: "DI-Map",
        image: "map.png",
        description: "Gig economy app prototype for generalized work",
        route: "centralrental",
      },

      {
        label: "Echo",
        image: "echo.png",
        description: "Typewriter-inspired experimental drawing tool",
        route: "echo",
      },
    ];

    const projectsDisplay = projectsList.map((proj) => {
      return (
        <NavLink to={proj.route} key={proj.label} className={styles.project}>
          <div
            style={{ backgroundImage: `url("${proj.image}")` }}
            className={styles.image}
          ></div>
          <section>
            <div className={styles.name}>{proj.label}</div>
            <div className={styles.description}>{proj.description}</div>
          </section>
        </NavLink>
      );
    });

    return projectsDisplay;
  };
  return (
    <div className={"main"}>
      <h1>Projects</h1>
      <div className={styles.ProjectsList}>
        <ProjectsList />
      </div>
    </div>
  );
};

export default Projects;
