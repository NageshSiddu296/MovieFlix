import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";

import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex justify-around mt-8 ">
          <div className="flex flex-col items-center flex-wrap bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-110 p-6 px-16">
            <i className="text-red-600 text-5xl mb-3">
              <MdEmail />
            </i>
            <h2 className="text-white">Email</h2>
            <p className="text-white">Monday to Friday Expected </p>
            <p className="text-white">response time: 72 hours </p>
            <Link href="/" className="text-white">
              Send Email →
            </Link>
          </div>

          <div className="flex flex-col items-center flex-wrap bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-110 p-6 px-16">
            <i className="text-red-600 text-5xl mb-3">
              <MdVoiceChat />
            </i>
            <h2 className="text-white">Live Chat</h2>
            <p className="text-white">Weekdays: 9 AM — 6 PM ET</p>
            <p className="text-white">Weekends: 9 AM — 5 PM ET </p>
            <Link href="/" className="text-white">
              Chat Now →
            </Link>
          </div>

          <div className="flex flex-col items-center flex-wrap bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-110 p-6 px-16">
            <i className="text-red-600 text-5xl mb-3">
              <MdForum />
            </i>
            <h2 className="text-white">Community Forum</h2>
            <p className="text-white">Monday to Friday Expected </p>
            <p className="text-white">response time: 72 hours </p>
            <Link href="/" className="text-white">
              Ask The Community →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
