import TagList from "../components/TagList/TagList";

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

  return (
    <div className={"main project-page"}>
      <h1>Ivy Ukraine</h1>

      <section>
        Supports four languages and a custom two-level search capability for
        complex queries including tutoring subject and education level.
      </section>
      <TagList tagList={businessList} />

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
