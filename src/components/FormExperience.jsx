import { faTrash, faBan, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Button from "./Button";

const FormExperience = () => {
  return (
    <form action="" className="mt-6 mb-2">
      <Input
        labelText={"Nombre de la Compañía"}
        labelClass={'text-black font-bold text-lg'}
        inputType={"text"}
        inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
        inputId={"idCompany"}
        inputHolder={"Ingresa el nombre de la compañía"}
      />
      <Input
        labelText={"Posición"}
        labelClass={'text-black font-bold text-lg'}
        inputType={"text"}
        inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
        inputId={"idPosition"}
        inputHolder={"Ingresa la posición"}
      />
      <Input
        labelText={"Fecha de Inicio"}
        labelClass={'text-black font-bold text-lg'}
        inputType={"date"}
        inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
        inputId={"idStartDate"}
        inputHolder={"Ingresa la fecha de inicio"}
      />
      <Input
        labelText={"Fecha de terminación"}
        labelClass={'text-black font-bold text-lg'}
        inputType={"date"}
        inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
        inputId={"idEndDate"}
        inputHolder={"Ingresa la fecha de finalización"}
      />
      <Input
        labelText={"Locación"}
        labelClass={'text-black font-bold text-lg'}
        inputType={"text"}
        inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
        inputId={"idLocation"}
        inputHolder={"Ingresa la locación"}
      />
      <Input
        labelText={"Descripción"}
        labelClass={'text-black font-bold text-lg'}
        inputType={"text"}
        inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
        inputId={"idDescription"}
        inputHolder={"Ingresa la descripción"}
      />
      <div className="mt-10 flex justify-between">
        <Button 
          icono={faTrash} 
          texto={"Borrar"} 
          iconoClass={''}
          botonClass={'px-2 text-white font-bold bg-red-600 shadow-md shadow-black rounded-md flex items-center gap-2 py-1'}
        />
        <Button 
          icono={faBan} 
          texto={"Cancelar"} 
          iconoClass={''}
          botonClass={'px-2 text-white font-bold bg-blue-600 shadow-md shadow-black rounded-md flex items-center gap-2'}
        />
        <Button 
          icono={faFloppyDisk} 
          texto={"Guardar"}
          iconoClass={''}
          botonClass={'px-2 font-bold text-white bg-green-600 shadow-md shadow-black flex items-center gap-2 bg-gray-200 rounded-md px-2 py-1'}
        />
      </div>
    </form>
  );
};

export default FormExperience;