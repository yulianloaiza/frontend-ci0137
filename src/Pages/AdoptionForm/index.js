import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
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

/* 
Cuando ya funcione, vemos como tratar de incorporar los componentes con lo requerido por el form. 
Una vez funciona, simplemente creamos todo el form.
Cambiar el estilo de react slider
Con todo el form creado, crear las validaciones. 
Luego poner un console log para verificar que todo se este guardando, luego, se deberia enviar toda esta info 
al controlador de enviar correos si no me equivoco. Alla es donde se asembla el mensaje que tendria tanto 
los labels de aca como las respuestas de la persona
Y luego alla mismo, es donde se envia el correo hacia la organizacion con copia a la persona que desea adoptar. */

function AnimalInfo() {
  const exampleAnimal = [
    ["https://d2zp5xs5cp8zlg.cloudfront.net/image-32958-800.jpg"],
    ["Maximiliano"],
    ["Animales del Asis"],
    ["San Jose"],
  ];
  const organizationEmail = "rickyricky@mailinator.com";

  const defaultValues = {
    tipoPropiedad: { value: "Abierta", label: "Abierta" },
    aceptar: { value: "De acuerdo", label: "De acuerdo" },
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*Form normal */}
                <input
                  {...register("firstName", {
                    required: "this is a required",
                    maxLength: {
                      value: 2,
                      message: "Max length is 2",
                    },
                  })}
                />
                {errors.firstName && <p>{errors.firstName.message}</p>}

                {/*Form con componente. Para que los atributos de errores y el value se lean, se debe hacer un forward de referencia */}
                {/* <InputWithLabel
                  subtitle={"Nombre Completo"}
                  bigText="false"
                  inputName={"Name"}
                  {...register("justAAtest", {
                    required: "MANDATORIO CABRON",
                    maxLength: {
                      value: 2,
                      message: "MINIMO DOS",
                    },
                  })}
                />
                {errors.justAAtest && <p>{errors.justAAtest.message}</p>} */}

                <p className="pb-2">
                  La propiedad donde vive es abierta o cerrada? &#40;Cercas y
                  muros donde no pueda salir la mascota&#41; *
                </p>
                <Controller
                  name="tipoPropiedad"
                  control={control}
                  render={({ field }) => (
                    <ReactSelect
                      {...field}
                      options={[
                        { value: "Abierta", label: "Abierta" },
                        { value: "Cerrada", label: "Cerrada" },
                      ]}
                    />
                  )}
                />

                <p className="pb-2">
                  Con tener una nueva mascota, en su hogar están: *
                </p>
                <Controller
                  name="aceptar"
                  control={control}
                  render={({ field }) => (
                    <ReactSelect
                      {...field}
                      options={[
                        { value: "De acuerdo", label: "De acuerdo" },
                        { value: "En contra", label: "En contra" },
                      ]}
                    />
                  )}
                />

                {/*Si funciona, hacerlo pero con los componenetes de input. Los selectors pueden ser aca mismo creo */}
                <InputWithLabel
                  subtitle={"Nombre Completo"}
                  bigText="false"
                  inputName={"Name"}
                />
                <InputWithLabel
                  subtitle={"Edad"}
                  bigText="false"
                  inputName={"Edad"}
                />
                <InputWithLabel
                  subtitle={"Información adicional que desee aportar"}
                  bigText="true"
                  inputName={"InfoAdicional"}
                />
                <InputWithLabel
                  subtitle={
                    "¿Qué información quisiera saber del animal antes de adoptarlo?"
                  }
                  bigText="true"
                  inputName={"InfoDelAnimal"}
                />

                <Button text="Animales" width={"full"} buttonType="submit" />
              </form>
              {/*Hacer un console.log o similar que me devuelva lo que estaba escrito en cada uno de los labels. Para probar */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
