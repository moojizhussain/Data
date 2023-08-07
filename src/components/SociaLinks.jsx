import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SociaLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/theyashpatel",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/resume.pdf",
      download: true,
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map((e) => (
          <li key={e.id}
            className="flex justify-between items-center w-40 h-14
             px-4 rounded-md ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500"
          >
            <a
              href=""
              className="flex justify-between items-center w-full text-white "
            >
              <>
                {e.child}
              </>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SociaLinks;
