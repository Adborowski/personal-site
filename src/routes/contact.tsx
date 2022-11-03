import ContactForm from "../components/ContactForm/ContactForm";
import Socials from "../components/Socials/Socials";
import Greeting from "../components/Socials/Greeting";

const Contact = () => {
  return (
    <div className={"main"}>
      <h1>Contact</h1>
      <Greeting />
      <Socials />
      <ContactForm />
    </div>
  );
};

export default Contact;
