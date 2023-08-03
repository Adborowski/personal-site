import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";
import ProjectHeader from "../components/Projects/ProjectHeader";

const Map = () => {
  const techList = [
    { label: "Javascript", type: "code" },
    { label: "SASS", type: "code" },
    { label: "SQL", type: "code" },
    { label: "PHP", type: "code" },
    { label: "Responsive Web Design", type: "code" },
    { label: "GIT CLI", type: "code" },
    { label: "Mapbox API", type: "code" },
    { label: "LeafletJS", type: "code" },
  ];

  const businessList = [
    { label: "Solo", type: "business" },
    { label: "Experimental", type: "business" },
    { label: "Conceptual", type: "business" },
    { label: "Fullstack", type: "business" },
  ];

  const mockups = ["/mock/phone-map2.png", "/mock/phone-map1.png"];

  return (
    <div className={"main project-page"}>
      <ProjectHeader content={"DI-Map"} />
      <Mockups urls={mockups} />

      <section>
        Could we generalize the concepts of Gig Economy (apps like Uber,
        Taskrabbit etc.) to include all types of small work, with the addition
        of crowd-funding to help neighbors and friends come together and fix
        things?
      </section>

      <section>
        With this app I put forward a working concept - a system for posting
        jobs on a public map, which is a customized implementation of the Mapbox
        API.
      </section>

      <TagList tagList={businessList} heading={"Project Type"} />
      <TagList tagList={techList} heading={"Technologies Used"} />
      <div className={"controls"}>
        {/* <a target="_blank" href="/map" className={"button"}>
          Try it
        </a> */}
      </div>
    </div>
  );
};

export default Map;
