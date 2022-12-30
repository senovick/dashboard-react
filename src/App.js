import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Tasks from "./components/Tasks";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Routes>
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
