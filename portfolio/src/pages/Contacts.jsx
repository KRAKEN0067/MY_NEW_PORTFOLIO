import React from "react";
import Contactform from "../components/contact/Contactform";
import ContactWays from "../components/contact/ContactWays";

const Contacts = () => {
  return (
    <div>
      <section id="Contact" className="min-h-screen bg-gray-950 sm:p-8">
        <Contactform />
        <ContactWays />
      </section>
    </div>
  );
};

export default Contacts;
