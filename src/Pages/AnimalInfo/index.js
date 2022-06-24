import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Carousel from "../../Component/Carousel";
import Button from "../../Component/Button";
//Cambiar el nombre cuando se resuelva la duda con el profe del nombre de la ruta.

/*
Aca se usa un arreglo de imagenes solo para fines ilustrativos
En realidad se debe agarrrar del backend.
El texto tambien se deberia jalar del backend
          */

function AnimalInfo() {
  /*arreglo de imagenes solo para fines ilustrativos
            En realidad se debe agarrrar del backend*/
  const imgArray = [
    "https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg",
    "https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg",
    "https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg",
    "https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/SQif8hGoA6PNTFUsqV5sEpUbUBU=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/STCTNNN5SBCQ7L34YV7WD36APA.jpg",
    "https://d2zp5xs5cp8zlg.cloudfront.net/image-35477-800.jpg",
    "https://www.dogstrust.org.uk/dogimages/1120385_ginger_20220427084245_ginger-summer-pic_800.jpg",
  ];
  return (
    <>
      <div className="bg-light-gold">
        <Header />
        <div
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
          grid grid-cols-1  
          lg:grid lg:grid-cols-2
          md:justify-items-center lg:justify-items-stretch"
        >
          {/*Columna izquierda*/}
          <div
            className="bg-component-shadow rounded py-4 mb-8
            px-4 md:px-8 lg:px-0 xl:px-20        
            max-w-3xl"
          >
            {/*arreglo de imagenes solo para fines ilustrativos
            En realidad se debe agarrrar del backend*/}
            <Carousel images={imgArray} />
          </div>

          {/*Columna derecha*/}
          <div
            className="bg-idle-grey rounded
            px-4 md:px-8 lg:px-20 py-4 mb-8"
          >
            <div className="p-4 text-left">
              <p className="text-subtitle-grey">Nombre </p>
              <p className="text-xl pb-2">Nombre del animal</p>
              <p className="text-subtitle-grey">Organización </p>
              <p className="text-xl pb-2">
                Centro Municipal de Educación para el Cuido Animal
              </p>
              <p className="text-subtitle-grey">Tamaño</p>
              <p className="text-lg pb-2">Pequeño </p>
              <p className="text-subtitle-grey">Género </p>
              <p className="text-lg pb-2">Hembra </p>
              <p className="text-subtitle-grey">Ubicación </p>
              <p className="text-lg pb-2">La provincia </p>
              <p className="text-subtitle-grey">Edad </p>
              <p className="text-lg pb-2">2 </p>
              <p className="text-subtitle-grey">Descripción </p>
              <p className="text-lg pb-2">
                Cuando nos pidieron ayuda para Apolonio, las fotos eran de un
                perro flaco con las uñas más largas que jamás vimos, es obvio
                que estaba dentro de una casa o propiedad donde no tenía que
                caminar, en el 2017 se le calcularon 10 años de edad, No sabemos
                si se perdió o lo botaron, con la uñas ya sabemos por qué
                estaban tan largas, para cortarlas necesitamos por lo menos 3
                personas por que odia que se las corten, después de eso no tiene
                ningún problema, cuando llego al albergue se le dio tratamiento
                de erlichia. Es un perro muy bueno, le encanta que lo toquen,
                los cachorros son su debilidad los cuida y los defiende como si
                fueran de el. Apolonio es un perro grande con un corazón de
                cachorro, merece una buena familia.
              </p>
            </div>
            <div className="text-center mb-6 ">
              <Button text="Adoptar" width={"full"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
