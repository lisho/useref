import React, { useRef, useState } from "react";

const Copy = () => {
  const [texto, setTexto] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const inputRef = useRef();

  const handleButon = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
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
      <button onClick={handleButon}>Copia!</button>

      {isCopied && <h3>Texto copiado...</h3>}
    </div>
  );
};

export default Copy;
