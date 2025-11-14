import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const { themeColors, currentLayout } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Mobile App',
      description: 'A full-featured e-commerce mobile application built with Flutter. Features include product catalog, shopping cart, payment integration, and user authentication.',
      tech: ['Flutter', 'Firebase', 'Dart', 'Stripe'],
      image: '🛍️',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Task Management Web App',
      description: 'A modern task management web application built with React. Features real-time collaboration, drag-and-drop functionality, and team workspaces.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: '📋',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media analytics dashboard with real-time data visualization. Built with React and modern charting libraries.',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      image: '📊',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Fitness Tracking App',
      description: 'A cross-platform fitness tracking application with workout plans, progress tracking, and social features. Built with Flutter for iOS and Android.',
      tech: ['Flutter', 'Firebase', 'Health API', 'Dart'],
      image: '💪',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Real Estate Platform',
      description: 'A modern real estate platform with property listings, virtual tours, and agent management. Built with React and integrated with mapping services.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Google Maps'],
      image: '🏠',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather forecast application with location-based forecasts, weather maps, and detailed analytics. Built with React and weather APIs.',
      tech: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
      image: '🌤️',
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  const getLayoutClass = () => {
    return `projects projects-${currentLayout}`;
  };

  return (
    <section id="projects" className={getLayoutClass()}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span style={{ color: themeColors.primary }}>Projects</span>
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        {currentLayout === 'layout1' && (
          <motion.div
            className="projects-grid-layout1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
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
                <div className="project-image" style={{ backgroundColor: themeColors.primary + '20' }}>
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag"
                        style={{
                          backgroundColor: themeColors.primary + '20',
                          color: themeColors.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ color: themeColors.primary }}
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ color: themeColors.primary }}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentLayout === 'layout2' && (
          <motion.div
            className="projects-masonry-layout2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card-masonry"
                style={{
                  backgroundColor: themeColors.surface,
                  borderColor: themeColors.primary,
                }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                <div className="project-image-large" style={{ background: themeColors.gradient }}>
                  <span className="project-emoji-large">{project.image}</span>
                </div>
                <div className="project-content-masonry">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag"
                        style={{
                          backgroundColor: themeColors.primary + '20',
                          color: themeColors.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      style={{
                        backgroundColor: themeColors.primary,
                        color: themeColors.text,
                      }}
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-btn"
                      style={{
                        backgroundColor: themeColors.secondary,
                        color: themeColors.text,
                      }}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentLayout === 'layout3' && (
          <motion.div
            className="projects-list-layout3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card-list"
                style={{
                  backgroundColor: themeColors.surface,
                  borderLeftColor: themeColors.primary,
                }}
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="project-image-side" style={{ backgroundColor: themeColors.primary + '20' }}>
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-content-list">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="tech-tag"
                        style={{
                          backgroundColor: themeColors.primary + '20',
                          color: themeColors.primary,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ color: themeColors.primary }}
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      style={{ color: themeColors.primary }}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

