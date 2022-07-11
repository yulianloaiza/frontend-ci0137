import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "../Home";
import Animals from "../Animals";
import Organizations from "../Organizations";
import About from "../About";
import AnimalInfo from "../AnimalInfo";
import OrganizationInfo from "../OrganizationInfo";
import AdoptionForm from "../AdoptionForm";

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
        <Route path="/adoption_form/:id" element={<AdoptionForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
