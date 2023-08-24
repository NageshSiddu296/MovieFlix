import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className="bg-black py-12 px-4 md:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col items-center bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-105 p-6">
          <i className="text-red-600 text-5xl mb-3">
            <MdEmail />
          </i>
          <h2 className="text-white text-xl font-semibold mb-2">Email</h2>
          <p className="text-white text-sm text-center">
            Monday to Friday Expected response time: 72 hours
          </p>
          <Link href="/" className="text-white mt-4">
            Send Email →
          </Link>
        </div>

        <div className="flex flex-col items-center bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-105 p-6">
          <i className="text-red-600 text-5xl mb-3">
            <MdVoiceChat />
          </i>
          <h2 className="text-white text-xl font-semibold mb-2">Live Chat</h2>
          <p className="text-white text-sm text-center">
            Weekdays: 9 AM — 6 PM ET <br />
            Weekends: 9 AM — 5 PM ET
          </p>
          <Link href="/" className="text-white mt-4">
            Chat Now →
          </Link>
        </div>

        <div className="flex flex-col items-center bg-black rounded-xl border-2 border-gray-800 shadow-xl hover:shadow-gray-500 hover:scale-105 p-6">
          <i className="text-red-600 text-5xl mb-3">
            <MdForum />
          </i>
          <h2 className="text-white text-xl font-semibold mb-2">
            Community Forum
          </h2>
          <p className="text-white text-sm text-center">
            Monday to Friday Expected response time: 72 hours
          </p>
          <Link href="/" className="text-white mt-4">
            Ask The Community →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
