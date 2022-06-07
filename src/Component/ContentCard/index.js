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
  return (
    <>
      <div className="flex gap-4 w-1/4 px-4 md:px-8 lg:px-20 py-4 bg-idle-grey">
        <div>
          <div>
            <img src={image} alt={mainText} />
          </div>
          <div className="p-4 text-left">
            <p className="text-subtitle-grey"> Nombre </p>
            <p>{mainText}</p>
            <p className="text-subtitle-grey">{subtitle}</p>
            <p>{secondaryText}</p>
            <p className="text-subtitle-grey"> Ubicación </p>

            <p>{location}</p>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default ContentCard;
