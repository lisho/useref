import React, { useEffect, useRef, useState } from "react";

const ScrollAnimation = () => {
  const [backGround, setBackGround] = useState("green");
  const [visible, setVisible] = useState(false);
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect(); //Funcion para acceder a datos de la posición en pantalla.

      y > 0 ? setBackGround("green") : setBackGround("pink");
      y < -100 ? setVisible(true) : setVisible(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  const styles = {
    div1: {
      backgroundColor: backGround,
      height: "180vh",
      display: "flex",
      justifyContent: "center",
    },
    div2: {
      marginTop: "200px",
      backgroundColor: "grey",
      height: "300px",
      width: "300px",
    },
  };

  return (
    <div>
      <h1>ScrollAnimation</h1>
      <div style={styles.div1} ref={divRef}>
        {visible && <div style={styles.div2} ></div>}
      </div>
    </div>
  );
};

export default ScrollAnimation;
