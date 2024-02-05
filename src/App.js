import React, { useContext, useEffect, useState } from "react";
import PerfoMain from "./perfoMain/pages/PerfoMain";
import { DarkContext } from "./shared/context/DarkContext";
import Navbar from "./shared/navbar/Navbar";
import styled from "styled-components";
import Contact from "./shared/contact/Contact";
import PerfoBot from "./perfoMain/components/PerfoBot";
import ProgressBar from "./ProgressBar";

const Container = styled.div((props) => ({
  backgroundColor: props.toggle ? "white" : "black",
  color: props.toggle ? "black" : "white",
}));

const App = () => {
  const darkModeToggle = useContext(DarkContext).toggle;

  const [bar, setBar] = useState(0);

  const barHandler = (data) => {
    setTimeout(() => {
      setBar(data);
    }, [1000]);
  };
  return (
    <Container toggle={darkModeToggle}>
      {bar == 100 ? (
        <>
          <Navbar />
          <PerfoMain />
          <PerfoBot />
          {/* <Contact /> */}
        </>
      ) : (
        <ProgressBar barProps={barHandler} />
      )}
    </Container>
  );
};

export default App;
