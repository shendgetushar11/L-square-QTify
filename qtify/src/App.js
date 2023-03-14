import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        image="https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
        follows={100}
        title={"New Bollywood"}
      />
      {/* <Section /> */}
    </>
  );
}

export default App;
