import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import AdmonPage from "./routes/AdmonPage";
import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admon"
            element={
              <ProtectedRoute>
                <AdmonPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
