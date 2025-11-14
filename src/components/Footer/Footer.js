import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const { themeColors } = useTheme();

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/hamzaarshad', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/hamza-arshad', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/hamzaarshad_dev', label: 'Twitter' },
    { icon: FaEnvelope, url: 'mailto:hamza.arshad.dev@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="footer" style={{ backgroundColor: themeColors.surface, borderTopColor: themeColors.primary }}>
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3 style={{ color: themeColors.primary }}>Hamza Arshad</h3>
            <p>Flutter & React Developer</p>
            <p>Budapest, Hungary</p>
            <p>Creating amazing digital experiences</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  style={{ color: themeColors.primary }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.label}
                >
                  <link.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>&copy; {new Date().getFullYear()} Hamza Arshad. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

