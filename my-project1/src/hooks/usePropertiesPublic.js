import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('getData')
    getData();
  }, []);

  const getData = async () => {
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
  };
};
