import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CardsContainer from "../components/CardsContainer";
import FormAdd from "../components/FormAdd";
import Navbar from "../components/Navbar";
import { ContainerAll } from "../styles/Styles";

function NavRouter() {
  return (
    <ContainerAll>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<CardsContainer />}></Route>
          <Route path="/add" element={<FormAdd />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </ContainerAll>
  );
}

export default NavRouter;
