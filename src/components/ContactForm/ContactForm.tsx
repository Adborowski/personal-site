import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsSending(true);
    setIsSent(false);
    emailjs
      .sendForm(
        "service_qou53ru",
        "template_marsqdb",
        form.current,
        "fjfAQbbLow0eVGHC-"
      )
      .then(
        (result) => {
          setIsSending(false);
          setIsSent(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className={styles.ContactForm} ref={form} onSubmit={sendEmail}>
      <div className={styles.formField}>
        <label>Name</label>
        <input className={styles.textInput} type="text" name="from_name" />
      </div>
      <div className={styles.formField}>
        <label>Email</label>
        <input className={styles.textInput} type="email" name="reply_to" />
      </div>

      <div className={styles.formField}>
        <label>Message</label>
        <textarea className={styles.textInput} name="message" />
      </div>

      <div className={styles.controls}>
        <input className={"button"} type="submit" value="Send" />

        <div className={styles.feedback}>
          {isSent && (
            <span>
              Message received!
              <br /> I will get back to you as soon as possible.
            </span>
          )}

          {isSending && <span>Sending...</span>}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
