import "tw-elements";
import Header from "../../Component/Header";
import Title from "../../Component/Title";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
//Del momento solo esta como relleno para ir probando componentes
function About() {
  return (
    <div className="bg-light-gold">
      <Header />

      <Title titleText="Sobre Nosotros" />
      <div
        className="px-4 md:px-8 lg:px-20 pb-4 mb-8
        grid grid-cols-1  
        lg:grid lg:grid-cols-2"
      >
        {/*Columna izquierda */}
        <div
          className="bg-idle-grey rounded
        px-4 md:px-8 lg:px-20 py-4 mb-3 lg:mb-8 flex items-center"
        >
          <div className="p-b-4 text-left">
                      <p className="text-subtitle-grey text-lg	">Fundadores</p>
                      <p className="text-2xl max-w-xs pb-2">Johan Murillo - Yulian Loaiza</p>
                      <p className="text-subtitle-grey text-lg	">Historia</p>
                      <p className="text-xl max-w-xs pb-2">Mambo Adopciones ha estado trabajando incansablemente durante los últimos años para ayudar a cuidar a los animales de Costa Rica. Estamos en una misión para ayudar a más animales abandonados y brindarles la mejor atención posible. Nuestro compromiso y nuestras metas son más fuertes y más grandes que nunca.</p>
                      <p className="text-xl max-w-xs pb-2"></p>
                    </div>
        </div>
        {/*Columna derecha*/}
        <div
          className="bg-component-shadow rounded py-4 mb-8
        px-4 md:px-8 lg:px-0 xl:px-20"
        >
          <img
            src="https://ci0137.s3.amazonaws.com/mambo-adopciones/welcomeImage.webp"
            className="max-h-96 max-w-96 rounded"
            alt="Imagen principal"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
