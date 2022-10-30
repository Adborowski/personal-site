import { Link } from "react-router-dom";

const IvyUkraine = () => {
  return (
    <div className={"main project-page"}>
      <h1>Ivy Ukraine</h1>
      <section>
        I have worked on this system pro-bono, in support of children of
        Ukrainian refugees escaping the Russian invasion of 2022. I was the only
        frontend developer.
      </section>

      <section></section>

      <section>
        The system supports four languages, and a custom two-level search
        capability for high-precision queries including tutoring subject and
        education level.
      </section>

      <section>Production-grade release is planned for November '22.</section>
      <div className={"controls"}>
        <a target="_blank" href="https://ivyukraine.com" className={"button"}>
          Try it
        </a>
      </div>
    </div>
  );
};

export default IvyUkraine;
