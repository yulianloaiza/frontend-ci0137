import {FaMapMarkerAlt } from "react-icons/fa";
//Pendiente hacerlo responsive

//Va a llevar borde? <div className={`border ${theme.productBorder}`}>
//pendiente hacer el tamaño de los usbtitulos mas pequeño
//pendiente agregar icono de google maps antes de ubicacion
//Pendiente ver si se tiene que modificar el tamano de la imagen
function ContentCard({
  image,
  mainText,
  subtitle,
  secondaryText,
  location,
  onClick,
}) {
  //<div className="flex gap-4 content-start w-1/4 bg-idle-grey">
  //Tal vez forzar un tamaño para el div que guarda la imagen?
  return (
    <>
      <div className="flex gap-4 content-start w-1/4 bg-idle-grey">
        <div>          
          <div>
            <img src={image} alt={mainText} />
          </div>
          <div className="p-4 text-left">
            <p className="text-subtitle-grey"> Nombre </p>
            <p className="text-xl pb-2">{mainText}</p>
            <p className="text-subtitle-grey">{subtitle}</p>
            <p className="text-lg pb-2">{secondaryText}</p>
            <p className="text-subtitle-grey"> Ubicación </p>
            <p className="text-lg flex gap-2"><FaMapMarkerAlt color="EA4335" className=" mt-1"/>{location}</p>

            
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ContentCard;
