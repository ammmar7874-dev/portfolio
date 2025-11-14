import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../images/ppp.jpg';
import './Hero.css';

const Hero = () => {
  const { themeColors, currentLayout } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:ammar@example.com', label: 'Email' },
  ];

  const getLayoutClass = () => {
    return `hero hero-${currentLayout}`;
  };

  return (
    <section id="home" className={getLayoutClass()}>
      <div className="hero-background" style={{ background: themeColors.gradient }}></div>
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {currentLayout === 'layout1' && (
          <>
            <motion.div className="hero-content" variants={itemVariants}>
              <motion.div
                className="hero-badge"
                style={{ backgroundColor: themeColors.primary }}
                whileHover={{ scale: 1.05 }}
              >
                👋 Welcome to my Portfolio
              </motion.div>
              <motion.h1 className="hero-title" variants={itemVariants}>
                Hi, I'm <span style={{ color: themeColors.primary }}>Hamza Arshad</span>
              </motion.h1>
              <motion.h2 className="hero-subtitle" variants={itemVariants}>
                Flutter & React Developer
              </motion.h2>
              <motion.p className="hero-description" variants={itemVariants}>
                Crafting beautiful and functional mobile and web applications with modern technologies.
                Passionate about creating exceptional user experiences.
              </motion.p>
              <motion.div className="hero-buttons" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{
                    borderColor: themeColors.primary,
                    color: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
              <motion.div className="hero-social" variants={itemVariants}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      backgroundColor: themeColors.surface,
                      color: themeColors.primary,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            <motion.div className="hero-image" variants={itemVariants}>
              <div
                className="hero-avatar"
                style={{
                  boxShadow: `0 20px 60px ${themeColors.primary}40`,
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Hamza Arshad - Flutter & React Developer" 
                  className="avatar-image"
                />
                <div className="avatar-border" style={{ borderColor: themeColors.primary }}></div>
              </div>
            </motion.div>
          </>
        )}

        {currentLayout === 'layout2' && (
          <>
            <motion.div className="hero-image hero-image-left" variants={itemVariants}>
              <div
                className="hero-avatar"
                style={{
                  boxShadow: `0 20px 60px ${themeColors.primary}40`,
                }}
              >
                <img 
                  src={profileImage} 
                  alt="Hamza Arshad - Flutter & React Developer" 
                  className="avatar-image"
                />
                <div className="avatar-border" style={{ borderColor: themeColors.primary }}></div>
              </div>
            </motion.div>
            <motion.div className="hero-content hero-content-right" variants={itemVariants}>
              <motion.h1 className="hero-title" variants={itemVariants}>
                <span style={{ color: themeColors.primary }}>Hamza Arshad</span>
              </motion.h1>
              <motion.h2 className="hero-subtitle" variants={itemVariants}>
                Flutter & React Developer
              </motion.h2>
              <motion.p className="hero-description" variants={itemVariants}>
                Crafting beautiful and functional mobile and web applications with modern technologies.
                Passionate about creating exceptional user experiences.
              </motion.p>
              <motion.div className="hero-social" variants={itemVariants}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      backgroundColor: themeColors.primary,
                      color: themeColors.text,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>
              <motion.div className="hero-buttons" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{
                    borderColor: themeColors.primary,
                    color: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>
          </>
        )}

        {currentLayout === 'layout3' && (
          <>
            <motion.div className="hero-content hero-content-center" variants={itemVariants}>
              <motion.div className="hero-image-center" variants={itemVariants}>
                <div
                  className="hero-avatar"
                  style={{
                    boxShadow: `0 20px 60px ${themeColors.primary}40`,
                  }}
                >
                  <img 
                    src={profileImage} 
                    alt="Hamza Arshad - Flutter & React Developer" 
                    className="avatar-image"
                  />
                  <div className="avatar-border" style={{ borderColor: themeColors.primary }}></div>
                </div>
              </motion.div>
              <motion.h1 className="hero-title" variants={itemVariants}>
                Hi, I'm <span style={{ color: themeColors.primary }}>Hamza Arshad</span>
              </motion.h1>
              <motion.h2 className="hero-subtitle" variants={itemVariants}>
                Flutter & React Developer
              </motion.h2>
              <motion.p className="hero-description" variants={itemVariants}>
                Crafting beautiful and functional mobile and web applications with modern technologies.
                Passionate about creating exceptional user experiences.
              </motion.p>
              <motion.div className="hero-buttons" variants={itemVariants}>
                <motion.a
                  href="#projects"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{
                    borderColor: themeColors.primary,
                    color: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
              <motion.div className="hero-social" variants={itemVariants}>
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{
                      backgroundColor: themeColors.surface,
                      color: themeColors.primary,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={link.label}
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Hero;

