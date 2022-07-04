import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
//Pendiente que al darle click redireccione a la pagina especifica del animal. O no se
// si eso se hace desde el lugar donde se llama el componente

//Va a llevar borde? <div className={`border ${theme.productBorder}`}>
function ContentCard({
  image,
  mainText,
  subtitle,
  secondaryText,
  location,
  clickLink,
  forceSmallComponent = "false",
}) {
  //Nos permite saber si es necesario renderizar de nuevo el componente para mostrarse mas pequeño si es una pantalla menor de 640 px
  const [smallScreen, setsmallScreen] = useState(
    window.innerWidth < 640 ? "true" : "false"
  );
  let navigate = useNavigate();

  //Envolvemos el listener en el useEffect para poder eliminarlo despues de renderizar y evitar fugas de memoria
  useEffect(() => {
    //Cada vez que se actualiza el largo de la pagina corremos esta funcion.
    //Nos permite saber cuando tenemos que cambiar el tamaño de las content cards
    function handleResize() {
      forceSmallComponent === "true"
        ? setsmallScreen("true")
        : setsmallScreen(window.innerWidth < 640 ? "true" : "false");
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //Se fuerza a que las imagenes sean de 800x800 pixeles
  //Implementar esto con un useeffect que actualize,
  return (
    <>
      <div
        className={`grid grid-cols-1 gap-4 bg-idle-grey border rounded cursor-pointer
      content-start
      ${
        smallScreen === "true"
          ? `w-1/2 max-w-sm lg:w-1/4`
          : `md:max-w-xs lg:max-w-3xl`
      } `}
        onClick={() => navigate(clickLink)}
      >
        <div>
          <div>
            <img
              className="w-full h-full object-cover rounded-t"
              src={image}
              alt={mainText}
            />
          </div>
          <div className="p-4 text-left">
            <p className="text-base text-subtitle-grey"> Nombre </p>
            <p className="text-xl pb-2">{mainText}</p>
            <p className="text-base text-subtitle-grey">{subtitle}</p>
            <p className="text-lg pb-2">{secondaryText}</p>
            <p className="text-base text-subtitle-grey"> Ubicación </p>
            <p className="text-lg flex gap-2">
              <FaMapMarkerAlt color="EA4335" className=" mt-1" />
              {location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentCard;
