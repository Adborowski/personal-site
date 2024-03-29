import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";
import ProjectHeader from "../components/Projects/ProjectHeader";

const Topdog = () => {
  const techList = [
    { label: "Javascript", type: "code" },
    { label: "SCSS", type: "code" },
    { label: "SQL", type: "code" },
    { label: "HTML", type: "code" },
    { label: "Responsive Web Design", type: "code" },
    { label: "GIT CLI", type: "code" },
    { label: "jQuery", type: "code" },
    { label: "PHP+SQL API", type: "code" },
  ];

  const businessList = [
    { label: "School Project", type: "business" },
    { label: "Solo", type: "business" },
    { label: "Fullstack", type: "business" },
  ];

  const mockups = ["/mock/phone-topdog1.png", "/mock/phone-topdog2.png"];

  return (
    <div className={"main project-page"}>
      <ProjectHeader content={"Topdog"} />
      <Mockups urls={mockups} />

      <section>
        This app aims to rethink the way we adopt animals. Rather than letting
        the user pick based on their own preferences, I use a lifestyle
        questionnaire to find the perfect dog for them and their life.
      </section>

      <TagList tagList={businessList} heading={"Project Type"} />
      <TagList tagList={techList} heading={"Technologies Used"} />
      <div className={"controls"}>
        {/* <a target="_blank" href="/topdog" className={"button"}>
          Try it
        </a> */}
      </div>
    </div>
  );
};

export default Topdog;
