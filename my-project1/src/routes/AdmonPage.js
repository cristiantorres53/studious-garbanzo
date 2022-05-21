import { useAuth } from "../context/authContext";

const AdmonPage = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>Cargando</h1>;

  return (
    <div>
      <h1>Bienvenido {user.email}</h1>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdmonPage;
