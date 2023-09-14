import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HomeSectionWrapper from "./components/HomeSectionWrapper/HomeSectionWrapper";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <HomeSectionWrapper />
      </StyledEngineProvider>
    </>
  );
}

export default App;
