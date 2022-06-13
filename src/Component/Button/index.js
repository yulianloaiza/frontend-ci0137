function Button({ text }) {
  return (
    <button
      type="button"
      className="bg-white text-navy-blue font-semibold  py-2 px-4 border border-navy-blue rounded
        hover:bg-navy-blue hover:text-white hover:border-white hover:border"
    >
      {text}
    </button>
  );
}

export default Button;