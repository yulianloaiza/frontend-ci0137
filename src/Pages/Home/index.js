import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
//Del momento solo esta como relleno para ir probando componentes
function App() {
  return (
    <div className="bg-light-gold">
      <Header />
      <p>Body de la pag </p>

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

      <Footer />
    </div>
  );
}

export default App;
