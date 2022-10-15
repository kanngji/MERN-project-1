import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
    <Router>
      <Main>
        <Navbar />
      </Main>

      <br />
      {/* <Route path="/" exact component={ExerciseList} />
      <Route path="/edit:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} /> */}
    </Router>
  );
}

export default App;
