import { useFirestore } from "../hooks/usePropertiesPublic";

const Home = () => {
  const { data, error, loading } = useFirestore();

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>{error}</p>;

  return <div>Home
    {
      data.map(item=>(
        <div key={item.nanoid}>
          
          <p>{item.estado}</p>
          <p>{item.precio}</p>
          <p>{item.categoria}</p>
          <p>{item.descripcion}</p>
          <p>{item.ubicacion}</p>
          <p>{item.nHabitaciones}</p>
          <p>{item.nBanos}</p>
          <p>{item.nMetrosCuadrados}</p>
        </div>
      ))
    }
  </div>;
};

export default Home;
