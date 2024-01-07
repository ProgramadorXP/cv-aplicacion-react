import { faTrash, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Example = () => {
    return ( 
        <div className="bg-white p-2 w-fit flex gap-2 rounded-md">
            <Button 
                icono={faTrash}
                iconoClass={''}
                texto={'Limpiar Ejemplo'}
                botonClass={'px-2 text-white font-bold bg-red-600 shadow-md shadow-black rounded-md flex items-center gap-2 py-1'}
            />
            <Button 
                icono={faArrowsRotate}
                iconoClass={''}
                texto={'Cargar Ejemplo'}
                botonClass={'px-2 font-bold text-white bg-green-600 shadow-md shadow-black flex items-center gap-2 bg-gray-200 rounded-md px-2 py-1'}
            />
        </div>
     );
}
 
export default Example;