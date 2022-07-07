import {useNavigate} from "react-router-dom";

//TODO arreglar a que este logo sea el de la app, tal ves modificar tamaño default y que el src este en folder public
function Logo({ width, height, link='/home' }) {
  let navigate = useNavigate(); 
  return (
    <img
      className={`${width || "w-20"} ${height || "h-20"} cursor-pointer`}
      onClick={()=> navigate(link)}
      alt="Logo"
      src="https://bit.ly/logo-ci0137"
    />
  );
}

export default Logo;
