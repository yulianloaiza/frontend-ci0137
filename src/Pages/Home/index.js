import { useState, useEffect } from "react";
import "tw-elements";
import Header from "../../Component/Header";
import Title from "../../Component/Title";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import { useSelector } from "react-redux";

function Home() {
  const [showItem, setShowItem] = useState(0);

  const [stories, setStories] = useState([]);

    const getSuccessStories = async () => {
      const storiesFetch = await fetch('http://localhost:7500/welcome');
      const listStories = await storiesFetch.json();
      console.log(listStories);
      setStories(listStories);
    };

    useEffect( ()=> {
      getSuccessStories()
    }, [])

    const trending = [
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/1-2.jpeg",
        "Luna",
        "Centro Municipal de Educación para el Cuido Animal",
        "Cartago",
        0,
      ],
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/1-3.png",
        "Lissie",
        "El Refugio Hogar Animal Costa Ballena",
        "Puntarenas",
        1,
      ],
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/2-1.jpeg",
        "Capi",
        "Centro Municipal de Educación para el Cuido Animal",
        "Cartago",
        2,
      ],
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/2-2.jpeg",
        "Sonny",
        "Animales de Asís",
        "Heredia",
        3,
      ],
    ];
  
    const lessSeen = [
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/0-1.jpeg",
        "Catalina",
        "Centro Municipal de Educación para el Cuido Animal",
        "Cartago",
        4,
      ],
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/0-2.jpeg",
        "Elsa",
        "El Refugio Hogar Animal Costa Ballena",
        "Puntarenas",
        5,
      ],
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/0-3.jpeg",
        "China",
        "Centro Municipal de Educación para el Cuido Animal",
        "Cartago",
        6,
      ],
      [
        "https://ci0137.s3.amazonaws.com/mambo-adopciones/animals/1-1.webp",
        "Rocky",
        "Animales de Asís",
        "Heredia",
        7,
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
          className="absolute top-0 bottom-4 bg-gray-700 bg-opacity-50 
          left-4 right-4 md:left-8 md:right-8 lg:left-20 lg:right-20"
        ></div>
        <img
          src="https://ci0137.s3.amazonaws.com/mambo-adopciones/welcomeImage.webp"
          alt="Imágen de bienvenida"
          className="w-full h-96 object-cover rounded"
        />
      </div>

      <Title titleText="Trending" />      
      <div
        className="gap-8 justify-between py-4 mb-8 
      grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4
      px-4 md:px-8 lg:px-20"
      >
        {trending.map((i, index) => {
          return (
            <ContentCard
              key={`cc_${index}`}
              image={i[0]}
              mainText={i[1]}
              subtitle="Organización"
              secondaryText={i[2]}
              location={i[3]}
              clickLink={`/animal_info/${i[4]}`}
            />
          );
        })}
      </div>

      <Title titleText="No te olvides de ellos" />
      <div
        className="gap-8 justify-between py-4 mb-8 
      grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4
      px-4 md:px-8 lg:px-20"
      >
        {lessSeen.map((i, index) => {
          return (
            <ContentCard
              key={`cc_${index}`}
              image={i[0]}
              mainText={i[1]}
              subtitle="Organización"
              secondaryText={i[2]}
              location={i[3]}
              clickLink={`/animal_info/${i[4]}`}
            />
          );
        })}
      </div>

      <Title titleText="Historias de éxito" />
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
          {stories.map((i, index) => {
            return (
              showItem === index && (
                <div key={`text_${index}`}>
                  <p className="text-3xl font-bold">{i.description}</p>
                  <p className="text-xl text-right">{i.author}</p>
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
              {stories.map((i, index) => {
                return (
                  <div
                    key={`text_${index}`}
                    className={`carousel-item ${
                      index === 0 ? "active" : ""
                    } content-center max-w-max`}
                  >
                    <img
                      src={i.image}
                      className="max-h-96 max-w-96 rounded"
                      alt="Imagen principal"
                    />
                    <div className="p-b-4 text-left">
                      <p className="text-subtitle-grey text-lg	">Nombre </p>
                      <p className="text-2xl max-w-xs pb-2">{i.name}</p>
                      <p className="text-subtitle-grey text-lg	">Organización</p>
                      <p className="text-xl max-w-xs pb-2">{i.organization}</p>
                    </div>
                  </div>
                );
              })}
              {/*Indicadores inferiores*/}
              <div className="carousel-indicators p-0 mb-0 text-center">
                {stories.map((i, index) => {
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

export default Home;
