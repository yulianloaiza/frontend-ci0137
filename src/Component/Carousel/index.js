import React, { useRef, useState } from "react";
import "tw-elements";

/*
Al igual que en ContentCard, aca se suben fotos de 800x800 pixeles
Se puede agregar bool para indicadores o no. Pendiente ver si se pasa como parametro opcional
las imagenes con thumbnails para previews
Pendiente acomodar botones e indicador en terminos de posicion*/
function Carousel() {
  const sliderRef = useRef();

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

  return (
    <>
      {/*Inicia Carrusel */}
      <div
        id="imageCarousel"
        /*class="carousel slide relative"
        Pendiente ver como poder arreglar esa animacion entre slides. Antes se mostraba mal*/
        class="carousel relative "
        data-bs-interval="false"
      >
        {/*carousel-inner es todo lo que va a estar afectado por el cambio en flechas */}
        <div class="carousel-inner overflow-hidden grid grid-flow-rows-3 justify-center">
          {/*Esta es una slide */}
          <div class="carousel-item active content-center max-w-max">
            <img
              src="https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg"
              className="max-h-96 max-w-96 rounded-t"
              alt="Wild Landscape"
            />
          </div>
          {/*Segunda slide */}
          <div class="carousel-item content-center max-w-max">
            <img
              src="https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg"
              className="max-h-96 max-w-96 rounded-t"
              alt="Camera"
            />
          </div>
          <div class="carousel-item content-center max-w-max">
            <img
              src="https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg"
              className="max-h-96 max-w-96 rounded-t"
              alt="Exotic Fruits"
            />
          </div>
          {/*Thumbnail slider */}
          <div className="relative w-full bg-gray-400 max-w-fit rounded-b">
            <div
              ref={sliderRef}
              className="w-full flex gap-4 overflow-x-scroll scroll-smooth scrollbar-hide p-2"
            >
              {/*imagenes
              Solo las primeras 3 tienen enlace, para mostrar que funciona y como seria la implementacion*/}
              <img
                src="https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg"
                className="max-h-20 rounded"
                alt="Camera"
                data-bs-target="#imageCarousel"
                data-bs-slide-to="0"
              />
              <img
                src="https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg"
                className="max-h-20 rounded"
                alt="Exotic Fruits"
                data-bs-target="#imageCarousel"
                data-bs-slide-to="1"
              />
              <img
                src="https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg"
                className="max-h-20 rounded"
                alt="Wild Landscape"
                data-bs-target="#imageCarousel"
                data-bs-slide-to="2"
              />
              <img
                src="https://gray-kcbd-prod.cdn.arcpublishing.com/resizer/SQif8hGoA6PNTFUsqV5sEpUbUBU=/800x800/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/gray/STCTNNN5SBCQ7L34YV7WD36APA.jpg"
                className="max-h-20 rounded"
                alt="Wild Landscape"
              />
              <img
                src="https://d2zp5xs5cp8zlg.cloudfront.net/image-35477-800.jpg"
                className="max-h-20 rounded"
                alt="Wild Landscape"
              />
              <img
                src="https://www.dogstrust.org.uk/dogimages/1120385_ginger_20220427084245_ginger-summer-pic_800.jpg"
                className="max-h-20 rounded"
                alt="Wild Landscape"
              />
              {/*Botones prev y next*/}
              <button
                className="absolute top-8 left-0 text-3xl font-bold carousel-dark bg-component-shadow rounded-full opacity-80"
                onClick={() => buttonScroll("back")}
              >
                <span
                  class="carousel-control-prev-icon inline-block bg-no-repeat max-h-5"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="absolute top-8 right-0 text-3xl carousel-dark float-right bg-component-shadow rounded-full opacity-80"
                onClick={() => buttonScroll("forward")}
              >
                <span
                  class="carousel-control-next-icon inline-block bg-no-repeat max-h-5"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>

          {/*Termina Thumbnail slider */}
        </div>
        {/*Control atras y siguiente */}
        <button
          class="carousel-control-prev carousel-dark absolute top-0 bottom-24 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next carousel-dark absolute top-0 bottom-24 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#imageCarousel"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/*Termina Carrusel */}
    </>
  );
}

export default Carousel;
