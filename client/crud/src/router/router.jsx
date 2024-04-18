import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import AuthPage from "../pages/auth";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
const RootRouter = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />{" "}
            <Route path="/auth" element={<AuthPage />} />{" "}
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default RootRouter;
