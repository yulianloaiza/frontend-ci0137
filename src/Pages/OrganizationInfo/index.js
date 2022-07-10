import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Title from "../../Component/Title";
import Carousel from "../../Component/Carousel";
import Button from "../../Component/Button";
//Cambiar el nombre cuando se resuelva la duda con el profe del nombre de la ruta.

/*
Aca se usa un arreglo de imagenes solo para fines ilustrativos
En realidad se debe agarrrar del backend.
El texto tambien se deberia jalar del backend
          */

function OrganizationInfo() {
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
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:text-right ">
          <Title titleText={"NOMBREPERRO"}/>
        </div>

          <div className="px-4 md:pr-8 lg:pr-20 pb-4 mb-3 self-center md:text-right md:hover:bg-green-800">
            <Button text="Regresar" width={"1/2 md:w-3/4 xl:w-1/4 "} 
            className= "px-4 md:px-8 lg:px-20"
            />
          </div>
          
        </div>

        <div
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
          grid grid-cols-1  
          lg:grid lg:grid-cols-2"
        >
          {/*Columna izquierda*/}
          <div
            className="bg-component-shadow rounded py-4 mb-3 lg:mb-8
        px-4 md:px-8 lg:px-0 xl:px-20"
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
              <p className="text-xl pb-2">
                Centro Municipal de Educación para el Cuido Animal
              </p>
              <p className="text-subtitle-grey">Ubicación</p>
              <p className="text-lg pb-2">La provincia </p>
              <p className="text-subtitle-grey">Teléfono </p>
              <p className="text-lg pb-2">+506 88888888 </p>
              <p className="text-subtitle-grey">Correo electrónico </p>
              <p className="text-lg pb-2">ejemplo@gmail.com </p>
              <p className="text-subtitle-grey">Descripción </p>
              <p className="text-lg pb-2">
                We are a private no kill sanctuary founded in 2000 with the
                capacity to shelter up to 200 dogs and cats, many of whom have
                been victims of animal abuse or cruelty, are senior animals or
                have special needs. Unlike other shelters that emphasize
                adoption but euthanize the un-adoptable, the mission of Animales
                de Asis is to find forever homes for adoptable animals and to
                provide lifetime care and shelter for those who are unable to be
                placed. Founder and Director Karin Hoad believes that every dog
                and cat’s life is worth saving and that every animal deserves a
                quality of life. Animales de Asis is a Costa Rican nonprofit
                association funded exclusively by donations. The sanctuary,
                located in Alto del Roble in Heredia, serves the entire Central
                Valley, and provides food, shelter, medical treatment, and most
                importantly, much needed nurturing. “For me, rescuing animals is
                not a hobby, it’s not a fad, its a lifestyle. My purpose for
                living is to change the lives of animals in need —to give them
                hope, to give them love, to give them care— to give them the
                family they so deserve.” – Karin Hoad, Founder of Animales de
                Asis Santuario
              </p>
            </div>
            <div className="text-center mb-6 ">
              <Button text="Animales" width={"full"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default OrganizationInfo;
