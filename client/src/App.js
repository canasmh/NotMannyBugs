import React, { useState , useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Intro from "./components/Intro";

function App() {

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
      <Header />
      <Intro />
    </>
  );
}

export default App;
