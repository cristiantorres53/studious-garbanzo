import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
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

  const addData = async (
    estado,
    precio,
    categoria,
    descripcion,
    ubicacion,
    nBanos,
    nHabitaciones,
    nMetrosCuadrados,
    seguridadPrivada
  ) => {
    try {
      setLoading((prev) => ({ ...prev, addData: true }));
      const newDoc = {
        estado: estado,
        precio: precio,
        categoria: categoria,
        descripcion: descripcion,
        ubicacion: ubicacion,
        nBanos: nBanos,
        nHabitaciones: nHabitaciones,
        nMetrosCuadrados: nMetrosCuadrados,
        seguridadPrivada: seguridadPrivada,
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

  const deleteData = async (nanoid) => {
    try {
      setLoading((prev) => ({ ...prev, deleteData: true }));
      const docRef = doc(db, "properties", nanoid);
      await deleteDoc(docRef);
      setData(data.filter((item) => item.nanoid !== nanoid));
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, deleteData: false }));
    }
  };

  const updateData = async (nanoid, newCategoria) => {
    try {
      setLoading((prev) => ({ ...prev, updateData: true }));
      const docRef = doc(db, "properties", nanoid);
      await updateDoc(docRef, { categoria: newCategoria });
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, updateData: false }));
    }
  };

  return {
    data,
    error,
    loading,
    getData,
    addData,
    deleteData,
    updateData,
  };
};
