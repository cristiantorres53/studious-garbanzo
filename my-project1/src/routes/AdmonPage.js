// import { useAuth } from "../context/authContext";

import { useState } from "react";
import CardProperties from "../components/CardPropertiesAdmon";
import { useAuth } from "../context/authContext";

const AdmonPage = () => {
  const { logout } = useAuth();

  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const handleLogout = async () => {
    await logout();
  };

  // if (loading) return <h1>Cargando</h1>;

  const handleSubmit = e =>{
    e.preventDefault()
    console.log(text, text1)
  }

  return (
    <div>
      {/* <h1>Bienvenido {user.email}</h1> */}

      <button onClick={handleLogout}>Logout</button>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="ingrese el estado"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <input
          placeholder="ingrese el estado"
          value={text1}
          onChange={(e) => setText1(e.target.value)}
        />

        <button type="submit">enviar</button>
      </form>

      <CardProperties />
    </div>
  );
};

export default AdmonPage;
