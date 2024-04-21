import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home";
import AuthPage from "../pages/auth";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import SignIn from "../pages/singin";
import SignUp from "../pages/signup";
const RootRouter = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default RootRouter;
