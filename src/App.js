
import React from 'react';
import { Router, Route, Routes, Navigate } from 'react-router-dom';
import StartPage from './Pages/StartPage/StartPage';
import Authorization from './Pages/Authorization/Authorization'; // Путь к вашему компоненту авторизации

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/start_page" />} />
        <Route path="/start_page" exact element={<StartPage />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
    </Router>
  );
}

export default App;
