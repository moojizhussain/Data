import {useState} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const NavBar = () => {
  const [nav, setNav] = useState(false)
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "protfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div>
      <div className="w-full h-20 bg-black flex justify-between items-center">
        <div>
          <h1 className="font-medium text-gray-300 text-5xl font-signsture">
            Moojiz
          </h1>
        </div>
        <ul className="hidden md:flex">
          {links.map(({id,link}) => (
            <li key={id} className=" px-4 capitalize text-gray-500 font-medium hover:scale-105 duration-150 cursor-pointer">
              {link}
            </li>
          ))};
        
        </ul>
        <div onClick={()=>setNav(!nav)}  className="md:hidden md:text-purple-900 cursor-pointer text-gray-500 
          pr-4">
             {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
             {links.map(({id,link})=>(
            <li key={id} className="capitalize hover:scale-105 duration-200 text-gray-400 px-4 cursor-pointer text-4xl py-6">{link}</li> 
             ))}
          </ul>
          )}
          
      </div>
    </div>
  );
};

export default NavBar;
