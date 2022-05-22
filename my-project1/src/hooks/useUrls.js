import { collection, getDocs } from "firebase/firestore/lite";
import { useState } from "react"; //useEffect
import { db, auth } from "../firebase";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    console.log(auth.currentUser);
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "properties"));
      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setData(dataDB);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    getData,
  };
};
