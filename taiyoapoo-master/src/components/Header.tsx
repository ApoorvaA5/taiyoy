import  { FC, useState } from "react";
import Sidebar from "./Sidebar";
import { BiMenuAltLeft } from "react-icons/bi";

type HeaderProps = {
  title?: string;
};

const navLinks = [
  { name: "CONTACT", href: "/contact" },
  { name: "LINE GRAPH", href: "/graph" },
  { name: "MAP", href: "/map" },
];

const Header: FC<HeaderProps> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSideBarClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-900"> {/* Dark blue background */}
      <h1
        className="text-3xl font-bold text-white flex items-center justify-center gap-8
      sm:justify-center text-center p-4"
      >
        <span
          className="text-3xl flex sm:hidden hover:text-gray-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BiMenuAltLeft />
        </span>{" "}
        {title} 
      </h1>
      {isOpen && (
        <Sidebar handleSideBarClose={handleSideBarClose} navLinks={navLinks} />
      )}
    </div>
  );
};

export default Header;
