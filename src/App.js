import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import EditExercise from "./components/EditExercise";
import ExerciseList from "./components/ExerciseList";
import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
  border: 1px solid black;
`;

function App() {
  return (
    <>
      <Main>
        <Navbar />
      </Main>

      <br />
      <Routes>
        <Route path="/" element={<ExerciseList></ExerciseList>} />
        <Route path="/exercises" element={<EditExercise></EditExercise>} />
        <Route path="/create" element={<CreateExercise></CreateExercise>} />
        <Route path="/user" element={<CreateUser></CreateUser>} />
      </Routes>
    </>
  );
}

export default App;
