import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

function ContentCard({
  image,
  mainText,
  subtitle,
  secondaryText,
  location,
  clickLink,
  single = false,
}) {
  let navigate = useNavigate();

  //Se fuerza a que las imagenes sean de 800x800 pixeles
  //Implementar esto con un useeffect que actualize,
  return (
    <>
      <div
        className={`bg-idle-grey border rounded cursor-pointer
      content-start 
      ${single === true ? `w-1/2 max-w-sm lg:w-1/4` : ` `}
      `}
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
