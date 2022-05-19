import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App = () => {
  return (
    <div>
      <NavBar/>
      <h1>App1</h1>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
