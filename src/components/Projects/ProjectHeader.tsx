import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

const ProjectHeader = ({ content }: any) => {
  return (
    <div className={styles.projectHeader}>
      <h1>{content}</h1>
      <div className={styles.controlsBackToProjects}>
        <Link to={"/projects"} className={"button"}>
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectHeader;
