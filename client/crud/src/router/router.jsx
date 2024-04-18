import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import { Container } from "react-bootstrap";

const RootRouter = () => {
  return (
    <main className="App">
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
        </Routes>
      </Container>
    </main>
  );
};

export default RootRouter;
