import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Art from "./components/Art";
import Design from "./components/Art/Design";
import Illustration from "./components/Art/Illustration";
import Animation from "./components/Art/Animation";
import ComputerScience from "./components/CS";
import './vendors/fontawesome/css/all.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/design" element={<Design />} />
          <Route path="/illustration" element={<Illustration />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/computerscience" element={<ComputerScience />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
