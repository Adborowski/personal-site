import TagList from "../components/TagList/TagList";

const IvyUkraine = () => {
  const tagList = [
    { label: "Headless CMS", type: "code" },
    { label: "Testing Frameworks", type: "code" },
  ];
  return (
    <div className={"main project-page"}>
      <h1>Ivy Ukraine</h1>

      <section>
        The system supports four languages, and a custom two-level search
        capability for high-precision queries including tutoring subject and
        education level.
      </section>

      <TagList tagList={tagList} />

      <div className={"controls"}>
        <a target="_blank" href="https://ivyukraine.com" className={"button"}>
          Try it
        </a>
      </div>
    </div>
  );
};

export default IvyUkraine;
