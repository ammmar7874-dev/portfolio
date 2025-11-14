import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import { SiFlutter, SiDart, SiTypescript, SiFirebase, SiMongodb } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { themeColors, currentLayout } = useTheme();

  const skills = [
    { name: 'React', icon: FaReact, level: 90 },
    { name: 'Flutter', icon: SiFlutter, level: 85 },
    { name: 'JavaScript', icon: FaJs, level: 90 },
    { name: 'TypeScript', icon: SiTypescript, level: 85 },
    { name: 'Dart', icon: SiDart, level: 80 },
    { name: 'HTML5', icon: FaHtml5, level: 95 },
    { name: 'CSS3', icon: FaCss3Alt, level: 90 },
    { name: 'Node.js', icon: FaNode, level: 75 },
    { name: 'Firebase', icon: SiFirebase, level: 80 },
    { name: 'MongoDB', icon: SiMongodb, level: 70 },
    { name: 'Git', icon: FaGitAlt, level: 85 },
    { name: 'Figma', icon: FaFigma, level: 75 },
  ];

  const getLayoutClass = () => {
    return `skills skills-${currentLayout}`;
  };

  return (
    <section id="skills" className={getLayoutClass()}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span style={{ color: themeColors.primary }}>Skills</span>
          </h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        {currentLayout === 'layout1' && (
          <motion.div
            className="skills-grid-layout1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                style={{
                  backgroundColor: themeColors.surface,
                  borderColor: themeColors.primary,
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="skill-icon" style={{ color: themeColors.primary }}>
                  <skill.icon />
                </div>
                <h4>{skill.name}</h4>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    style={{ backgroundColor: themeColors.primary }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="skill-level">{skill.level}%</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentLayout === 'layout2' && (
          <motion.div
            className="skills-grid-layout2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card-circular"
                style={{
                  backgroundColor: themeColors.surface,
                  borderColor: themeColors.primary + '40',
                }}
                whileHover={{ scale: 1.1, rotate: 5, borderColor: themeColors.primary }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, type: 'spring' }}
              >
                <div className="skill-icon-large" style={{ color: themeColors.primary }}>
                  <skill.icon />
                </div>
                <h4>{skill.name}</h4>
                <div
                  className="skill-percentage"
                  style={{ color: themeColors.primary }}
                >
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {currentLayout === 'layout3' && (
          <motion.div
            className="skills-list-layout3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-item"
                style={{
                  backgroundColor: themeColors.surface,
                  borderLeftColor: themeColors.primary,
                }}
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="skill-item-left">
                  <div className="skill-icon" style={{ color: themeColors.primary }}>
                    <skill.icon />
                  </div>
                  <h4>{skill.name}</h4>
                </div>
                <div className="skill-item-right">
                  <div className="skill-bar-container-horizontal">
                    <motion.div
                      className="skill-bar"
                      style={{ backgroundColor: themeColors.primary }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="skill-level" style={{ color: themeColors.primary }}>
                    {skill.level}%
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;

