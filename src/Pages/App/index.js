import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Animals from "../Animals";
import Organizations from "../Organizations";
import About from "../About";
import AnimalInfo from "../AnimalInfo";
import OrganizationInfo from "../OrganizationInfo";
import AdoptionForm from "../AdoptionForm";

/*Del momento solo esta como relleno para ir probando componentes
La ruta de animales en especificos se hace con un use params de react. 
Y luego se maneja dependiendo del id, cual animal se trar para desplegar info
algo como /AnimalInfo/:id
Lo mismo para org especifica y para formulario*/

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/about" element={<About />} />
        <Route path="/animal_info/:id" element={<AnimalInfo />} />
        <Route path="/organization_info/:id" element={<OrganizationInfo />} />
        <Route path="/adoption_form" element={<AdoptionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
