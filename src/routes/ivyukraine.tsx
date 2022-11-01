import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";

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
      <h1>Ivy Ukraine</h1>
      <Mockups urls={mockups} />

      <section>
        In 4 languages and with a custom two-layer search (subjects and levels),
        this app aims to help Ukrainian refugee children become comfortable in
        foreign education systems.
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
