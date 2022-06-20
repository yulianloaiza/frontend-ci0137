import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Carousel from "../../Component/Carousel";
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
        {/*Pendiente como establecer la altura*/}
        <div
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
            grid grid-cols-2 "
        >
          {/*Columna izquierda
        Pendiente como acomodar el texto de aca y si hay un limite en tamano
        Texto condicional dependiendo de en donde estamos en los slides*/}
          <div
            className="bg-idle-grey rounded
            px-4 md:px-8 lg:px-20 py-4 mb-8"
          >
            <p className="text-3xl font-bold">
              Texto solo por mientras, se debe rellenar.
            </p>
            <p className="text-xl">-Tal ves autora</p>
          </div>
          {/*Columna derecha*/}
          <div
            className="bg-component-shadow rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8         
        max-w-3xl"
          >
            {/*arreglo de imagenes solo para fines ilustrativos
            En realidad se debe agarrrar del backend*/}
            <Carousel images={imgArray} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
