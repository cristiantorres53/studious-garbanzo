import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import RequiereAuth from "./components/RequiereAuth";
import AdmonCrud from "./routes/AdmonCrud";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

function App() {
  const { user } = useContext(UserContext);
  if (user === false) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route
          path="/Admon"
          element={
            <RequiereAuth>
              <AdmonCrud />
            </RequiereAuth>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
