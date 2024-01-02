"use client";

import Swal from "sweetalert2";

import ReadMore from "../shared/ReadMore";
import CustomButton from "../shared/CustomButton";
import { SiBootstrap, SiCypress, SiFirebase, SiJest, SiLaravel, SiReact, SiRedux } from "react-icons/si";
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoTypescript, BiLogoHtml5 } from "react-icons/bi";

export const ProjectLists = () => {
  const projects = [
 /*    {
    
      stacks: [
        {
          name: "React.js",
          logo: <SiReact className="text-white w-6 h-6" />,
        },
        {
          name: "Typescript",
          logo: <BiLogoTypescript className="text-white w-7 h-7" />,
        },
        {
          name: "Firebase",
          logo: <SiFirebase className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },

        {
          name: "Laravel",
          logo: <SiLaravel className="text-white w-7 h-7" />,
        },
        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss className="text-white w-7 h-7" />,
        },
      ],
    }, */
    {
      name: "Buchner TIC",
      description:
        "Sitio de empresa con HTML y CSS que tenga intención de comunicar un producto para su venta.",
      title: "¿Visitar Buchner.cl?☄️",
      link: "https://www.buchner.cl",
      img: "/project/proyecto1.jpg",
      stacks: [
        {
          name: "HTML5",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },

        {
          name: "CSS3",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Lista de Tareas",
      description:
        "Lista de Tareas Básica con HTML, CSS y Javascript, en la cual el usuario pueda agregar, modificar, actualizar o borrar un dato específico. ",
      title: "¿Visitar Lista de Tareas? ☄️",
      link: "https://proyecto2-jcbuchner.netlify.app/",
      img: "/project/proyecto2.jpg",
      stacks: [
        {
          name: "HTML5",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },

        {
          name: "CSS3",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },

        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },



      ],
    },
    {
      name: "Tablero de Datos (Dashboard) ",
      description:
        "Tablero de Datos (Dashboard) aplicación realizando una conexión a un API (financiera, educativa, social, etc) y presentando los datos en una interfaz.",
      title: "¿Visitar Tablero de Datos? ☄️",
      link: "https://delightful-rolypoly-0e880d.netlify.app/",
      img: "/project/proyecto3.jpg",
      stacks: [
        {
          name: "HTML5",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },

        {
          name: "CSS3",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },

        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
       
      ],
    },
    {
      name: "Restaurante",
      description:
        "Sitio de un restaurante, su menú, horarios, información de contacto. Así mismo, se integrará un sistema para que los clientes puedan reservar..",
      title: "¿Visitar Restaurante? ☄️",
      link: "https://fondo-de-bikini.netlify.app/",
      img: "/project/proyecto-4.jpg",
      stacks: [
     
     
        {
          name: "HTML5",
          logo: <BiLogoHtml5 className="text-white w-7 h-7" />,
        },
        {
          name: "CSS3",
          logo: <BiLogoCss3 className="text-white w-7 h-7" />,
        },

        {
          name: "JavaScript",
          logo: <BiLogoJavascript className="text-white w-7 h-7" />,
        },
        {
          name: "React.js",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
      ],
    },
  ];

  const github = {
    title: "Ve todos mis proyectos en GitHub🚀",
    link: "https://github.com/jcbuchner",
  };

  const onHandleClick = (title: string, link: string) => {
    Swal.fire({
      title: title,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: `<a href=${link} target="blank">Abrir en nueva pestaña🔥</a>`,
      icon: "info",
    });
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className="text-base font-medium text-primary md:text-xl text-center">
        <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">Muestra de Proyectos</span>
      </h1>
      <hr className="w-36 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <p className="text-primary text-base my-3 lg:text-xl text-center">
        Aqui algunos de mis proyectos, para verlos todos en Github haz click{" "}
        <span onClick={() => onHandleClick(github.title, github.link)} className="cursor-pointer text-slate-200 hover:text-white">
          aquí
        </span>
      </p>
      <div className="grid md:grid-cols-2 my-3 w-full lg:w-5/6">
        {projects.map((project) => (
          <div key={project.img} className="md:mx-4 mb-6 border border-borderColor bg-tertiary rounded-md">
            <div className="bg-black flex justify-center items-center border rounded-sm border-borderColor shadow-lg">
              <img src={project.img} alt={project.name} className="w-full h-auto mx-auto rounded-sm"/>
            </div>
            <div className="flex flex-col px-5">
              <div className="flex items-center justify-between my-4">
                <p className="font-bold text-justify text-base lg:text-xl">{project.name}</p>
                <div className="flex gap-x-1 lg:gap-x-2">
                  {project.stacks.map((stack) => (
                    <div key={stack.name} className="w-11 h-11 bg-black border border-borderColor rounded-md flex items-center justify-center">
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </div>
              <ReadMore textSlice={120} pStyle="mb-2 text-justify text-primary">
                {project.description}
              </ReadMore>
              <CustomButton btnType="submit" title="Ir al Sitio" containerStyles="w-full border-borderColor bg-black hover:border-primary" textStyles="text-white" onClick={() => onHandleClick(project.title, project.link)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
