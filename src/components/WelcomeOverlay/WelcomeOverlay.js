import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaPalette, FaTh, FaLayerGroup, FaTimes, FaStar } from 'react-icons/fa';
import './WelcomeOverlay.css';

const WelcomeOverlay = () => {
  const { themeColors, closeWelcomeOverlay, showWelcomeOverlay } = useTheme();

  if (!showWelcomeOverlay) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="welcome-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          backgroundColor: `${themeColors.background}dd`,
          backdropFilter: 'blur(10px)',
        }}
      >
        <motion.div
          className="welcome-content"
          style={{
            backgroundColor: themeColors.surface,
            borderColor: themeColors.primary,
          }}
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <motion.button
            className="welcome-close"
            onClick={closeWelcomeOverlay}
            style={{ color: themeColors.text }}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTimes />
          </motion.button>

          <motion.div
            className="welcome-icon"
            style={{ color: themeColors.primary }}
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            <FaStar />
          </motion.div>

          <motion.h2
            className="welcome-title"
            style={{ color: themeColors.primary }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to My Portfolio!
          </motion.h2>

          <motion.p
            className="welcome-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Customize your experience with amazing options:
          </motion.p>

          <motion.div
            className="welcome-features"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="welcome-feature"
              whileHover={{ scale: 1.05, x: 10 }}
              style={{ borderColor: themeColors.primary }}
            >
              <FaPalette style={{ color: themeColors.primary }} />
              <div>
                <h4>7 Color Themes</h4>
                <p>Choose from beautiful color schemes</p>
              </div>
            </motion.div>

            <motion.div
              className="welcome-feature"
              whileHover={{ scale: 1.05, x: 10 }}
              style={{ borderColor: themeColors.primary }}
            >
              <FaTh style={{ color: themeColors.primary }} />
              <div>
                <h4>3 Layout Styles</h4>
                <p>Switch between different layouts</p>
              </div>
            </motion.div>

            <motion.div
              className="welcome-feature"
              whileHover={{ scale: 1.05, x: 10 }}
              style={{ borderColor: themeColors.primary }}
            >
              <FaLayerGroup style={{ color: themeColors.primary }} />
              <div>
                <h4>7 Overlay Effects</h4>
                <p>Add futuristic visual effects</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.button
            className="welcome-button"
            onClick={closeWelcomeOverlay}
            style={{
              backgroundColor: themeColors.primary,
              color: themeColors.text,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Let's Explore!
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WelcomeOverlay;

