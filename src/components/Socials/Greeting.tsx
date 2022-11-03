import styles from "./Socials.module.css";

const Greeting = () => {
  return (
    <div className={styles.Greeting}>
      <div className={styles.portrait}></div>

      <section>
        <span>Thanks for dropping by.</span>

        <span>
          I am always open to new jobs, collabs, and coffee chats. <br />
          Let's talk and see if we can build something great together!
        </span>
      </section>
    </div>
  );
};

export default Greeting;
