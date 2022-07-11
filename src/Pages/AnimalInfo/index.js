import Mixpanel from "../../services/mixpanel";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Carousel from "../../Component/Carousel";
import Button from "../../Component/Button";
import Title from "../../Component/Title";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Component/Loader";
import { useNavigate } from "react-router-dom";

function AnimalInfo() {
  const { id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [animalInfo, setAnimalInfo] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {    
    let itemJSON;
    const getAnimalById = async (id) => {
      const itemFetch = await fetch(`http://localhost:7500/animals/${id}`);
      itemJSON = await itemFetch.json();
      setIsLoaded(true);
      //Ya tenemos los datos en formato json. Llamamos a variable de estado con datos
      setAnimalInfo(itemJSON);
    };
    getAnimalById(id);
  }, [id]);
  
  return (
    <>
      <div className="bg-light-gold">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:text-right ">
            <Title titleText={animalInfo.name}/>
          </div>
          <div className="px-4 md:pr-8 lg:pr-20 pb-4 mb-3 self-center md:text-right">
            <Button
              text="Regresar"
              width={"1/2 md:w-3/4 xl:w-1/4 "}
              className="px-4 md:px-8 lg:px-20"
              goBack
            />
          </div>
        </div>

        {!isLoaded && (
          <div className="flex justify-center">
            <Loader />
          </div>
        )}

        {isLoaded && (
          <div
            className="px-4 md:px-8 lg:px-20 pb-4 mb-8
            grid grid-cols-1  
            lg:grid lg:grid-cols-2"
          >
            {/*Columna izquierda*/}
            <div
              className="bg-component-shadow rounded py-4 mb-3 lg:mb-8
              px-4 md:px-8 lg:px-0 xl:px-20"
            >
              <Carousel images={animalInfo.images} />
            </div>

            {/*Columna derecha*/}
            <div
              className="bg-idle-grey rounded
              px-4 md:px-8 lg:px-20 py-4 mb-8"
            >
              <div className="p-4 text-left">
                <p className="text-subtitle-grey">Nombre </p>
                <p className="text-xl pb-2">{animalInfo.name}</p>
                <p className="text-subtitle-grey">Organización </p>
                <p className="text-xl pb-2">{animalInfo.organization}</p>
                <p className="text-subtitle-grey">Tamaño</p>
                <p className="text-lg pb-2">{animalInfo.size}</p>
                <p className="text-subtitle-grey">Género</p>
                <p className="text-lg pb-2">{animalInfo.gender}</p>
                <p className="text-subtitle-grey">Ubicación</p>
                <p className="text-lg pb-2">{animalInfo.state}</p>
                <p className="text-subtitle-grey">Edad</p>
                <p className="text-lg pb-2">{animalInfo.years}</p>
                <p className="text-subtitle-grey">Descripción </p>
                <p className="text-lg pb-2">{animalInfo.description}</p>
              </div>
              <div className="text-center mb-6 ">
                <button
                  type="button"
                  className={`bg-navy-blue text-white font-semibold py-2 px-4 w-full border border-white`}
                  onClick={() => {                  
                    navigate(`/adoption_form/${animalInfo.id}`); 
                    Mixpanel.track(Mixpanel.TYPES.GO_TO_ADOPTION_FORM);
                  }}     
                >
                  "Adoptar"
                </button>
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
