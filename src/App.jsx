import Custom from "./components/Custom";
import Example from "./components/Example";
import InfoPersonal from "./components/InfoPersonal";
import InfoEducation from "./components/InfoEducation";
import InfoExperience from "./components/InfoExperience";
import Info from "./components/Info";

function App() {
  return (
    <div className="m-8 flex flex-col lg:flex-row lg:flex-wrap gap-4">
      <h1 className="mb-8 text-center lg:w-full text-white font-extrabold text-3xl shadow-md shadow-white py-2 font-serif tracking-widest rounded-md">
        CV Aplicación
      </h1>
      <div className="flex lg:flex-col">
        <Custom />
      </div>
      <div className="flex flex-col flex-wrap gap-4">
        <Example />
        <InfoPersonal />
        <InfoEducation />
        <InfoExperience />
      </div>
      <div className="flex flex-1">
        <Info />
      </div>
    </div>
  );
}

export default App;
