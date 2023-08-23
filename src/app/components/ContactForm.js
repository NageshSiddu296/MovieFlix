import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-5 m-auto bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 w-96 p-6">
      <form className="flex flex-col items-center">
        <div className="mb-3">
          <label htmlFor="username" className="flex flex-col text-lg">
            Enter your name
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className="mt-2 rounded-lg p-1 text-[12px] w-72"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="flex flex-col text-lg">
            Email
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 rounded-lg p-1 text-[12px] w-72"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="flex flex-col text-lg">
            Phone Number
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone"
              className="mt-2 rounded-lg p-1 text-[12px] w-72"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="flex flex-col text-lg">
            Message
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Enter your Message"
              className="mt-2 rounded-lg p-1 text-[12px] w-72"
              autoComplete="off"
            />
          </label>
        </div>

        <div className="bg-red-600 rounded-lg p-3">
          <button type="submit" className="flex flex-col">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
