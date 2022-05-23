// import { useAuth } from "../context/authContext";

import CardProperties from "../components/CardPropertiesAdmon";
import FormPropertiesAdmon from "../components/FormPropertiesAdmon";
import { useAuth } from "../context/authContext";

const AdmonPage = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  // if (loading) return <h1>Cargando</h1>;

  return (
    <div>
      {/* <h1>Bienvenido {user.email}</h1> */}

      <button onClick={handleLogout}>Logout</button>

      <CardProperties />
      <FormPropertiesAdmon />
    </div>
  );
};

export default AdmonPage;
