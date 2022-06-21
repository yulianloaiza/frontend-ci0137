function Button({ text, width }) {
  return (
    <button
      type="button"
      className={`bg-navy-blue text-white font-semibold py-2 px-4 w-${width} border border-white`}
    >
      {text}
    </button>
  );
}

export default Button;
