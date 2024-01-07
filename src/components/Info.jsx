import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <section className="bg-white rounded-md">
      <header className="bg-blue-950 rounded-t-md flex flex-col items-center p-4 gap-4">
        <h2 className="font-bold text-4xl text-white mb-5">Josephine Meyers</h2>
        <div className="flex flex-col gap-4 xl:flex-row">
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            josephine.meyers@mail.co.uk
          </p>
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-xl" />
            +44 3245 5521 5521
          </p>
          <p className="flex items-center gap-3">
            <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
            London, UK
          </p>
        </div>
      </header>
      <main className="p-4">
        <h4 className="text-center font-bold text-xl text-blue-950 bg-gray-300">Education</h4>
        <div className="text-black flex py-4">
          <div className="w-[25%]">
            <p>08/2020 - present</p>
            <b>New York City, US</b>
          </div>
          <div className="w-[75%]">
            <b>London City University</b>
            <p>Bachelors in Economics</p>
          </div>
        </div>
        <h4 className="text-center font-bold text-xl text-blue-950 bg-gray-300">Experiencia Profesional</h4>
        <div className="text-black flex py-4">
          <div className="w-[25%]">
            <p>08/2020 - present</p>
            <b>New York City, US</b>
          </div>
          <div className="w-[75%]">
            <b>Umbrella Inc.</b>
            <p>UX & UI Designer</p>
            <p>
              Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android
            </p>
          </div>
        </div>
        <div className="text-black flex py-4">
          <div className="w-[25%]">
            <p>04/2018 - 02/2019</p>
            <b>Berlin, Germany</b>
          </div>
          <div className="w-[75%]">
            <b>Black Mesa Labs</b>
            <p>UX Research Assistant</p>
            <p>
              Supported senior researchers on accessibility standards for the
              open web. Created and usability tested wireframes and prototypes.
              Produced interactive documentation for quick onboarding of new
              researchers.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Info;
