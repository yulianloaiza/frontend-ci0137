function FormErrorMessage({ children }) {
  return (
    <p className="font-serif text-sm text-left block text-red-600">
      {children}
    </p>
  );
}

export default FormErrorMessage;
