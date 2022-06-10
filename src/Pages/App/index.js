import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Animals from "../Animals";
import Organizations from "../Organizations";
import About from "../About";

//Del momento solo esta como relleno para ir probando componentes
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Organizations" element={<Organizations />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
