import Logo from "../Logo";
import { Link } from "react-router-dom";
//Todavia falta que sea responsive
function Header() {
  return (
    <>
      <div className="flex px-4 md:px-8 lg:px-20 py-4 mb-8 bg-navy-blue">
        <div className="w-1/2">
          <Logo width="w-20" height="h-20" />
        </div>
        <div className="w-1/2 flex gap-20 items-center justify-end text-brown-gold font-semibold">
          <Link to="/Home">
            <p>Inicio</p>
          </Link>
          <Link to="/Animals">
            <p>Animales</p>
          </Link>
          <Link to="/Organizations">
            <p>Organizaciones</p>
          </Link>
          <Link to="/About">
            <p>Sobre Nosotros</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;