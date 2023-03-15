import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopSongs } from "./api/api";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" dataSource={fetchTopSongs} />
    </>
  );
}

export default App;
