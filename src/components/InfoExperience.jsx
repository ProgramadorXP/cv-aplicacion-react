import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import FormExperience from "./FormExperience";

const InfoExperience = () => {
    return ( 
        <section className="bg-white rounded-md py-4 px-4 flex flex-col">
            <div>
                <h3 className="text-black font-bold py-1 text-center text-2xl shadow-black shadow-md rounded-md">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    Experiencia
                </h3>
            </div>
            <FormExperience />
        </section>
     );
}
 
export default InfoExperience;