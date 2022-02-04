import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SingleTweet from './SingleTweet';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweet/:id" element={<SingleTweet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
