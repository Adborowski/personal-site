import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";
import ProjectHeader from "../components/Projects/ProjectHeader";

const IvyUkraine = () => {
  const techList = [
    { label: "React", type: "code" },
    { label: "CSS Modules", type: "code" },
    { label: "Firebase", type: "code" },
    { label: "Google Auth", type: "code" },
    { label: "CSS Grid", type: "code" },
    { label: "Responsive Web Design", type: "code" },
    { label: "GIT CLI", type: "code" },
  ];

  const businessList = [
    { label: "Pro Bono", type: "business" },
    { label: "Small Team", type: "business" },
    { label: "Greenfield", type: "business" },
  ];

  const mockups = ["/mock/phone-ivy1.png", "/mock/phone-ivy3.png"];

  return (
    <div className={"main project-page"}>
      <ProjectHeader content={"Ivy Ukraine"} />
      <Mockups urls={mockups} />

      <section>
        With support for 4 languages and custom two-layer search (subjects and
        levels), this app aims to help Ukrainian refugee children find tutors
        and adapt to foreign education systems.
      </section>

      <TagList tagList={businessList} heading={"Project Type"} />
      <TagList tagList={techList} heading={"Technologies Used"} />
      <div className={"controls"}>
        <a target="_blank" href="https://ivyukraine.com" className={"button"}>
          Try it
        </a>
      </div>
    </div>
  );
};

export default IvyUkraine;
