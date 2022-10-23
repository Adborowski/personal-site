import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qou53ru",
        "template_marsqdb",
        form.current,
        "fjfAQbbLow0eVGHC-"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={styles.formField}>
        <label>Name</label>
        <input type="text" name="from_name" />
      </div>
      <div className={styles.formField}>
        <label>Email</label>
        <input type="email" name="reply_to" />
      </div>

      <div className={styles.formField}>
        <label>Message</label>
        <textarea name="message" />
      </div>

      <div className={styles.controls}>
        <input className={"button"} type="submit" value="Send" />
      </div>
    </form>
  );
};

export default ContactForm;
