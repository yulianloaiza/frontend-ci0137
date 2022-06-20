import React, { useRef } from "react";
import "tw-elements";

/*
Al igual que en ContentCard, aca se suben fotos de 800x800 pixeles
Se puede agregar bool para indicadores o no. Pendiente ver si se pasa como parametro opcional
las imagenes con thumbnails para previews
Pendiente acomodar botones e indicador en terminos de posicion*/
function Carousel({ images }) {
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
        {/*carousel-inner es todo lo que va a estar afectado por el cambio en flechas 
        Aca estan las slides*/}
        <div class="carousel-inner overflow-hidden grid grid-flow-rows-3 justify-center">

          {images.loaded
            ? images.map((i, index) => {
                return (
                  <>
                    {images.loaded ? (
                      this.index === 0 ? (
                        <div key={i}> Something went wrong {i} </div>
                      ) : (
                        <div key={i}> Everything in the world is fine {i} </div>
                      )
                    ) : (
                      <div>Loading...</div>
                    )}
                  </>
                );
              })
            : <div>
              Cargando...
            </div>
             }
        </div>
        <p> Hola jaja</p>
      </div>
    </>
  );
}

export default Carousel;
