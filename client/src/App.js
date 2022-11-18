import React, { useState , useEffect } from "react";
import Intro from "./components/Intro";

export default function App() {

  const [isMobile, setIsMobile] = useState(0);

    const handleResize = () => {
        if (window.innerWidth < 768) {
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
      <Intro isMobile={isMobile} />
    </>
  );
}
