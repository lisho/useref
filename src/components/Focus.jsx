import React, { useEffect, useRef, useState } from "react";

const Focus = () => {
  const [texto, setTexto] = useState("");
  const inputRef = useRef();
  /*  useEffect(() => {
      console.log(texto)
      
  }, [texto]) */

  const handleFocaliza = () => {
    inputRef.current.focus();
   
  };

  return (
    <div>
      <h1>Focus</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleFocaliza}>Focaliza!</button>

    </div>
  );
};

export default Focus;
