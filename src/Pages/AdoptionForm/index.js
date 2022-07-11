import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";
import ReactSelect from "react-select";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import ContentCard from "../../Component/ContentCard";
import Button from "../../Component/Button";
import Loader from "../../Component/Loader";
import InputWithLabel from "../../Component/InputWithLabel";
import Title from "../../Component/Title";

/*
Aca se usa un email quemados solo para fines ilustrativos
En realidad se debe agarrrar del backend.
*/
//Al darle enviar en el formulario, se envia el correo tanto a la organizacion como al cliente.
//En el backend tener un endpoint de envìo de correos que reciba todos los parametros del formulario.

function AdoptionForm() {
  const { id } = useParams();
  const [success, setSuccess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [animalInfo, setAnimalInfo] = useState([]);

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

  const organizationEmail = "rickyricky@mailinator.com";

  //Valores por defecto de los dropdowns.
  const defaultValues = {
    tipoPropiedad: { value: "Abierta", label: "Abierta" },
    aceptar: { value: "De acuerdo", label: "De acuerdo" },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const onSubmit = (data) => {
    setSuccess(true);
    console.log(data);
    //Enviarlo al controlador de correos. Tambien recordarorganizationEmail
  };

  return (
    <>
      <div className="bg-light-gold">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="md:text-right ">
            <Title titleText={"Formulario de adopción"} />
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

        <div
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
          grid grid-cols-1"
        >
          {!isLoaded && (
            <div className="flex justify-center">
              <Loader />
            </div>
          )}
          {/*Primera fila.*/}
          {isLoaded && (
            <div
              className="bg-component-shadow rounded py-4 mb-2
            px-4 md:px-8 lg:px-0 xl:px-20  
            w-full flex justify-center"
            >
              <ContentCard
                image={animalInfo.images[0]}
                mainText={animalInfo.name}
                subtitle="Organización"
                secondaryText={animalInfo.organization}
                location={animalInfo.state}                
                clickLink={`/animal_info/${animalInfo.id}`}
                single
              />
            </div>
          )}

          {/*Segunda fila*/}
          <div
            className="bg-idle-grey rounded
            px-4 md:px-8 lg:px-20 py-4 mb-8"
          >
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/*Cada input es manejado por nuestro componente, al que se le pasa todo lo necesario por parametro
                register es requerido por react-hook-forms*/}
                <InputWithLabel
                  id="Name"
                  label="Name"
                  inputName="Name"
                  subtitle={"Nombre Completo *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                    minLength: {
                      value: 8,
                      message: "Digita el nombre completo. ",
                    },
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Age"
                  label="Age"
                  inputName="Age"
                  subtitle={"Edad (en números)*"}
                  bigText="false"
                  inputType="number"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                    min: {
                      value: 12,
                      message: "La edad mínima son 12 años.",
                    },
                    max: {
                      value: 90,
                      message: "La edad máxima son 90 años.",
                    },
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Occupation"
                  label="Occupation"
                  inputName="Occupation"
                  subtitle={"Ocupación *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Phone"
                  label="Phone"
                  inputName="Phone"
                  subtitle={"Número de teléfono *"}
                  bigText="false"
                  inputType="tel"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                    minLength: {
                      value: 8,
                      message: "Digita el número telefónico completo. ",
                    },
                    pattern: {
                      value:
                        //regex para validar que sean numeros
                        /^[0-9+\b]+$/,
                      message: "Introduce números sin espacios",
                    },
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Email"
                  label="Email"
                  inputName="Email"
                  subtitle={"Correo electrónico *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                    pattern: {
                      value:
                        //regex para validar correo
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Introduce in correo electrónico válido ",
                    },
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Province"
                  label="Province"
                  inputName="Province"
                  subtitle={"Provincia de residencia *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="District"
                  label="District"
                  inputName="District"
                  subtitle={"Cantón *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <div
                  className="flex-direction-column mx-auto content-center  
                  p-4 py-4 text-left text-gray-700
                  w-11/12 md:w-9/12 xl:w-1/2"
                >
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
                </div>

                <InputWithLabel
                  id="AdoptionReason"
                  label="AdoptionReason"
                  inputName="AdoptionReason"
                  subtitle={"¿Por qué desea adoptar un animal? *"}
                  bigText="true"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />

                <InputWithLabel
                  id="OtherPets"
                  label="OtherPets"
                  inputName="OtherPets"
                  subtitle={"¿Tiene otras mascotas en su hogar? *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <div
                  className="flex-direction-column mx-auto content-center  
                  p-4 py-4 text-left text-gray-700
                  w-11/12 md:w-9/12 xl:w-1/2"
                >
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
                </div>

                <InputWithLabel
                  id="Adults"
                  label="Adults"
                  inputName="Adults"
                  subtitle={"Número de adultos en el hogar *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />

                <InputWithLabel
                  id="Kids"
                  label="Kids"
                  inputName="Kids"
                  subtitle={"Número de niños en el hogar *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="InOrOut"
                  label="InOrOut"
                  inputName="InOrOut"
                  subtitle={"¿Vivirá el animal dentro o fuera de la casa? *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Day"
                  label="Day"
                  inputName="Day"
                  subtitle={"¿Dónde estará el animal durante el día? *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Night"
                  label="Night"
                  inputName="Night"
                  subtitle={"¿Dónde estará el animal durante la noche? *"}
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="Alone"
                  label="Alone"
                  inputName="Alone"
                  subtitle={
                    "¿Dónde estará el animal cuando usted no esté en casa? *"
                  }
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="AloneTime"
                  label="AloneTime"
                  inputName="AloneTime"
                  subtitle={
                    "¿Cuántas horas en promedio estará el animal solo por día? *"
                  }
                  bigText="false"
                  register={register}
                  rules={{
                    required: "Este campo es obligatorio.",
                  }}
                  errors={errors}
                />
                <InputWithLabel
                  id="AdditionalInfo"
                  label="AdditionalInfo"
                  inputName="AdditionalInfo"
                  subtitle="Información adicional que desee aportar"
                  bigText="true"
                  register={register}
                  rules={{}}
                  errors={errors}
                />
                <InputWithLabel
                  id="AnimalInfo"
                  label="AnimalInfo"
                  inputName="AnimalInfo"
                  subtitle="¿Qué información quisiera saber del animal antes de adoptarlo?"
                  bigText="true"
                  register={register}
                  rules={{}}
                  errors={errors}
                />
                <div className="text-center px-5">
                  <Button
                    text="Enviar"
                    width={"11/12 md:w-9/12 xl:w-1/2"}
                    buttonType="submit"
                  />
                </div>
                <div className="px-5 flex flex-col text-center justify-center items-center">
                  {success && (
                    <p className="mt-3 w-11/12 md:w-9/12 xl:w-1/2 bg-brown-gold rounded-lg text-xl">
                      Se ha enviado el formulario! La organización responderá al
                      correo en debido tiempo. Puede revisar su correo para ver
                      una copia del mensaje.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AdoptionForm;
