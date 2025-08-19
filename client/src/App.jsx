import React, { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";
import PremiumPage from "./Pages/PremiumPage";
import SignUp from "./Pages/SignUp";
import ResumeBuilder from "../pages/ResumeBuilder";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPremium, setShowPremium] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBuilder, setShowBuilder] = useState(false);
  const [showMyResumes, setShowMyResumes] = useState(false);
  const [editingResume, setEditingResume] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setShowBuilder(true);
      setShowSignUp(false);
    }
  }, []);

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
    setShowBuilder(false);
    setShowMyResumes(false);
  };

  const handleAuthSuccess = () => {
    setShowBuilder(true);
    setShowSignUp(false);
    setShowAbout(false);
    setShowPremium(false);
    setShowSearch(false);
  };

  const openMyResumes = () => {
    setShowMyResumes(true);
    setShowBuilder(false);
    setEditingResume(null);
  };

  const handleOpenResumeForEdit = (resume) => {
    setEditingResume(resume || null);
    setShowBuilder(true);
    setShowMyResumes(false);
  };

  return (
    <div>
      {showSignUp ? (
        <SignUp
          onRedirect={handleShowHome}  
          onShowSearch={handleShowSearch}
          onShowPremium={handleShowPremium}
          onShowAbout={handleShowAbout}
          onAuthSuccess={handleAuthSuccess}
        />
      ) : showMyResumes ? (
        <MyResumes onHome={handleShowHome} onOpenResume={handleOpenResumeForEdit} />
      ) : showBuilder ? (
        <ResumeBuilder onHome={handleShowHome} onOpenMyResumes={openMyResumes} initialResume={editingResume} clearInitial={() => setEditingResume(null)} />
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
