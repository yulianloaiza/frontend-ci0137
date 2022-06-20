import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Animals from "../Animals";
import Organizations from "../Organizations";
import About from "../About";
import AnimalInfo from "../AnimalInfo";
import OrganizationInfo from "../OrganizationInfo";

//Del momento solo esta como relleno para ir probando componentes
// No estoy seguro como debe ir la pagina de cada animal especifico
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Organizations" element={<Organizations />} />
        <Route path="/About" element={<About />} />
        
        <Route path="/AnimalInfo" element={<AnimalInfo />} />
        <Route path="/OrganizationInfo" element={<OrganizationInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
