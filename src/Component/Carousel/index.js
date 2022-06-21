import React, { useRef, useState, useEffect } from "react";
import "tw-elements";

/*
Al igual que en ContentCard, aca se suben fotos de 800x800 pixeles
*/
function Carousel({ images }) {
  const sliderRef = useRef();
  const [showItem, setShowItem] = useState(0);

  //Botones del slider para moverse a la izquierda o derecha.
  function buttonScroll(direction) {
    if (direction === "forward") {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    } else if (direction === "back") {
      sliderRef.current.scrollTo({
        left: sliderRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  }

  function changeImage(direction) {
    //Sumar o restar, o bien manejar caso frontera.
    const totalImages = images.length - 1;
    if (direction === "forward") {
      if (showItem < totalImages) {
        setShowItem(showItem + 1);
      } else if (showItem === totalImages) {
        setShowItem(0);
        buttonScroll("back");
      }
    } else {
      if (showItem > 0) {
        setShowItem(showItem - 1);
      } else if (showItem === 0) {
        setShowItem(totalImages);
        buttonScroll("forward");
      }
    }
  }

  //Cada vez que se actualiza showItem corremos esta funcion.
  //Nos permite saber cuando tenemos que mover el slider de abajo
  useEffect(() => {
    const imagesPreviewed = 3; //Ya que el indice empieza en 0
    if (showItem % imagesPreviewed > 0 && showItem > imagesPreviewed) {
      //Debemos movernos a la derecha
      buttonScroll("forward");
    } else if (showItem % imagesPreviewed > 0) {
      buttonScroll("back");
    }
  }, [showItem]);

  return (
    <>
      {/*Inicia Carrusel */}
      <div
        id="imageCarousel"
        className="carousel relative "
        data-bs-interval="false"
      >
        {/*carousel-inner es todo lo que va a estar afectado por el cambio en flechas. Aca estan las slides.
        Se hace map en los elementos internos de las divisiones*/}
        <div className="carousel-inner overflow-hidden grid grid-flow-rows-3 justify-center">
          {images.map((i, index) => {
            return (
              <div
                className={`carousel-item ${
                  index === 0 ? "active" : ""
                } content-center max-w-max`}
              >
                <img
                  src={i}
                  className="max-h-96 max-w-96 rounded-t"
                  alt="Imagen principal"
                />
              </div>
            );
          })}
          {/*Thumbnail slider */}
          <div className="relative w-full bg-gray-400 max-w-fit rounded-b">
            <div
              ref={sliderRef}
              className="w-full flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide p-2"
            >
              {images.map((i, index) => {
                return (
                  <img
                    src={i}
                    className="max-h-20 rounded cursor-pointer"
                    alt="Visualización previa"
                    data-bs-target="#imageCarousel"
                    data-bs-slide-to={index.toString()}
                    onClick={() => setShowItem(index.toString())}
                  />
                );
              })}
              {/*Botones prev y next de thumbnails*/}
              <button
                className="absolute top-8 left-0 text-3xl font-bold carousel-dark bg-component-shadow rounded-full opacity-80"
                onClick={() => buttonScroll("back")}
              >
                <span
                  className="carousel-control-prev-icon inline-block bg-no-repeat max-h-5"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="absolute top-8 right-0 text-3xl carousel-dark float-right bg-component-shadow rounded-full opacity-80"
                onClick={() => buttonScroll("forward")}
              >
                <span
                  className="carousel-control-next-icon inline-block bg-no-repeat max-h-5"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
        {/*Control atras y siguiente*/}
        <button
          className="carousel-control-prev carousel-dark absolute top-0 bottom-24 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
          onClick={() => changeImage("back")}
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next carousel-dark absolute top-0 bottom-24 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
          onClick={() => changeImage("forward")}
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
