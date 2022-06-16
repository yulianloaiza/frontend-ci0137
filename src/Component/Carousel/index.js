import "tw-elements";

/*
Al igual que en ContentCard, aca se suben fotos de 800x800 pixeles
Se puede agregar bool para indicadores o no. Pendiente ver si se pasa como parametro opcional
las imagenes con thumbnails para previews
Pendiente acomodar botones e indicador en terminos de posicion*/
function Carousel() {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        {/*Indicadores inferiores*/}

        {/*Contenedor imagen principal y texto*/}
        {/*Parece que hay que alinear las imagenes primero, ya que ellas estan hacia la izquieda, 
        pero el papa div que contiene a todas las imagenes tiene todo el espacio. */}
        <div>
          {/*Div que contiene las imagenes */}
          <div class="carousel-inner overflow-hidden grid grid-rows-3 justify-center ">
            <div class="carousel-item active content-center max-w-max">
              <p className="text-center">p</p>
              <img
                src="https://imageserver.petsbest.com/marketing/blog/meeting-new-dogs.jpg"
                className="max-h-96 max-w-96"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-indicators p-0 mb-4 text-center">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="p-4 text-left">
              <p className="text-subtitle-grey"> Nombre </p>
              <p className="text-xl pb-2">Maximus</p>
              <p className="text-subtitle-grey">Posicion</p>
              <p className="text-lg pb-2">hola</p>
            </div>
            {/* <div class="carousel-item float-left">
              <img
                src="https://icalmpet.com/wp-content/uploads/iCalm-Pet-Solutions-Dog.jpg"
                className="max-h-96 max-w-96"
                alt="Camera"                
              />
            </div>
            <div class="carousel-item float-left">
              <img
                src="https://petapixel.com/assets/uploads/2022/06/Breathtaking-Photos-of-Airborne-Dogs-Highlighted-by-Colorful-Holi-Paint07-800x800.jpg"
                className="max-h-96 max-w-96"
                alt="Exotic Fruits"                
              />
            </div> */}
          </div>
        </div>

        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
