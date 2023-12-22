import React from "react";
import { ImLocation2 } from "react-icons/im";
import { IoIosContact } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center m-10">
      <section className="max-w-2xl p-6 bg-blue-200 shadow-md rounded-md">
        <div className="text-center mb-8">
          <p className="text-base font-semibold uppercase tracking-wide text-blue-600">
            Contact
          </p>
          <h2 className="font-bold mb-4 text-3xl text-gray-900">
            Get in Touch
          </h2>
        </div>
        <div className="space-y-8">
          <ContactItem
            icon={<ImLocation2 size={30} />}
            title="Address"
            content="9/3 Kandy Road, Kengalla"
          />
          <ContactItem
            icon={<BsFillTelephoneFill size={30} />}
            title="Contact"
            content="Mobile: (+94) 74 1146 366"
          />
          <ContactItem
            icon={<IoMdMail size={30} />}
            title="Email address"
            content="m.asjedhcr7@gmail.com"
          />
          <ContactItem
            icon={<IoIosContact size={30} />}
            title="About Me"
            content={
              <Link to="https://asjedh.netlify.app">
                <button className="text-blue-600 underline">
                  My Portfolio
                </button>
              </Link>
            }
          />
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({ icon, title, content }) => (
  <div className="flex items-center">
    <div className="flex h-14 w-14 items-center justify-center rounded bg-blue-400 text-gray-50">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">
        {title}
      </h3>
      <p className="text-lg text-gray-600">{content}</p>
    </div>
  </div>
);

export default ContactUs;
