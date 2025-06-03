import React, { useState } from "react";
import MainPage from "./Pages/MainPage";
import PremiumPage from "./Pages/PremiumPage";
import SignUp from "./Pages/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleGetStarted = () => {
    setShowSignUp(true);
    setShowAbout(false);
    setShowPremium(false);
    setShowSearch(false);
  };

  const handleShowAbout = () => {
    setShowAbout(true);
    setShowSignUp(false);
    setShowPremium(false);
    setShowSearch(false);
  };

  const handleShowPremium = () => {
    setShowPremium(true);
    setShowSignUp(false);
    setShowAbout(false);
    setShowSearch(false);
  };

  const handleShowSearch = () => {
    setShowSearch(true);
    setShowSignUp(false);
    setShowAbout(false);
    setShowPremium(false);
  };

  const handleShowHome = () => {
    setShowSignUp(false);
    setShowAbout(false);
    setShowPremium(false);
    setShowSearch(false);
  };

  return (
    <div>
      {showSignUp ? (
        <SignUp
          onRedirect={handleShowHome}  
          onShowSearch={handleShowSearch}
          onShowPremium={handleShowPremium}
          onShowAbout={handleShowAbout}
        />
      ) : showAbout ? (
        <AboutUs />
      ) : showPremium ? (
        <PremiumPage
          onHome={handleShowHome}
          onShowAbout={handleShowAbout}
          onShowSearch={handleShowSearch}
        />
      ) : showSearch ? (
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      ) : (
        <MainPage
          onGetStarted={handleGetStarted}
          onShowAbout={handleShowAbout}
          onShowPremium={handleShowPremium}
          onShowSearch={handleShowSearch}
        />
      )}
    </div>
  );
}

export default App;
