import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import Button from "../../Component/Button";

//TODO FALTA lo de EDAD

export default function Filter() {
  //Valores por defecto de los dropdowns del filtro.
  const defaultValues = {
    tamano: { value: "Todos", label: "Todos" },
    genero: { value: "Todos", label: "Todos" },
    ubicacion: { value: "Todas", label: "Todos" },
    /*Pendiente como implementar EDAD*/
  };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
  });

  //Para obtener la informacion del filtro
  const onSubmit = (data) => {
    console.log(data);
    //Enviarlo al controlador de correos. Tambien recordarorganizationEmail
  };


  // bg-idle-grey
  return (
    <>
      {/* Contenedor de los filtros*/}            
      <div
        className={`w-full  bg-blue-800 sm:bg-white md:bg-red-800 lg:bg-green-800   border rounded content-start`}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div
            className="flex-direction-column mx-auto content-center  
                  p-4 py-4 text-left text-gray-700
                  w-3/4 md:w-full xl:w-3/4"
          >
            <p className="pb-2">Tamaño</p>
            <Controller
              name="tamano"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={[
                    { value: "Todos", label: "Todos" },
                    { value: "Pequeño", label: "Pequeño" },
                    { value: "Mediano", label: "Mediano" },
                    { value: "Grande", label: "Grande" },
                  ]}
                />
              )}
            />
          </div>

          <div
            className="flex-direction-column mx-auto content-center  
                  p-4 py-4 text-left text-gray-700
                  w-3/4 md:w-full xl:w-3/4"
          >
            <p className="pb-2">Género</p>
            <Controller
              name="genero"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={[
                    { value: "Todos", label: "Todos" },
                    { value: "Macho", label: "Macho" },
                    { value: "Hembra", label: "Hembra" },
                  ]}
                />
              )}
            />
          </div>

          <div
            className="flex-direction-column mx-auto content-center  
                  p-4 py-4 text-left text-gray-700
                  w-3/4 md:w-full xl:w-3/4"
          >
            <p className="pb-2">Ubicación</p>
            <Controller
              name="ubicacion"
              control={control}
              render={({ field }) => (
                <ReactSelect
                  {...field}
                  options={[
                    { value: "Todas", label: "Todas" },
                    { value: "San José", label: "San José" },
                    { value: "Alajuela", label: "Alajuela" },
                    { value: "Cartago", label: "Cartago" },
                    { value: "Heredia", label: "Heredia" },
                    { value: "Guanacaste", label: "Guanacaste" },
                    { value: "Puntarenas", label: "Puntarenas" },
                    { value: "Limón", label: "Limón" },
                  ]}
                />
              )}
            />
          </div>

          {/*Boton para aplicar cambios en el filtro */}
          <div className="text-center px-5 py-5">
            <Button
              text="Enviar"
              width={"w-3/4 md:w-full xl:w-3/4"}
              buttonType="submit"
            />
          </div>
        </form>
      </div>      
    </>
  );
}
