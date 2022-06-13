import Button from "../../Component/Button";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import InputWithLabel from "../../Component/InputWithLabel";
//Del momento solo esta como relleno para ir probando componentes

//Background color pending. No me funciona el margen derecho
{
  /* <div className="w-full h-64 bg-red-800 top-0 left-0 absolute opacity-40
         mx-4 md:mx-8 lg:mx-20"></div> */
}
//Pendiente agregarle color a los textos.

function App() {
  return (
    <div className="bg-light-gold">
      <Header />

      {/*Probando historias exito 
      Pendiente como establecer la altura*/}
      <div
        className="px-4 md:px-8 lg:px-20 pb-4 mb-8
    grid grid-cols-2"
      >
        {/*Columna izquierda
        Pendiente como acomodar el texto de aca y si hay un limite en tamano*/}
        <div className="bg-idle-grey
        px-4 md:px-8 lg:px-20 py-4 mb-8">          
          <p className="text-5xl font-bold">"Todo fue demasiado lindo de verdad, es una luz especial para nosotros"</p>
          <p className="text-xl">-Tal ves autora</p>
        </div>
        {/*Columna derecha*/}
        <div className="bg-red-700
        px-4 md:px-8 lg:px-20 py-4 mb-8">
          <p className="text-5xl font-bold">SOY EL CONTENIDO</p>
          <p className="text-xl">VAMOS</p>
        </div>
      </div>

      <h1> empeiza lo viejo</h1>
      <div className="w-full relative px-4 md:px-8 lg:px-20 pb-4 mb-8">
        <div
          className="w-full h-full flex flex-col 
        absolute top-0 left-0 text-center justify-center items-center z-30
        px-4 md:px-8 lg:px-20 pb-4 mb-8"
        >
          <p className="text-5xl font-bold">Texto historia</p>
          <p className="text-xl">Talves subtexto historia</p>
        </div>
        <img
          src="https://wallpaperaccess.com/full/2170841.jpg"
          alt="Imágen de bienvenida"
          className="w-full h-64 object-cover"
        />
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
          className="w-full h-64 object-cover"
        />
      </div>

      <p>Body de la pagina </p>

      <div class="flex space-x-2 content-center justify-center">
        <Button text={"Adoptar"} />
      </div>

      <div className="flex gap-8 px-4 md:px-8 lg:px-20 py-4 mb-8">
        <ContentCard
          image="https://i1.wp.com/www.elrefugiocostaballena.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-06-at-3.04.38-PM.jpeg?w=1024&ssl=1"
          mainText="Lupita"
          subtitle="Organización"
          secondaryText="Centro Municipal de Educación para el Cuido Animal"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>

        <ContentCard
          image="https://assets.website-files.com/5ff8b159dd39137180f574ff/60133f5ebb139f0deaa2517d_catalina.jpeg"
          mainText="Lupita"
          subtitle="Organización"
          secondaryText="Animales de Asís"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>

        <ContentCard
          image="https://i1.wp.com/www.elrefugiocostaballena.com/wp-content/uploads/2020/04/279014754_10160278723458023_5217916145635528412_n.jpg?w=1536&ssl=1"
          mainText="Maximiliano"
          subtitle="Organización"
          secondaryText="El Refugio Hogar Animal Costa Ballena"
          location={"Cartago"}
          onClick={() => {
            window.location = "/Organizations";
          }}
        ></ContentCard>

        <ContentCard
          image="https://s3.amazonaws.com/www-inside-design/uploads/2020/10/aspect-ratios-blogpost-1x1-1.png"
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
