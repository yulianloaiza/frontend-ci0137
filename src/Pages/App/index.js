import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Animals from "../Animals";
import Organizations from "../Organizations";
import About from "../About";
import AnimalInfo from "../AnimalInfo";
import OrganizationInfo from "../OrganizationInfo";

//Del momento solo esta como relleno para ir probando componentes
//La ruta de animales en especificos se hace con un use params de react. 
//Y luego se maneja dependiendo del id, cual animal se trar para desplegar info
//algo como /AnimalInfo/:id
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Organizations" element={<Organizations />} />
        <Route path="/About" element={<About />} />
        <Route path="/AnimalInfo/" element={<AnimalInfo />} />
        <Route path="/OrganizationInfo" element={<OrganizationInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
