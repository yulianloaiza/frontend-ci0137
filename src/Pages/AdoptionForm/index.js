import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ContentCard from "../../Component/ContentCard";
import Button from "../../Component/Button";
import InputWithLabel from "../../Component/InputWithLabel";

/*
Aca se usa un aniaml y emails quemados solo para fines ilustrativos
En realidad se debe agarrrar del backend. Igual a como se hace en animal especifico y org especifico
*/

//Al darle enviar en el formulario, se envia el correo tanto a la organizacion como al cliente.
//En el backend tener un endpoint de envìo de correos que reciba todos los parametros del formulario.

/*Pendiente ver como hacer el handleSubmit. Abajo lo llame pero no esta la funcion adecuada*/

function AnimalInfo() {
  const exampleAnimal = [
    ["https://d2zp5xs5cp8zlg.cloudfront.net/image-32958-800.jpg"],
    ["Maximiliano"],
    ["Animales del Asis"],
    ["San Jose"],
  ];
  const organizationEmail = "rickyricky@mailinator.com";

  return (
    <>
      <div className="bg-light-gold">
        <Header />

        <div
          /*md:justify-items-center lg:justify-items-stretch*/
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
          grid grid-cols-1"
        >
          {/*Primera fila*/}
          <div
            className="bg-component-shadow rounded py-4 mb-2
            px-4 md:px-8 lg:px-0 xl:px-20  
            w-full "
          >
            <ContentCard
              image={exampleAnimal[0]}
              mainText={exampleAnimal[1]}
              subtitle="Organización"
              secondaryText={exampleAnimal[2]}
              location={exampleAnimal[3]}
              clickLink="PONERELIDELPERRITO"
            />
          </div>

          {/*Segunda fila*/}
          <div
            className="bg-idle-grey rounded
            px-4 md:px-8 lg:px-20 py-4 mb-8"
          >
            <div>
              <form onSubmit={handleSubmit()}>
                <InputWithLabel
                  subtitle={
                    "Nombre Completo"
                  }
                  bigText="false"
                  inputName={'Name'}
                />
                <InputWithLabel
                  subtitle={
                    "Edad"
                  }
                  bigText="false"
                  inputName={'Edad'}
                />
                <InputWithLabel
                  subtitle={"Información adicional que desee aportar"}
                  bigText="true"
                  inputName={'InfoAdicional'}
                />
                <InputWithLabel
                  subtitle={"¿Qué información quisiera saber del animal antes de adoptarlo?"}
                  bigText="true"
                  inputName={'InfoDelAnimal'}
                />
              </form>
              {/*Hacer un console.log o similar que me devuelva lo que estaba escrito en cada uno de los labels. Para probar */}
            </div>

            <div className="text-center mb-6 ">
              <Button text="Animales" width={"full"} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
