//import { useState } from "react";
//import "tw-elements";
import Header from "../../Component/Header";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Title from "../../Component/Title";
//import Header from "../../Component/Header";
//Del momento solo esta como relleno para ir probando componentes
function Organizations() {

  //Este const deberia de recibir un elemento del .JSON que funciona como base de datos.
  const ejemploContentCards = [
    [
      "https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/SQif8hGoA6PNTFUsqV5sEpUbUBU=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/STCTNNN5SBCQ7L34YV7WD36APA.jpg",
      "Adopta un amigo",
      "Alajuela",
    ],
    [
      "https://d2zp5xs5cp8zlg.cloudfront.net/image-35477-800.jpg",
      "Patas a la obra",
      "Cartago",
    ],
    [
      "https://d2zp5xs5cp8zlg.cloudfront.net/image-32958-800.jpg",
      "Garras & Patas",
      "Heredia",
    ],
  ];

  return (
    <div className="bg-light-gold">
      <Header />
      <Title titleText="Organizaciones"/>
      {/*Div que contiene las 3 tarjetas POR EL MOMENTO, LUEGO DEBE SER TRAIDO DE LA BD*/}
      <div
        className="gap-8 justify-items-center py-4 mb-8 
      grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3
      px-4 md:px-8 lg:px-20"
      >
        {ejemploContentCards.map((i, index) => {
          return (
            <ContentCard
              key={`cc_${index}`}
              image={i[0]}
              mainText={i[1]}
              location={i[2]}
              clickLink="PONERELIDELPERRITO"
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Organizations;
