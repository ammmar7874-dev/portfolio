import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaCode, FaMobile, FaRocket, FaAward } from 'react-icons/fa';
import './About.css';

const About = () => {
  const { themeColors, currentLayout } = useTheme();

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: FaMobile,
      title: 'Responsive Design',
      description: 'Creating applications that work seamlessly across all devices',
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: FaAward,
      title: 'Quality',
      description: 'Delivering high-quality solutions that exceed expectations',
    },
  ];

  const getLayoutClass = () => {
    return `about about-${currentLayout}`;
  };

  return (
    <section id="about" className={getLayoutClass()}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span style={{ color: themeColors.primary }}>Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        {currentLayout === 'layout1' && (
          <div className="about-content-layout1">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>I'm Hamza Arshad, a passionate Flutter & React Developer</h3>
              <p>
                With expertise in both mobile and web development, I specialize in creating
                beautiful, functional, and user-friendly applications. My journey in software
                development has been driven by a passion for solving complex problems and
                delivering exceptional user experiences.
              </p>
              <p>
                I stay up-to-date with the latest technologies and best practices, ensuring
                that every project I work on is built with modern tools and methodologies.
                Whether it's a mobile app or a web application, I bring creativity and
                technical excellence to every project.
              </p>
            </motion.div>
            <motion.div
              className="about-features"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="feature-icon"
                    style={{ color: themeColors.primary }}
                  >
                    <feature.icon />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {currentLayout === 'layout2' && (
          <div className="about-content-layout2">
            <motion.div
              className="about-features-grid"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card-large"
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.03, y: -10 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="feature-icon-large"
                    style={{
                      backgroundColor: themeColors.primary,
                      color: themeColors.text,
                    }}
                  >
                    <feature.icon />
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="about-text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>I'm Hamza Arshad, a passionate Flutter & React Developer</h3>
              <p>
                With expertise in both mobile and web development, I specialize in creating
                beautiful, functional, and user-friendly applications. My journey in software
                development has been driven by a passion for solving complex problems and
                delivering exceptional user experiences.
              </p>
            </motion.div>
          </div>
        )}

        {currentLayout === 'layout3' && (
          <div className="about-content-layout3">
            <motion.div
              className="about-text-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>I'm Hamza Arshad, a passionate Flutter & React Developer</h3>
              <p>
                With expertise in both mobile and web development, I specialize in creating
                beautiful, functional, and user-friendly applications. My journey in software
                development has been driven by a passion for solving complex problems and
                delivering exceptional user experiences.
              </p>
              <p>
                I stay up-to-date with the latest technologies and best practices, ensuring
                that every project I work on is built with modern tools and methodologies.
                Whether it's a mobile app or a web application, I bring creativity and
                technical excellence to every project.
              </p>
            </motion.div>
            <motion.div
              className="about-features-horizontal"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card-horizontal"
                  style={{
                    backgroundColor: themeColors.surface,
                    borderLeftColor: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className="feature-icon"
                    style={{ color: themeColors.primary }}
                  >
                    <feature.icon />
                  </div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;

