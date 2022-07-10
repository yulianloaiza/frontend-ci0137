import { useNavigate } from "react-router-dom";

function Logo({ width, height, link = "/home" }) {
  let navigate = useNavigate();
  return (
    <img
      className={`${width || "w-20"} ${height || "h-20"} cursor-pointer`}
      onClick={() => navigate(link)}
      alt="Logo"
      src="https://drive.google.com/uc?id=1G57Uh9PU8sWEK9BI_VP1clR9cEvanE5X"
    />
  );
}

export default Logo;
