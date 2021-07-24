import React, { useRef, useState } from "react";

const Copy = () => {
    const [texto, setTexto] = useState("");
    const inputRef = useRef()


  const handleButon = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand('copy');
  }

  return (
    <div>
      <h1>Focus</h1>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleButon}>Copia!</button>
    </div>
  );
};

export default Copy;
