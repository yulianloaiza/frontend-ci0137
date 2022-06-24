//Pendiente ver si es necesario que se haga un resize automatico sin tener que
//tocar le barrita. asi se quitaria el scroll tambien

function InputWithLabel({ subtitle, bigText }) {
  if (bigText === "true") {
    return (
      <>
        <div
          className="flex-direction-column mx-auto content-center  
        p-4 py-4 text-left text-gray-700
        w-11/12 md:w-9/12 xl:w-1/2"
        >
          <p className="pb-2">{subtitle}</p>
          <textarea
            class="shadow form-control block w-full px-3 py-1.5 text-base font-normal
         leading-tight bg-idle-grey bg-clip-padding
        border border-solid border-gray-300 rounded transition ease-in-out
        m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            rows="3"
          ></textarea>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="flex-direction-column mx-auto content-center
        p-4 py-4 text-left text-gray-700
        w-11/12 md:w-9/12		xl:w-1/2 "
        >
          <p className="pb-2">{subtitle}</p>
          <input
            class="shadow border border-solid border-gray-300 rounded w-full py-2 px-3 
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          leading-tight transition ease-in-out m-0"
          />
        </div>
      </>
    );
  }
}

export default InputWithLabel;
