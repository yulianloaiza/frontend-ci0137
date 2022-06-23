import { useState } from "react";
import "tw-elements";
import Header from "../../Component/Header";
import Button from "../../Component/Button";
import ContentCard from "../../Component/ContentCard";
import InputWithLabel from "../../Component/InputWithLabel";
import Footer from "../../Component/Footer";

//Del momento solo esta como relleno para ir probando componentes

//Background color pending. No me funciona el margen derecho en banner
/* <div className="w-full h-64 bg-red-800 top-0 left-0 absolute opacity-40
         mx-4 md:mx-8 lg:mx-20"></div> */

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
      <div
        className="px-4 md:px-8 lg:px-20 pb-4 mb-8
    grid grid-cols-2"
      >
        {/*Columna izquierda */}
        <div
          className="bg-idle-grey rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8 flex items-center"
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
          className="bg-component-shadow rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8         
        max-w-3xl"
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
                className="carousel-control-prev-icon inline-block bg-no-repeat"
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
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/*Termina Carrusel */}
        </div>
      </div>

      {/* Banner de bienvenida a la pagina*/}

      <div className="w-full relative px-4 md:px-8 lg:px-20 pb-4 mb-8">
        <div
          className="w-full h-full flex flex-col
        absolute top-0 left-0 text-center justify-center items-center z-30
        px-4 md:px-8 lg:px-20 pb-4 mb-8"
        >
          <p className="text-5xl font-bold">¡Bienvenido a Mambo Adopciones!</p>
          <p className="text-xl">
            Donde puedes encontrar animales en adopción en el territorio
            costarricense
          </p>
        </div>
        <img
          src="https://wallpaperaccess.com/full/2170841.jpg"
          alt="Imágen de bienvenida"
          className="w-full h-64 object-cover rounded"
        />
      </div>

      <div className="flex space-x-2 content-center justify-center">
        <Button text={"Adoptar"} />
      </div>

      <div className="grid grid-cols-4 gap-8 px-4 md:px-8 lg:px-20 py-4 mb-8">
        <ContentCard
          image="https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/SQif8hGoA6PNTFUsqV5sEpUbUBU=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/STCTNNN5SBCQ7L34YV7WD36APA.jpg"
          mainText="Diana"
          subtitle="Organización"
          secondaryText="Centro Municipal de Educación para el Cuido Animal"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>

        <ContentCard
          image="https://d2zp5xs5cp8zlg.cloudfront.net/image-35477-800.jpg"
          mainText="Jessy"
          subtitle="Organización"
          secondaryText="Animales de Asís"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>

        <ContentCard
          image="https://d2zp5xs5cp8zlg.cloudfront.net/image-32958-800.jpg"
          mainText="Maximiliano"
          subtitle="Organización"
          secondaryText="El Refugio Hogar Animal Costa Ballena"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>

        <ContentCard
          image="https://www.dogstrust.org.uk/dogimages/1120385_ginger_20220427084245_ginger-summer-pic_800.jpg"
          mainText="Lupita"
          subtitle="Organización"
          secondaryText="Centro Municipal de Educación para el Cuido Animal"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>
      </div>

      <div>
        <InputWithLabel
          subtitle={"Donde estará la mascota cuando usted no este en casa?"}
          bigText="true"
        />
        <InputWithLabel
          subtitle={
            "Por favor digite la dirección completa de su hogar y cuantas personas viven en ella dia y noche"
          }
          bigText="true"
        />
        <InputWithLabel
          subtitle={"por favor digite su nombre completo"}
          bigText="false"
        />
        <InputWithLabel subtitle={"Su fam esta de acuerdo?"} bigText="false" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
