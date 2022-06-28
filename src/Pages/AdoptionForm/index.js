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

/* 
Se deberia enviar toda esta info 
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
    console.log(data);
    //Enviarlo al controlador de correos. Tambien recordarorganizationEmail
  };

  return (
    <>
      <div className="bg-light-gold">
        <Header />
        <div
          className="px-4 md:px-8 lg:px-20 pb-4 mb-8
          grid grid-cols-1"
        >
          {/*Primera fila.*/}
          <div
            className="bg-component-shadow rounded py-4 mb-2
            px-4 md:px-8 lg:px-0 xl:px-20  
            w-full flex justify-center"
          >
            <ContentCard
              image={exampleAnimal[0]}
              mainText={exampleAnimal[1]}
              subtitle="Organización"
              secondaryText={exampleAnimal[2]}
              location={exampleAnimal[3]}
              clickLink="PONERELIDELPERRITO"
              single="true"
            />
          </div>
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
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AnimalInfo;
