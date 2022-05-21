import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import RequiereAuth from "./components/RequiereAuth";
import AdmonCrud from "./routes/AdmonCrud";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admon"
          element={
            <RequiereAuth>
              <AdmonCrud />
            </RequiereAuth>
          }
        />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
