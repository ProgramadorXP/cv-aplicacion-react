import FormPersonal from "./FormPersonal";

const InfoPersonal = () => {
  return (
    <section className="bg-white rounded-md py-4 px-4 flex flex-col">
      <h2 className="text-black font-bold py-1 text-center text-2xl shadow-black shadow-md rounded-md">
        Información Personal
      </h2>
      <FormPersonal />
    </section>
  );
};

export default InfoPersonal;
