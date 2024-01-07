import Input from "./Input";

const FormPersonal = () => {
    return ( 
        <form action="" className="mt-6 mb-2">
            <Input 
                labelText={'Nombre Completo'}
                labelClass={'text-black font-bold text-lg'}
                inputType={'text'}
                inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
                inputId={'idName'}
                inputHolder={'Jonhatan Villalobos Parra'}
            />
            <Input 
                labelText={'Correo Electrónico'}
                labelClass={'text-black font-bold text-lg'}
                inputType={'email'}
                inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
                inputId={'idEmail'}
                inputHolder={'jonyvilla44@gmail.com'}
            />
            <Input 
                labelText={'Número Teléfonico'}
                labelClass={'text-black font-bold text-lg'}
                inputType={'text'}
                inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
                inputId={'idTel'}
                inputHolder={'1234567891'}
            />
            <Input 
                labelText={'Dirección'}
                labelClass={'text-black font-bold text-lg'}
                inputType={'text'}
                inputClass={'p-2 rounded-md bg-gray-300 outline-none text-black tracking-wide'}
                inputId={'idAddress'}
                inputHolder={'London, UK'}
            />
        </form>
     );
}
 
export default FormPersonal;