import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import Logo from "../assets/svg/logo";
import { Link } from "react-router-dom";

const navigation = [
  {
    id: 1,
    link: "/",
    name: "Home",
    icon: <BiHomeAlt2 size={30} color="black" />,
  },
  {
    id: 2,
    link: "services",
    name: "Services",
    icon: <GrServices size={30} color="black" />,
  },
  {
    id: 3,
    link: "add-vehicle",
    name: "Add Vehicle",
    icon: <IoIosAddCircleOutline size={30} color="black" />,
  },
  {
    id: 4,
    link: "manage-vehicle",
    name: "Manage Vehicles",
    icon: <AiOutlineCar size={30} color="black" />,
  },
];

const navsFooter = [
  {
    id: 1,
    link: "contact-us",
    name: "Contact",
    icon: <IoIosHelpCircleOutline size={30} color="black" />,
  },
  {
    id: 2,
    link: "privacy-policy",
    name: "Privacy Policy",
    icon: <MdOutlinePrivacyTip size={30} color="black" />,
  },
];

const Sidebar = () => {
  return (
    <nav className="flex flex-col fixed items-center h-screen w-64 bg-blue-400 border-r-4 border-blue-800">
      <div className="h-full flex flex-col">
        <div className="mt-4">
          <Link to="/" className="flex-none">
            <Logo height={150} width={150} />
          </Link>
          <hr className="my-4 border-t-2 border-blue-800" />
        </div>
        <div className="mt-4 flex flex-col justify-between">
          <ul className="text-white font-medium">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="flex items-center gap-x-2 text-white p-3 rounded-lg hover:bg-blue-600 duration-300 text-lg"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="text-white font-medium">
            {navsFooter.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.link}
                  className="flex items-center gap-x-2 text-white p-3 rounded-lg hover:bg-blue-600 duration-300 text-lg"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
