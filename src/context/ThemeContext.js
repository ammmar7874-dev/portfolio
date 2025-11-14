import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes, getThemeColors } from '../utils/themes';
import { overlays, getOverlay, getAutoSelectedOverlay } from '../utils/overlays';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('theme1');
  const [currentLayout, setCurrentLayout] = useState('layout1');
  const [currentOverlay, setCurrentOverlay] = useState(() => {
    const saved = localStorage.getItem('portfolio-overlay');
    return saved || getAutoSelectedOverlay();
  });
  const [showWelcomeOverlay, setShowWelcomeOverlay] = useState(() => {
    const hasVisited = localStorage.getItem('portfolio-visited');
    return !hasVisited;
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const savedLayout = localStorage.getItem('portfolio-layout');
    const savedOverlay = localStorage.getItem('portfolio-overlay');
    if (savedTheme) setCurrentTheme(savedTheme);
    if (savedLayout) setCurrentLayout(savedLayout);
    if (savedOverlay) setCurrentOverlay(savedOverlay);
  }, []);

  const changeTheme = (themeKey) => {
    setCurrentTheme(themeKey);
    localStorage.setItem('portfolio-theme', themeKey);
  };

  const changeLayout = (layoutKey) => {
    setCurrentLayout(layoutKey);
    localStorage.setItem('portfolio-layout', layoutKey);
  };

  const changeOverlay = (overlayKey) => {
    setCurrentOverlay(overlayKey);
    localStorage.setItem('portfolio-overlay', overlayKey);
  };

  const closeWelcomeOverlay = () => {
    setShowWelcomeOverlay(false);
    localStorage.setItem('portfolio-visited', 'true');
  };

  const themeColors = getThemeColors(currentTheme);
  const overlayData = getOverlay(currentOverlay);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        currentLayout,
        currentOverlay,
        themeColors,
        themes,
        overlays,
        overlayData,
        showWelcomeOverlay,
        changeTheme,
        changeLayout,
        changeOverlay,
        closeWelcomeOverlay,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

