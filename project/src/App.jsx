import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import AdmonCrud from "./routes/AdmonCrud";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admon" element={<AdmonCrud />} />
      </Routes>
    </div>
  );
}

export default App;
