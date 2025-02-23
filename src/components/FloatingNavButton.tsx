import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FloatingNavButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const routeChain = ["/", "/corsi", "/chi-siamo", "/contatti"];
  const currentIndex = routeChain.indexOf(location.pathname);
  let nextPath = "";

  if (currentIndex === -1) {
    nextPath = "/";
  } else if (currentIndex < routeChain.length - 1) {
    nextPath = routeChain[currentIndex + 1];
  }

  if (location.pathname === "/contatti") return null;

  const getLabel = (path) => {
    switch (path) {
      case "/":
        return "Home";
      case "/corsi":
        return "Corsi";
      case "/chi-siamo":
        return "Chi Siamo";
      case "/contatti":
        return "Contatti";
      default:
        return "";
    }
  };

  return (
    <button
      onClick={() => navigate(nextPath)}
      className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-lg transition duration-300"
    >
      Vai a {getLabel(nextPath)}
    </button>
  );
};

export default FloatingNavButton;
