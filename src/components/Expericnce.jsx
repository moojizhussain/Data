import React from 'react'
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Expericnce = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: nextjs,
          title: "Next JS",
          style: "shadow-white",
        },
        {
          id: 6,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 7,
          src: graphql,
          title: "GraphQL",
          style: "shadow-pink-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
      ];
  return (
    <div name="Expericnce"
      className=' w-full md:h-screen bg-gradient-to-b from-black to-gray-800 text-white'
    >
     <div className=' max-w-screen-xl w-full h-full mx-auto flex flex-col justify-center' >
        <div className='pb-8'>
            <p className='text-white text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>  
            <p className='py-6'>These are technologies l've worked with</p>
        </div>

        <div className=' w-full grid sm:grid-cols-2 md:grid-cols-3 text-center gap-8 px-12  py-8 border-2'>
            {techs.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md  hover:scale-105 duration-200 ${style}`}>
                <img src={src} alt=""  className='border-2 w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
            ))}
            
        </div>
     </div>
    </div>
  )
}

export default Expericnce