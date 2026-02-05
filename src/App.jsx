import React, { useEffect } from "react";
import Layout from "./Components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div id="home" className="min-h-screen">
      <div className="container mx-auto">
        <div className="bg-pink-500/20 rounded-xl">
          <Layout />
        </div>
      </div>
    </div>
  );
}

export default App;
