import Header from "../../Component/Header";
import ContentCard from "../../Component/ContentCard";
import Footer from "../../Component/Footer";
import Filter from "../../Component/Filter";
import Loader from "../../Component/Loader";
import Title from "../../Component/Title";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  let listAnimals;
  const getAnimals = async () => {
    const animalsFetch = await fetch("http://localhost:7500/animals");
    listAnimals = await animalsFetch.json();
    setIsLoaded(true);
    setAnimals(listAnimals);
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="bg-light-gold">
      <Header />
      <Title titleText="Animales" />

      {!isLoaded && (
        <div className="flex justify-center">
          <Loader />
        </div>
      )}

      {isLoaded && (
        <>
          {/*Establece el tamaño de las 2 columnas. Una en 1-4 y la otra en el resto*/}
          <div
            className="px-4 md:px-8 lg:px-20 pb-4 mb-8
        grid grid-cols-1 lg:grid-cols-4"
          >
            {/*Columna de filtro*/}
            <div
              className="justify-items-center py-4 mb-8 w-full
          col-span-1 col-start-1 col-end-1"
            >
              <Filter />
            </div>
            {/*Div que contiene las 3 tarjetas POR EL MOMENTO, LUEGO DEBE SER TRAIDO DE LA BD*/}
            <div
              className="gap-8 justify-items-center py-4 mb-8 
          col-span-3 lg:pl-20 
          grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
            >
              {animals.map((i, index) => {
                return (
                  <ContentCard
                    key={`cc_${index}`}
                    image={i.images[0]}
                    mainText={i.name}
                    location={i.organization}
                    clickLink={`/animal_info/${i.id}`}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

export default Animals;
