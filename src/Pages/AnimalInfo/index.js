import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Carousel from "../../Component/Carousel";
//Cambiar el nombre cuando se resuelva la duda con el profe del nombre de la ruta.

/*LEFT OFF:
Importar solo el componente de Carousel, creo que el componenete se tiene que actualizar con la info que esta abajo.
Una vez esta, ir al componenete para cambiar que no acepte texto, solo imagenes. Luego crear las imagenes abajo de 
la imagen que ya esta, y hacer lo mismo de onclick blabla. Asi renderizamos todas las imagenes, y al darle click 
cambia la imagen principal. Cuando eso esta listo, regresamos aca y lo medio acomodamos bien. Podemos ir 
trabajando en la estructura en terminos de texto de la columna izquierda, y tal ves dejarlo con texto de prueba
aunque eso se deberia jalar de la 'base de datos' como es un animal en especifico.
*/
function AnimalInfo() {
  return (
    <>
      <div className="bg-light-gold">
        <Header />
        {/*Pendiente como establecer la altura*/}
        <div
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
            grid grid-cols-2 "
        >
          {/*Columna izquierda
        Pendiente como acomodar el texto de aca y si hay un limite en tamano
        Texto condicional dependiendo de en donde estamos en los slides*/}
          <div
            className="bg-idle-grey rounded
            px-4 md:px-8 lg:px-20 py-4 mb-8"
          >
            <p className="text-3xl font-bold">
              Texto solo por mientras, se debe rellenar.
            </p>
            <p className="text-xl">-Tal ves autora</p>
          </div>
          {/*Columna derecha*/}
          <div
            className="bg-component-shadow rounded
        px-4 md:px-8 lg:px-20 py-4 mb-8         
        max-w-3xl"
          >
            <Carousel />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
