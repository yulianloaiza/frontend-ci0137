import get from "lodash";
import { ErrorMessage } from "@hookform/error-message";
import FormErrorMessage from "../formErrorMessage";
/*Se le pasan los errores para poder ser renderizados dependiendo del arreglo de errores.
Si hay más de un error, solo muestra uno a la vez*/
function InputWithLabel({
  id,
  label,
  inputName,
  subtitle,
  bigText,
  register,
  rules,
  errors,
  inputType = "text",
  ...props
}) {
  const errorMessages = get(errors, inputName);

  return (
    <>
      <div
        className="flex-direction-column mx-auto content-center  
        p-4 py-4 text-left text-gray-700
        w-11/12 md:w-9/12 xl:w-1/2"
      >
        <p className="pb-2">{subtitle}</p>

        {bigText === "true" ? (
          <>
            <textarea
              className={`shadow form-control block w-full px-3 py-1.5 text-base font-normal
            leading-tight bg-clip-padding
            border border-solid border-gray-300 rounded transition ease-in-out
            m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
              rows="3"
              name={inputName}
              id={id}
              aria-label={label}
              aria-invalid={!!(errors && errorMessages)}
              {...props}
              {...(register && register(inputName, rules))}
            />
            <ErrorMessage
              errors={errors}
              name={inputName}
              render={({ message }) => (
                <FormErrorMessage>{message}</FormErrorMessage>
              )}
            />
          </>
        ) : (
          <>
            <input
              className={`shadow border border-solid border-gray-300 rounded w-full py-2 px-3 
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            leading-tight transition ease-in-out m-0`}
              name={inputName}
              id={id}
              type={inputType}
              aria-label={label}
              aria-invalid={!!(errors && errorMessages)}
              {...props}
              {...(register && register(inputName, rules))}
            />
            <ErrorMessage
              errors={errors}
              name={inputName}
              render={({ message }) => (
                <FormErrorMessage>{message}</FormErrorMessage>
              )}
            />
          </>
        )}
      </div>
    </>
  );
}

export default InputWithLabel;
