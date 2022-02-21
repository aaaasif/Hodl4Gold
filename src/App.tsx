import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components";

import { Event, LandingPage, PageNotFound } from "./pages";
import Leaderboard from "./pages/LandingPage/Leaderboard";
import Proposals from "./pages/LandingPage/Proposals";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event/:id" element={<Event />} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/proposals" element={<Proposals/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
