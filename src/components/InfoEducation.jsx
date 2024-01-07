import FormEducation from "./FormEducation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const InfoEducation = () => {
  return (
    <section className="bg-white rounded-md py-4 px-4 flex flex-col">
      <h3 className="text-black font-bold py-1 text-center text-2xl shadow-black shadow-md rounded-md">
        <FontAwesomeIcon icon={faGraduationCap} className="mr-2"/>
        Educación
      </h3>
      <FormEducation />
    </section>
  );
};

export default InfoEducation;
