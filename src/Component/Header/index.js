import Logo from "../Logo";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex px-4 md:px-8 lg:px-20 py-4 bg-navy-blue">
        <div className="w-1/2">
          <Logo width="w-20" height="h-20" />
        </div>
        <div className="w-1/2 flex gap-3 items-center justify-end">
          <Link to="/Home">
            <p className="text-light-gold">Inicio</p>
          </Link>
          <Link to="/Animals">
            <p className="text-light-gold">Animales</p>
          </Link>
          <Link to="/Organizations">
            <p className="text-light-gold">Organizaciones</p>
          </Link>
          <Link to="/About">
            <p className="text-light-gold">Sobre Nosotros</p>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Header;
