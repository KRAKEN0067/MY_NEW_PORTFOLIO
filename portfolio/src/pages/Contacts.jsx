import React from "react";
import ContactForm from "../components/contact/ContactForm";

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Contact Form Section */}
      <section id="Contact" className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Send Me a Message
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your vision to reality.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contacts;
