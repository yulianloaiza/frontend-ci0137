import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../Logo";
import Mixpanel from "../../services/mixpanel.js";


function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <div className="flex px-4 md:px-8 lg:px-20 py-4 mb-8 bg-navy-blue">
        <div className="container flex flex-wrap items-center justify-between">
          <div className="w-full flex justify-between md:w-auto">
            <Logo width="w-20" height="h-20" />
            <GiHamburgerMenu
              color="CDC2AE"
              className="w-8 h-8 mt-6 cursor-pointer flex md:hidden items-center justify-end"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          </div>
          <div
            className={
              "flex-grow md:flex " +
              (navbarOpen ? " flex justify-end" : " hidden")
            }
          >
            <ul className="flex flex-col gap-3 md:gap-16 md:flex-row list-none md:ml-auto text-brown-gold font-semibold text-right">
              <li className="nav-item">
                <Link onClick={() => { Mixpanel.track(Mixpanel.TYPES.GO_TO_HOME); }} to="/">
                  <p className="hover:underline">Inicio</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {Mixpanel.track(Mixpanel.TYPES.GO_TO_ANIMALS); }} to="/animals">
                  <p className="hover:underline">Animales</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {Mixpanel.track(Mixpanel.TYPES.GO_TO_ORGANIZATIONS); }} to="/organizations">
                  <p className="hover:underline">Organizaciones</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link onClick={() => {Mixpanel.track(Mixpanel.TYPES.GO_TO_ABOUT_US); }} to="/about">
                  <p className="hover:underline">Sobre Nosotros</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
