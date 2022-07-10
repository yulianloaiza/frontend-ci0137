//import Header from "../../Component/Header";
//Del momento solo esta como relleno para ir probando componentes
import Header from "../../Component/Header";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Filter from "../../Component/Filter";

function Animals() {
  const ejemploContentCards = [
    [
      "https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/SQif8hGoA6PNTFUsqV5sEpUbUBU=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/STCTNNN5SBCQ7L34YV7WD36APA.jpg",
      "Diana",
      "Centro Municipal de Educación para el Cuido Animal",
      "Cartago",
    ],
    [
      "https://d2zp5xs5cp8zlg.cloudfront.net/image-35477-800.jpg",
      "Jessy",
      "Animales de Asís",
      "Cartago",
    ],
    [
      "https://d2zp5xs5cp8zlg.cloudfront.net/image-32958-800.jpg",
      "Maximiliano",
      "El Refugio Hogar Animal Costa Ballena",
      "Cartago",
    ],
    [
      "https://www.dogstrust.org.uk/dogimages/1120385_ginger_20220427084245_ginger-summer-pic_800.jpg",
      "Lupita",
      "Centro Municipal de Educación para el Cuido Animal",
      "Cartago",
    ],
  ];

  return (
    <div className="bg-light-gold">
      <Header />
      <div
        className="titles gap-8 justify-items-left py-4 mb-8 
        grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4
        px-4 md:px-8 lg:px-20"
      >
        <p> <strong>Animales</strong></p>
      </div>
      {/*Div que contiene las 3 tarjetas POR EL MOMENTO, LUEGO DEBE SER TRAIDO DE LA BD*/}
      <div
        className="gap-8 justify-items-center py-4 mb-8 
      grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4
      px-4 md:px-8 lg:px-20"
      >
        <Filter />
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

export default Animals;
