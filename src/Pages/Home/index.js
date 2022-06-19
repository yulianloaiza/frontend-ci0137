import { useState } from "react";
import "tw-elements";
import Header from "../../Component/Header";
import Button from "../../Component/Button";
import ContentCard from "../../Component/ContentCard";
import InputWithLabel from "../../Component/InputWithLabel";
import Footer from "../../Component/Footer";

//Del momento solo esta como relleno para ir probando componentes

//Background color pending. No me funciona el margen derecho

/* <div className="w-full h-64 bg-red-800 top-0 left-0 absolute opacity-40
         mx-4 md:mx-8 lg:mx-20"></div> */

//Pendiente agregarle color a los textos.

function App() {
  const [showItem, setShowItem] = useState(0);

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
      {/*Probando historias exito 
      Pendiente como establecer la altura*/}
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
          {showItem === 0 && (
            <>
              <p className="text-3xl font-bold">
                "UNO Todo fue demasiado lindo de verdad, es una luz especial
                para nosotros"
              </p>
              <p className="text-xl">-Tal ves autora</p>
            </>
          )}
          {showItem === 1 && (
            <>
              <p className="text-3xl font-bold">
                "DOSDecidimos llevarla a casa por que nos habíamos enamorado de
                ella. Hablé con mi esposo ya que ella es el tipo de perrita que
                se adopta menos. Las personas creen que es uno quien adopta a
                los perros, pero ellos son quien nos adoptan. Ella nos hace muy
                felices, y trae mucha alegría a la casa. No hay duda que ha sido
                la experiencia más fantástica que hemos tenido."
              </p>
              <p className="text-xl">-Tal ves autora</p>
            </>
          )}
          {showItem === 2 && (
            <>
              <p className="text-3xl font-bold">
                "TRESTodo fue demasiado lindo de verdad, es una luz especial
                para nosotros"
              </p>
              <p className="text-xl">-Tal ves autora</p>
            </>
          )}
        </div>
        {/*Columna derecha*/}
        <div
          className="bg-component-shadow rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8         
        max-w-3xl "
        >
          {/*Inicia Carrusel */}
          <div
            id="imageCarousel"
            /*class="carousel slide relative"
        Pendiente ver como poder arreglar esa animacion entre slides. Antes se mostraba mal*/
            class="carousel relative "
            data-bs-interval="false"
          >
            {/*carousel-inner es todo lo que va a estar afectado por el cambio en flechas */}
            <div class="carousel-inner overflow-hidden grid grid-flow-rows-3 justify-center ">
              {/*Esta es una slide */}
              <div class="carousel-item active content-center max-w-max">
                <img
                  src="https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg"
                  className="max-h-96 max-w-96"
                  alt="Wild Landscape"
                />
                <div className="pl-4 p-b-4 text-left">
                  <p className="text-subtitle-grey text-lg	">Nombre </p>
                  <p className="text-2xl max-w-xs pb-2">1Teppanyaki</p>
                  <p className="text-subtitle-grey text-lg	">Organización</p>
                  <p className="text-xl max-w-xs pb-2">
                    Centro Municipal de Educación para el Cuido Animal
                  </p>
                </div>
              </div>
              {/*Segunda slide */}
              <div class="carousel-item content-center max-w-max">
                <img
                  src="https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg"
                  className="max-h-96 max-w-96"
                  alt="Camera"
                />
                <div className="pl-4 p-b-4 text-left">
                  <p className="text-subtitle-grey text-lg	">Nombre </p>
                  <p className="text-2xl max-w-xs pb-2">2MAXIMUS</p>
                  <p className="text-subtitle-grey text-lg	">Organización</p>
                  <p className="text-xl max-w-xs pb-2">tapantakki</p>
                </div>
              </div>
              <div class="carousel-item content-center max-w-max">
                <img
                  src="https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg"
                  className="max-h-96 max-w-96"
                  alt="Exotic Fruits"
                />
                <div className="pl-4 p-b-4 text-left">
                  <p className="text-subtitle-grey text-lg	">Nombre </p>
                  <p className="text-2xl max-w-xs pb-2">3DRAKE</p>
                  <p className="text-subtitle-grey text-lg	">Organización</p>
                  <p className="text-xl max-w-xs pb-2">Holá</p>
                </div>
              </div>
              {/*Indicadores inferiores*/}
              <div class="carousel-indicators p-0 mb-0 text-center">
                <button
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                  onClick={() => changeText("none", 0)}
                ></button>
                <button
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                  onClick={() => changeText("none", 1)}
                ></button>
                <button
                  type="button"
                  data-bs-target="#imageCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                  onClick={() => changeText("none", 2)}
                ></button>
              </div>
            </div>
            {/*Control atras y siguiente */}
            <button
              class="carousel-control-prev carousel-dark absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="prev"
              onClick={() => changeText("prev")}
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next carousel-dark absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#imageCarousel"
              data-bs-slide="next"
              onClick={() => changeText("next")}
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
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

      <div class="flex space-x-2 content-center justify-center">
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
