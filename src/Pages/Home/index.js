import Header from "../../Component/Header";
import Button from "../../Component/Button";
import ContentCard from "../../Component/ContentCard";
import Carousel from "../../Component/Carousel";
import InputWithLabel from "../../Component/InputWithLabel";
import Footer from "../../Component/Footer";
//Del momento solo esta como relleno para ir probando componentes

//Background color pending. No me funciona el margen derecho

/* <div className="w-full h-64 bg-red-800 top-0 left-0 absolute opacity-40
         mx-4 md:mx-8 lg:mx-20"></div> */

//Pendiente agregarle color a los textos.

function App() {
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
        Pendiente como acomodar el texto de aca y si hay un limite en tamano*/}
        <div
          className="bg-idle-grey rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8"
        >
          <p className="text-5xl font-bold">
            "Todo fue demasiado lindo de verdad, es una luz especial para
            nosotros"
          </p>
          <p className="text-xl">-Tal ves autora</p>
        </div>
        {/*Columna derecha*/}
        <div
          className="bg-component-shadow rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8         
        max-w-3xl "
        >
          <Carousel />
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
