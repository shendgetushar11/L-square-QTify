import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
// import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section title="Top Albums" dataSource={fetchTopAlbums} />
      <Section title="New Albums" dataSource={fetchNewAlbums} />
    </>
  );
}

export default App;
