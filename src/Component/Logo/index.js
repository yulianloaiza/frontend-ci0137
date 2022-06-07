//TODO arreglar a que este logo sea el de la app, tal ves modificar tamaño default y que el src este en folder public
function Logo({ width, height }) {
    return (
      <img
        className={`${width || "w-20"} ${height || "h-20"}`}
        alt="Logo"
        src="https://bit.ly/logo-ci0137"
      />
    );
  }
  
  export default Logo;
  