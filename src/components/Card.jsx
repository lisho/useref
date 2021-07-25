import React, { useEffect, useState, useRef } from "react";
import getPost from "../helpers/getPost";

const styles = {
  caja: {
    textAlign: "center",
    margin: "50px",
  },
};

const Card = () => {

  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost);
          setIsLoading(false);
        }   
      }, 2000);
    });
  };
  
  useEffect(() => {
    updatePost();
    return ()=> isMountedRef.current = false;
  }, []);

  return (
    <div style={styles.caja}>
      {isLoading ? (
        <h2>Loading ... </h2>
      ) : (
        <div>
          <h2>Card</h2>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
