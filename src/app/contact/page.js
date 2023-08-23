import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className="bg-black p-6 flex flex-col flex-wrap">
      <h1 className="text-center mt-6 text-red-600 font-extrabold text-4xl">
        Contact Us
      </h1>
      <ContactCard />
      <div className="mt-12">
        <section className="text-white ">
          <h2 className="text-center text-3xl">
            We'd love to hear <span className="text-red-600"> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default Contact;
