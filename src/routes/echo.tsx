import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";
import ProjectHeader from "../components/Projects/ProjectHeader";

const Echo = () => {
  const techList = [
    { label: "Javascript", type: "code" },
    { label: "CSS", type: "code" },
    { label: "HTML", type: "code" },
  ];

  const businessList = [
    { label: "Solo", type: "business" },
    { label: "Experimental", type: "business" },
    { label: "Simple", type: "business" },
    { label: "Quick", type: "business" },
  ];

  const mockups = ["/mock/phone-echo1.png", "/mock/phone-echo2.png"];

  return (
    <div className={"main project-page"}>
      <ProjectHeader content={"Echo"} />
      <Mockups urls={mockups} />

      <section>
        Echo is a simple, just-for-fun drawing tool which uses typography to
        create abstract shapes. With each key press in the input field, a new
        line is drawn, with optional modifier toggles. Each line can have a
        randomized color, symbol size, font, line height, angle, and opacity.
      </section>

      <section>
        The project was developed in a single evening, following a spontaneous
        idea.
      </section>

      <TagList tagList={businessList} heading={"Project Type"} />
      <TagList tagList={techList} heading={"Technologies Used"} />
      <div className={"controls"}>
        <a target="_blank" href="/echo" className={"button"}>
          Try it
        </a>
      </div>
    </div>
  );
};

export default Echo;
