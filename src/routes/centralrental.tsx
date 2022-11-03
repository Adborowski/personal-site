import TagList from "../components/TagList/TagList";
import Mockups from "../components/Mockups/Mockups";
import ProjectHeader from "../components/Projects/ProjectHeader";

const CentralRental = () => {
  const techList = [
    { label: "Javascript", type: "code" },
    { label: "SASS", type: "code" },
    { label: "HTML", type: "code" },
    { label: "JSON", type: "code" },
    { label: "LeafletJS", type: "code" },
    { label: "Google Maps API", type: "code" },
    { label: "External Booking API", type: "code" },
  ];

  const businessList = [
    { label: "Solo", type: "business" },
    { label: "Fullstack", type: "business" },
    { label: "Commercial", type: "business" },
  ];

  const mockups = ["/mock/phone-central1.png", "/mock/phone-central2.png"];

  return (
    <div className={"main project-page"}>
      <ProjectHeader content={"Central Rental"} />
      <Mockups urls={mockups} />

      <section>
        This app is a commercial project for a short-term flat rental business
        in north-eastern Poland. Features include dynamic display of flats, in
        cards and on a map, with JSON-based data storage.
      </section>

      <section>
        The project is currently running successfully in production and creating
        revenue for the company.
      </section>

      <TagList tagList={businessList} heading={"Project Type"} />
      <TagList tagList={techList} heading={"Technologies Used"} />
      <div className={"controls"}>
        <a target="_blank" href="https://centralrental.pl" className={"button"}>
          Try it
        </a>
      </div>
    </div>
  );
};

export default CentralRental;
