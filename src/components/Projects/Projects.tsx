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
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "topdog",
      },
      {
        label: "Osiris",
        image: "osiris.png",
        description: "Cybersecurity dashboard for secure data backup",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "centralrental",
      },
      {
        label: "Ø Academy",
        image: "oda.png",
        description: "Figma-based concept for an internal education app UI",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "centralrental",
      },
      {
        label: "DI-Map",
        image: "map.png",
        description: "Gig economy app prototype for generalized work",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "centralrental",
      },

      {
        label: "Echo",
        image: "echo.png",
        description: "Typewriter-inspired experimental drawing tool",
        technologies: [
          { label: "Javascript", type: "Code" },
          { label: "HTML", type: "Code" },
        ],
        route: "echo",
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
            <div className={styles.controls}>
              <NavLink className={"button"} to={proj.route}>
                Read More
              </NavLink>
            </div>
          </section>
        </div>
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
