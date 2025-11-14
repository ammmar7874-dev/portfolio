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
                Based in Budapest, Hungary, I'm a full-stack developer specializing in Flutter mobile 
                applications and React web development. With over 3 years of experience in software 
                development, I've worked on diverse projects ranging from e-commerce platforms to 
                fintech applications, always focusing on creating intuitive and performant user experiences.
              </p>
              <p>
                My expertise spans across cross-platform mobile development with Flutter and modern 
                web applications using React. I'm passionate about clean code, best practices, and 
                staying current with the latest technologies. When I'm not coding, you'll find me 
                exploring Budapest's tech scene, contributing to open-source projects, or sharing 
                knowledge with the developer community.
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
                Based in Budapest, Hungary, I'm a full-stack developer specializing in Flutter mobile 
                applications and React web development. With over 3 years of experience, I've worked 
                on diverse projects from e-commerce platforms to fintech applications, always focusing 
                on creating intuitive and performant user experiences. I'm passionate about clean code, 
                best practices, and contributing to the vibrant tech community in Budapest.
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
                Based in Budapest, Hungary, I'm a full-stack developer specializing in Flutter mobile 
                applications and React web development. With over 3 years of experience in software 
                development, I've worked on diverse projects ranging from e-commerce platforms to 
                fintech applications, always focusing on creating intuitive and performant user experiences.
              </p>
              <p>
                My expertise spans across cross-platform mobile development with Flutter and modern 
                web applications using React. I'm passionate about clean code, best practices, and 
                staying current with the latest technologies. When I'm not coding, you'll find me 
                exploring Budapest's tech scene, contributing to open-source projects, or sharing 
                knowledge with the developer community.
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

