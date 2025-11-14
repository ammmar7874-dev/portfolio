import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaPalette, FaTh, FaBars, FaTimes, FaLayerGroup } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const { currentTheme, currentLayout, currentOverlay, themeColors, themes, overlays, changeTheme, changeLayout, changeOverlay } = useTheme();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isLayoutOpen, setIsLayoutOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const themeOptions = Object.keys(themes).map((key) => ({
    key,
    ...themes[key],
  }));

  const layoutOptions = [
    { key: 'layout1', name: 'Classic', icon: '📐' },
    { key: 'layout2', name: 'Modern', icon: '✨' },
    { key: 'layout3', name: 'Creative', icon: '🎨' },
  ];

  const overlayOptions = Object.keys(overlays).map((key) => ({
    key,
    ...overlays[key],
  }));

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      style={{
        backgroundColor: scrolled ? `${themeColors.surface}dd` : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <motion.div
          className="logo"
          onClick={() => scrollToSection('home')}
          style={{ color: themeColors.primary }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="logo-text">Hamza Arshad</span>
        </motion.div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </nav>

        <div className="header-controls">
          <div className="control-group">
            <motion.button
              className="control-btn"
              onClick={() => {
                setIsThemeOpen(!isThemeOpen);
                setIsLayoutOpen(false);
                setIsOverlayOpen(false);
              }}
              style={{
                backgroundColor: themeColors.primary,
                color: themeColors.text,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaPalette />
            </motion.button>

            <AnimatePresence>
              {isThemeOpen && (
                <motion.div
                  className="theme-selector"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                  }}
                >
                  <div className="theme-selector-header">Choose Theme</div>
                  <div className="theme-grid">
                    {themeOptions.map((theme) => (
                      <motion.button
                        key={theme.key}
                        className={`theme-option ${currentTheme === theme.key ? 'active' : ''}`}
                        onClick={() => {
                          changeTheme(theme.key);
                          setIsThemeOpen(false);
                        }}
                        style={{
                          backgroundColor: theme.primary,
                          borderColor: currentTheme === theme.key ? theme.accent : 'transparent',
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={theme.name}
                      >
                        <div className="theme-preview" style={{ background: theme.gradient }}></div>
                        <span>{theme.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="control-group">
            <motion.button
              className="control-btn"
              onClick={() => {
                setIsLayoutOpen(!isLayoutOpen);
                setIsThemeOpen(false);
                setIsOverlayOpen(false);
              }}
              style={{
                backgroundColor: themeColors.secondary,
                color: themeColors.text,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTh />
            </motion.button>

            <AnimatePresence>
              {isLayoutOpen && (
                <motion.div
                  className="layout-selector"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                  }}
                >
                  <div className="layout-selector-header">Choose Layout</div>
                  <div className="layout-grid">
                    {layoutOptions.map((layout) => (
                      <motion.button
                        key={layout.key}
                        className={`layout-option ${currentLayout === layout.key ? 'active' : ''}`}
                        onClick={() => {
                          changeLayout(layout.key);
                          setIsLayoutOpen(false);
                        }}
                        style={{
                          borderColor: currentLayout === layout.key ? themeColors.primary : themeColors.textSecondary,
                          color: currentLayout === layout.key ? themeColors.primary : themeColors.textSecondary,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="layout-icon">{layout.icon}</span>
                        <span>{layout.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="control-group">
            <motion.button
              className="control-btn"
              onClick={() => {
                setIsOverlayOpen(!isOverlayOpen);
                setIsThemeOpen(false);
                setIsLayoutOpen(false);
              }}
              style={{
                backgroundColor: themeColors.accent,
                color: themeColors.text,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLayerGroup />
            </motion.button>

            <AnimatePresence>
              {isOverlayOpen && (
                <motion.div
                  className="overlay-selector"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                  }}
                >
                  <div className="overlay-selector-header">Choose Overlay</div>
                  <div className="overlay-grid">
                    {overlayOptions.map((overlay) => (
                      <motion.button
                        key={overlay.key}
                        className={`overlay-option ${currentOverlay === overlay.key ? 'active' : ''}`}
                        onClick={() => {
                          changeOverlay(overlay.key);
                          setIsOverlayOpen(false);
                        }}
                        style={{
                          borderColor: currentOverlay === overlay.key ? themeColors.primary : themeColors.textSecondary,
                          color: currentOverlay === overlay.key ? themeColors.primary : themeColors.textSecondary,
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="overlay-name">{overlay.name}</span>
                        {overlay.autoSelect && <span className="overlay-badge">★ Best</span>}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: themeColors.text }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

