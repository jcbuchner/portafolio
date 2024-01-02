"use client";

import Swal from "sweetalert2";

import CustomButton from "../shared/CustomButton";

interface IContact {
  href: string;
  name: string;
  label: string;
}

export const Info = () => {
  const contacts = [
    {
      href: "https://github.com/jcbuchner",
      name: "GitHub",
      label: "Ir a mi perfil de Github 🚀",
    },
    {
      href: "https://www.linkedin.com/in/jcbuchner/",
      name: "LinkedIn",
      label: "Ir a mi Perfil de LinkedIn ⚡",
    },
  ];

  const instagram = {
    href: "https://www.instagram.com/juan.buchner",
    name: "Instagram",
    label: "Ir a mi Perfil de Instagram 🪐",
  };

  const onHandleClick = (contact: IContact) => {
    Swal.fire({
      title: contact.label,
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: `<a href=${contact.href} target="blank">Ábrelo en una nueva ventana!🔥</a>`,
      icon: "info",
    });
  };

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        {/* Acerca de mi <span className="block font-bold text-white text-4xl mt-1 lg:text-4xl">¿Quien soy?</span> */}
        <span className="block font-bold text-white text-4xl mt-1 lg:text-4xl">¿Quien soy?</span>

      </h1>
      <hr className="w-28 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <div className="lg:max-w-lg font-light text-primary text-lg">
       
        <p className="my-3">
        Mi nombre es Juan Carlos Büchner, Soy Tecnico en Informatica e Ingeniero en Gestion Tecnologias de la Informacion, especializado en el desarrollo Fullstack y Ciberseguridad juntando lo mejor de ambos mundos.
        Altamente motivado en aprender y estar a la vanguardia en lo que a tecnologias se refiere, tanto como del desarrollo y seguridad a todo el espectro TI.
          
        </p>

        <p className="my-3">y lo mas importante... comprometido con los logros y la satisfaccion del cliente final.</p>

       
      </div>
      <hr className="w-36 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:max-w-lg my-4 lg:my-0">
        {contacts.map((contact) => (
          <div key={contact.href}>
            <CustomButton btnType="submit" title={contact.name} containerStyles="!my-1 w-full border-borderColor bg-tertiary hover:border-primary" textStyles="text-white" onClick={() => onHandleClick(contact)} />
          </div>
        ))}
        <div className="col-span-2 md:col-span-1">
          <CustomButton btnType="submit" title={instagram.name} to={instagram.href} containerStyles="!my-1 w-full border-borderColor bg-tertiary hover:border-primary" textStyles="text-white" onClick={() => onHandleClick(instagram)} />
        </div>
      </div>
    </>
  );
};
