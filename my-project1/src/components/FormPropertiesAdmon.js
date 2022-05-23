import React from "react";
import { useState } from "react";
import { useFirestore } from "../hooks/usePropertiesAdmon";

const FormPropertiesAdmon = () => {
  const { addData } = useFirestore();
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addData(text, text1);
    setText("");
    setText1("");
    console.log(text, text1);
  };

  return (
    <div>
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
    </div>
  );
};

export default FormPropertiesAdmon;
