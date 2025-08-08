import React from "react";
import ContactForm from "../components/contact/Contactform";
import ContactWays from "../components/contact/ContactWays";

const Contacts = () => {
  return (
    <div>
      <section id="Contact" className="min-h-screen bg-gray-950 sm:p-8">
        <ContactForm />

        <ContactWays />
      </section>
    </div>
  );
};

export default Contacts;
