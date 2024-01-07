import { faFile, faPenNib } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Custom = () => {
    return ( 
        <div className="bg-white flex lg:flex-col gap-2 p-2 rounded-md">
            <Button 
                icono={faFile}
                iconoClass={'text-xl'}
                texto={'Contenido'}
                botonClass={'bg-gray-200 shadow-md shadow-black rounded-md w-24 flex flex-col items-center p-4 text-black'}
            />
            <Button 
                icono={faPenNib}
                iconoClass={'text-xl'}
                texto={'Personalizar'}
                botonClass={'bg-gray-200 shadow-md shadow-black rounded-md w-24 flex flex-col items-center p-4 text-black'}
            />
        </div>
     );
}
export default Custom;