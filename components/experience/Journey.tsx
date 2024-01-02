export const Journey = () => {
  const experiences = [
    {
      id: 4,
      place: "Universidad del Desarrollo",
      title: "Desarrollador Fulstack",
      timespan: "Agosto 2023 - Diciembre 2023",
    },
    {
      id: 3,
      place: "Universidad del Desarrollo",
      title: "Diplomado en Ciberseguridad",
      timespan: "Septiembre 2022 - Febrero 2023",
    },
    {
      id: 2,
      place: "Universidad San Sebastian",
      title: "Lienciatura en Ingenieria | Ing. en Gestion TI",
      timespan: "Marzo 2020 - Junio 2022",
    },
    {
      id: 1,
      place: "Instituto Profesional La Araucana",
      title: "Tecnico de Nivel Superior | Computación e Informática",
      timespan: "Enero 2009 - Diciembre 2010",
    },
  ];

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
      <span className="block font-bold text-white text-4xl mt-1 lg:text-5xl">Mis Estudios</span>
      </h1>
      <hr className="w-28 my-3 p-1 bg-tertiary border border-borderColor rounded-sm" />

      <div className="grid lg:grid-cols-2 my-4 gap-2">
        {experiences.map((experience) => (
          <div key={experience.place} className="bg-tertiary border border-borderColor rounded-md">
            <p className="text-justify font-bold text-white text-lg col-span-2 p-3">
              {experience.place}
              <span className="block font-normal text-slate-200 mt-1 text-base">{experience.title}</span>
              <span className="block font-normal text-primary mt-1 text-sm">{experience.timespan}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
