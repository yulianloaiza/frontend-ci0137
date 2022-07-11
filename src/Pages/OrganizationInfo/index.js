import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Title from "../../Component/Title";
import Carousel from "../../Component/Carousel";
import Button from "../../Component/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Cambiar el nombre cuando se resuelva la duda con el profe del nombre de la ruta.

/*
Aca se usa un arreglo de imagenes solo para fines ilustrativos
En realidad se debe agarrrar del backend.
El texto tambien se deberia jalar del backend
          */

function OrganizationInfo() {

  const {id} = useParams();
  const [organizationInfo, setOrganizationInfo] = useState([]);
  console.log(id);
  let imgArray = [];

  useEffect(() => {
    const getOrganizationById = async () => {
      const organizationInfoFetch = await fetch(
        `http://localhost:7500/organizations/${id}`
      );
      const readyOrganizationInfo = await organizationInfoFetch.json();
      console.log(readyOrganizationInfo);
      setOrganizationInfo(readyOrganizationInfo);
    };
    getOrganizationById();
  }, [id]);

  /*const imgArray = [
    "https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg",
    "https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg",
    "https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg",
    "https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/SQif8hGoA6PNTFUsqV5sEpUbUBU=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/STCTNNN5SBCQ7L34YV7WD36APA.jpg",
    "https://d2zp5xs5cp8zlg.cloudfront.net/image-35477-800.jpg",
    "https://www.dogstrust.org.uk/dogimages/1120385_ginger_20220427084245_ginger-summer-pic_800.jpg",
  ];*/
  return (
    <>
      <div className="bg-light-gold">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:text-right ">
            <Title titleText={organizationInfo.name}/>
          </div>

          <div className="px-4 md:pr-8 lg:pr-20 pb-4 mb-3 self-center md:text-right">
            <Button
              text="Regresar"
              width={"1/2 md:w-3/4 xl:w-1/4 "}
              className="px-4 md:px-8 lg:px-20"
              goBack
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
            <Carousel images={imgArray = organizationInfo.images} />
          </div>

          {/*Columna derecha*/}
          <div
            className="bg-idle-grey rounded
            px-4 md:px-8 lg:px-20 py-4 mb-8"
          >
            <div className="p-4 text-left">
              <p className="text-subtitle-grey">Nombre </p>
              <p className="text-xl pb-2">{organizationInfo.name}</p>
              <p className="text-subtitle-grey">Ubicación</p>
              <p className="text-lg pb-2">{organizationInfo.state}</p>
              <p className="text-subtitle-grey">Teléfono </p>
              <p className="text-lg pb-2">{organizationInfo.phone}</p>
              <p className="text-subtitle-grey">Correo electrónico </p>
              <p className="text-lg pb-2">{organizationInfo.email}</p>
              <p className="text-subtitle-grey">Descripción </p>
              <p className="text-lg pb-2">{organizationInfo.description}</p>
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
