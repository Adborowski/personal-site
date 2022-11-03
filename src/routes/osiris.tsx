import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";
import ProjectHeader from "../components/Projects/ProjectHeader";

const Osiris = () => {
  const techList = [
    { label: "React", type: "code" },
    { label: "CSS Modules", type: "code" },
    { label: "CSS Grid", type: "code" },
    { label: "GIT CLI", type: "code" },
    { label: "Figma", type: "design" },
    { label: "Adobe Illustrator", type: "design" },
  ];

  const businessList = [
    { label: "UX Research", type: "business" },
    { label: "Commercial", type: "business" },
    { label: "Startup", type: "business" },

    { label: "Small Team", type: "business" },
    { label: "Part-Mockup", type: "business" },
  ];

  const mockups = ["/mock/desktop-osiris1.png"];

  return (
    <div className={"main project-page"}>
      <ProjectHeader content="Osiris" />
      <Mockups urls={mockups} isDesktop={true} />

      <section>
        This app is a central dashboard for a cybersecurity systems dealing with
        encrypted backups. Includes global backup separation, custom backup
        policies for cloud data sources, and storage monitoring.
      </section>

      <section>
        I have completed the project as a mockup, and coded it partially, before
        it was abandoned by the company.
      </section>

      <TagList tagList={businessList} heading={"Project Type"} />
      <TagList tagList={techList} heading={"Technologies Used"} />
    </div>
  );
};

export default Osiris;
