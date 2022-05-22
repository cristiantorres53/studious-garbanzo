import { useEffect, useState } from "react";
// import { useAuth } from "../context/authContext";
import { useFirestore } from "../hooks/useUrls";

const AdmonPage = () => {
  // const { user, logout, loading } = useAuth();
  const { data, error, loading, getData } = useFirestore();

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  const [text, setText] = useState("");

  // const handleLogout = async () => {
  //   await logout();
  // };

  // if (loading) return <h1>Cargando</h1>;

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div>
      {/* <h1>Bienvenido {user.email}</h1> */}

      {/* <button onClick={handleLogout}>Logout</button> */}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="submit">Enviar</button>
      </form>

      {data.map((item) => (
        <div key={item.nanoid}>
          <p>{item.nanoid}</p>
          <p>{item.origin}</p>
          <p>{item.uid}</p>
        </div>
      ))}
    </div>
  );
};

export default AdmonPage;
