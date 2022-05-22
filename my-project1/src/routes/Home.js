import { useFirestore } from "../hooks/useUrls";

const Home = () => {
  const { data, error, loading } = useFirestore();

if(loading) return <p>Loading data...</p>
if(error) return <p>{error}</p>

  return <div>
    {data.map(item=>(
      <div key={item.nanoid}>
        <p>{item.nanoid}</p>
      </div>
    ))}
  </div>;
};

export default Home;
