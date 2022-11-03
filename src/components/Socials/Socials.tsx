import styles from "./Socials.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Socials = () => {
  return (
    <div className={styles.Socials}>
      <a
        href="https://www.facebook.com/adam.borowski.9883/"
        target="_blank"
        className={styles.social}
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/adam_boro_borowski/"
        target="_blank"
        className={styles.social}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.linkedin.com/in/adam-borowski-38a08994/"
        target="_blank"
        className={styles.social}
      >
        <FaLinkedinIn />
      </a>
      <a
        href="mailto:adborowski@gmail.com"
        target="_blank"
        className={styles.social}
      >
        <HiOutlineMail />
      </a>
      <a
        href="https://drive.google.com/file/d/1nLchoHq-ESOp7CnLTE_3TxAyysHBFjhg/view?usp=share_link"
        target="_blank"
        className={styles.social}
      >
        <span>CV</span>
      </a>
    </div>
  );
};

export default Socials;
