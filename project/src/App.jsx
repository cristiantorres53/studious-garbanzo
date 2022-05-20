import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import RequiereAuth from "./components/RequiereAuth";
import AdmonCrud from "./routes/AdmonCrud";
import Home from "./routes/Home";

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
      </Routes>
    </div>
  );
}

export default App;
