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
  onClick,
}) {
  //Pendiente, que las imagenes se vean a full, o que las imagenes sean mas widescreen y se rellene el
  //espacio en blanco de alguna manera
  return (
    <>
      <div className="flex gap-4 content-start w-1/4 bg-idle-grey border rounded">
        <div>
          <div>
            <img
              className="w-full h-60 object-cover rounded-t"
              src={image}
              alt={mainText}
            />
          </div>
          <div className="p-4 text-left">
            <p className="text-subtitle-grey"> Nombre </p>
            <p className="text-xl pb-2">{mainText}</p>
            <p className="text-subtitle-grey">{subtitle}</p>
            <p className="text-lg pb-2">{secondaryText}</p>
            <p className="text-subtitle-grey"> Ubicación </p>
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
