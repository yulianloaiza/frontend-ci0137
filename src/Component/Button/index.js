import { useNavigate } from "react-router-dom";
//Boton puede ir hacia atras o bien ir a una ruta determinada si se le pasan los parametros adecuados
function Button({
  text,
  width,
  navigateTo = "",
  goBack = false,
  buttonType = "button",
}) {
  const navigate = useNavigate();
  return (
    <button
      type={buttonType}
      className={`bg-navy-blue text-white font-semibold py-2 px-4 w-${width} border border-white`}
      onClick={() =>
        navigateTo !== ""
          ? navigate(navigateTo)
          : goBack !== false
          ? navigate(-1)
          : null
      }
    >
      {text}
    </button>
  );
}

export default Button;
