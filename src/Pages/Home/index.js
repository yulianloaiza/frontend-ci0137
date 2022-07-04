import { useState } from "react";
import "tw-elements";
import Header from "../../Component/Header";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";

function App() {
  const [showItem, setShowItem] = useState(0);
  /*arreglo de historias exito solo para fines ilustrativos
            En realidad se debe agarrrar del backend
            nombre, organizacion, descripcion, autora, imagen

            CREO QUE LE HACE FALTA UN CAMPO, EL DEL ID DEL PERRITO*/
  const histExito = [
    [
      "1Teppanyaki",
      "Centro Municipal de Educación para el Cuido Animal",
      "UNO Todo fue demasiado lindo de verdad, es una luz especial para nosotros",
      "-La Maga del octavo",
      "https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg",
    ],
    [
      "2MAXIMUS",
      "tapantakki",
      "DOSDecidimos llevarla a casa por que nos habíamos enamorado de ella. Hablé con mi esposo ya que ella es el tipo de perrita que se adopta menos. Las personas creen que es uno quien adopta a los perros, pero ellos son quien nos adoptan. Ella nos hace muy felices, y trae mucha alegría a la casa. No hay duda que ha sido la experiencia más fantástica que hemos tenido.",
      "-La autora",
      "https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg",
    ],
    [
      "3DRAKE",
      "Holá",
      "TRESTodo fue demasiado lindo de verdad, es una luz especial para nosotros",
      "-Inés Hernandez de la O",
      "https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg",
    ],
  ];
  /*Acomodar el llamado con lo que sea necesario de la base de datos. Esto es un ejemplo.
  Al momento esta como image, nombre, organizaion, localizacion
  CREO QUE LE HACE FALTA UN CAMPO, EL DEL ID DEL PERRITO*/
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

  //Solo nos devolvemos cuando llegamos la ultima slide
  function changeText(direction, currentSlide = showItem) {
    if (direction === "next") {
      currentSlide < 2 ? setShowItem(currentSlide + 1) : setShowItem(0);
    } else if (direction === "prev") {
      currentSlide > 0 ? setShowItem(currentSlide - 1) : setShowItem(2);
    } else {
      setShowItem(currentSlide);
    }
  }

  return (
    <div className="bg-light-gold">
      <Header />
      {/* Banner de bienvenida a la pagina*/}
      <div className="w-full relative px-4 md:px-8 lg:px-20 pb-4 mb-8">
        <div
          className="w-full h-full flex flex-col
        absolute top-0 left-0 text-center justify-center items-center z-30
        px-4 md:px-8 lg:px-20 pb-4 mb-8"
        >
          <p className="text-5xl md:text-6xl font-bold text-white xl:border-8 xl:border-brown-gold xl:p-2 m-2 xl:mx-0">
            ¡Bienvenido a Mambo Adopciones!
          </p>
          <p className="text-2xl text-white m-2">
            Donde puedes encontrar animales en adopción en el territorio
            costarricense
          </p>
        </div>
        <div
          className="absolute top-0 bottom-4 bg-gray-700 bg-opacity-40 md:bg-opacity-30 
          left-4 right-4 md:left-8 md:right-8 lg:left-20 lg:right-20"
        ></div>
        <img
          src="https://img.freepik.com/foto-gratis/retrato-grupo-adorables-cachorros_53876-64796.jpg?t=st=1656434026~exp=1656434626~hmac=afd4b9dd00945edbebad35120d5f8ffee34730b435f27b1f7c043b780c5cc3d3&w=2000"
          alt="Imágen de bienvenida"
          className="w-full h-96 object-cover rounded"
        />
      </div>

      {/*Div que contiene las 4 tarjetas POR EL MOMENTO, LUEGO DEBE SER TRAIDO DE LA BD 
      place-items-center
       md: place-items-start
      */}
      <div
        className="gap-8 justify-items-center py-4 mb-8 
      grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4
      px-4 md:px-8 lg:px-20"
      >
        {ejemploContentCards.map((i, index) => {
          return (
            <ContentCard
              key={`cc_${index}`}
              image={i[0]}
              mainText={i[1]}
              subtitle="Organización"
              secondaryText={i[2]}
              location={i[3]}
              clickLink="PONERELIDELPERRITO"
            />
          );
        })}
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 pb-4 mb-8
        grid grid-cols-1  
        lg:grid lg:grid-cols-2"
      >
        {/*Historias éxito. Columna izquierda */}
        <div
          className="bg-idle-grey rounded
        px-4 md:px-8 lg:px-20 py-4 mb-3 lg:mb-8 flex items-center"
        >
          {histExito.map((i, index) => {
            return (
              showItem === index && (
                <div key={`text_${index}`}>
                  <p className="text-3xl font-bold">{i[2]}</p>
                  <p className="text-xl text-right">{i[3]}</p>
                </div>
              )
            );
          })}
        </div>
        {/*Columna derecha*/}
        <div
          className="bg-component-shadow rounded py-4 mb-8
        px-4 md:px-8 lg:px-0 xl:px-20"
        >
          {/*Inicia Carrusel */}
          <div
            id="imageCarousel"
            className="carousel relative "
            data-bs-interval="false"
          >
            {/*carousel-inner es todo lo que va a estar afectado por el cambio en flechas */}
            <div className="carousel-inner overflow-hidden grid grid-flow-rows-3 justify-center ">
              {histExito.map((i, index) => {
                return (
                  <div
                    key={`text_${index}`}
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    } content-center max-w-max`}
                  >
                    <img
                      src={i[4]}
                      className="max-h-96 max-w-96 rounded"
                      alt="Imagen principal"
                    />
                    <div className="p-b-4 text-left">
                      <p className="text-subtitle-grey text-lg	">Nombre </p>
                      <p className="text-2xl max-w-xs pb-2">{i[0]}</p>
                      <p className="text-subtitle-grey text-lg	">Organización</p>
                      <p className="text-xl max-w-xs pb-2">{i[1]}</p>
                    </div>
                  </div>
                );
              })}
              {/*Indicadores inferiores*/}
              <div className="carousel-indicators p-0 mb-0 text-center">
                {histExito.map((i, index) => {
                  return (
                    <button
                      key={`image_${index}`}
                      type="button"
                      data-bs-target="#imageCarousel"
                      data-bs-slide-to={index.toString()}
                      //className={`${index === 0 ? "active" : ""}`}
                      className={showItem === index ? "active" : ""}
                      aria-current={showItem === index ? "true" : "false"}
                      aria-label={`Slide ${index.toString() + 1}`}
                      onClick={() => changeText("none", index)}
                    ></button>
                  );
                })}
              </div>
            </div>
            {/*Control atras y siguiente */}
            <button
              className="carousel-control-prev carousel-dark absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="prev"
              onClick={() => changeText("prev")}
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat bg-red-700 rounded-full opacity-80"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next carousel-dark absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="next"
              onClick={() => changeText("next")}
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat bg-red-700 rounded-full opacity-80"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/*Termina Carrusel */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
