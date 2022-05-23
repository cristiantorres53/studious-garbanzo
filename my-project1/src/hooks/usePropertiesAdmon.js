import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";
import { db, auth } from "../firebase";
import { nanoid } from "nanoid";

export const useFirestore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState({});

  const getData = async () => {
    try {
      setLoading((prev) => ({ ...prev, getData: true }));
      const propertiesRef = collection(db, "properties");
      const q = query(propertiesRef, where("uid", "==", auth.currentUser.uid));
      const querySnapshot = await getDocs(q);
      const dataDB = querySnapshot.docs.map((doc) => doc.data());
      setData(dataDB);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, getData: false }));
    }
  };

  const addData = async (nBanos, nHabitaciones) => {
    try {
      setLoading((prev) => ({ ...prev, addData: true }));
      const newDoc = {
        nBanos: nBanos,
        nHabitaciones: nHabitaciones,
        nanoid: nanoid(6),
        uid: auth.currentUser.uid,
      };

      const docRef = doc(db, "properties", newDoc.nanoid);
      await setDoc(docRef, newDoc);
      setData([...data, newDoc]);
      nanoid(8);
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
    addData,
  };
};
