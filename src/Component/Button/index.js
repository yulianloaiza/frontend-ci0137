function Button({ text, width, buttonType = "button" }) {
  return (
    <button
      type={buttonType}
      className={`bg-navy-blue text-white font-semibold py-2 px-4 w-${width} border border-white`}
    >
      {text}
    </button>
  );
}

export default Button;
