import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import WelcomeOverlay from './components/WelcomeOverlay/WelcomeOverlay';
import OverlayEffects from './components/OverlayEffects/OverlayEffects';
import './App.css';

const AppContent = () => {
  const { themeColors } = useTheme();

  useEffect(() => {
    // Apply theme colors to CSS variables
    const root = document.documentElement;
    root.style.setProperty('--primary', themeColors.primary);
    root.style.setProperty('--secondary', themeColors.secondary);
    root.style.setProperty('--accent', themeColors.accent);
    root.style.setProperty('--background', themeColors.background);
    root.style.setProperty('--surface', themeColors.surface);
    root.style.setProperty('--text', themeColors.text);
    root.style.setProperty('--text-secondary', themeColors.textSecondary);
  }, [themeColors]);

  return (
    <div
      className="app"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
      }}
    >
      <OverlayEffects />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WelcomeOverlay />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

