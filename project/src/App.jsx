import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./routes/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
