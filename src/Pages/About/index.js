import Header from "../../Component/Header";
import Title from "../../Component/Title";
import Footer from "../../Component/Footer";

function About() {
  return (
    <div className="bg-light-gold">
      <Header />
      <Title titleText="Sobre Nosotros" />
      <div
        className="px-4 md:px-8 lg:px-20 pb-4 mb-8
        grid grid-cols-1 lg:grid-cols-2"
      >
        {/*Columna izquierda */}
        <div
          className="bg-component-shadow rounded py-4 mb-8 px-4 xl:px-16"
        >
          <img
            src="https://ci0137.s3.amazonaws.com/mambo-adopciones/welcomeImage.webp"
            className="rounded"
            alt="Imagen principal"
          />
        </div>
        {/*Columna derecha*/}
        <div
          className="bg-idle-grey rounded
        px-4 md:px-8 lg:px-20 py-4 mb-3 lg:mb-8 flex items-center"
        >
          <div className="p-b-4 text-left">
            <p className="text-subtitle-grey mt-2 text-2xl mb-4">Historia</p>
            <p className="text-xl pb-2">
              Mambo Adopciones ha estado trabajando durante los últimos años en
              ser el referente para las adopciones en línea de los animales en
              Costa Rica. Nuestra misión es ayudar a los animales abandonados
              que están buscando un hogar, y nuestro compromiso con el país y
              las metas que tenemos en el futuro para incrementar el alcance de
              Mambo Adopciones nos ayudan a levantarnos con el corazón lleno
              todos los días. Esperamos que encuentres un amigo u amiga en
              nuestra página y que tengan muchos bellos momentos juntos.
            </p>
            <p className="text-subtitle-grey mt-2 text-2xl mb-4">Fundadores</p>
            <p className="text-xl pb-2">Johan Murillo - Yulian Loaiza</p>
            <p className="text-subtitle-grey mt-2 text-2xl mb-4">Agradecimientos</p>
            <p className="text-xl pb-2">
              Al curso CI-0137 de la Universidad de Costa Rica y al profesor
              Daniel Calvo Marín por impulsarnos a crear esta página como
              proyecto universitario.
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
