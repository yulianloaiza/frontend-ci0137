import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
//Del momento solo esta como relleno para ir probando componentes
function App() {
  return (
    <div className="bg-light-gold">
      <Header />
      <p>Body de la pag </p>

      <div className="flex px-4 md:px-8 lg:px-20 py-4 mb-8">
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
      </div>
  
      <Footer />
    </div>
  );
}

export default App;
