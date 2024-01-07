import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ icono, texto, botonClass, iconoClass }) => {
  return (
    <button className={botonClass}>
      <FontAwesomeIcon icon={icono} className={iconoClass} />
      { texto }
    </button>
  );
};

export default Button;
