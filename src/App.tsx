import React from "react";
import Main from "./pages/Main/Main";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
