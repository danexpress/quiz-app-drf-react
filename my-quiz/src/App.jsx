import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Quiz from "./components/Quiz/Quiz"; 
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/Navbar";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      const response = await fetch("http://localhost:8000/data/");
      const questionResponse = await response.json();
      console.log("Fetched Questions:", questionResponse);
      setQuestions(questionResponse.questions); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz" 
          element={
            questions.length ? (
              <Quiz questions={questions} />
            ) : (
              <div>Loading...</div>
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
