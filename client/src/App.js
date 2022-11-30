import React, { useState , useEffect } from "react";
import Home from "./components/Home";
import Posts from "./components/Posts/Posts";

export default function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
      }
      
      // create an event listener
      useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
      })

  return (
    <>
      <Home isMobile={isMobile} />
      <Posts />
    </>
  );
}
