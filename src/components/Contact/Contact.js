import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { themeColors, currentLayout } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'hamza.arshad.dev@gmail.com',
      link: 'mailto:hamza.arshad.dev@gmail.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+36 20 123 4567',
      link: 'tel:+36201234567',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Budapest, Hungary',
      link: null,
    },
  ];

  const getLayoutClass = () => {
    return `contact contact-${currentLayout}`;
  };

  return (
    <section id="contact" className={getLayoutClass()}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span style={{ color: themeColors.primary }}>Touch</span>
          </h2>
          <p className="section-subtitle">Let's work together</p>
        </motion.div>

        {currentLayout === 'layout1' && (
          <div className="contact-content-layout1">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Let's Connect</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your visions. Based in Budapest, Hungary, I'm available for 
                remote work and local collaborations. Feel free to reach out!
              </p>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-info-item"
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.primary,
                    }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="contact-icon" style={{ color: themeColors.primary }}>
                      <info.icon />
                    </div>
                    <div>
                      <h4>{info.label}</h4>
                      {info.link ? (
                        <a href={info.link} style={{ color: themeColors.textSecondary }}>
                          {info.value}
                        </a>
                      ) : (
                        <p>{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.form
              className="contact-form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                style={{
                  backgroundColor: themeColors.primary,
                  color: themeColors.text,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </motion.form>
          </div>
        )}

        {currentLayout === 'layout2' && (
          <div className="contact-content-layout2">
            <motion.form
              className="contact-form-center"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.primary,
                      color: themeColors.text,
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      backgroundColor: themeColors.surface,
                      borderColor: themeColors.primary,
                      color: themeColors.text,
                    }}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                style={{
                  backgroundColor: themeColors.primary,
                  color: themeColors.text,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </motion.form>
            <motion.div
              className="contact-info-grid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-card"
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
                  <div className="contact-icon-large" style={{ color: themeColors.primary }}>
                    <info.icon />
                  </div>
                  <h4>{info.label}</h4>
                  {info.link ? (
                    <a href={info.link} style={{ color: themeColors.textSecondary }}>
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {currentLayout === 'layout3' && (
          <div className="contact-content-layout3">
            <motion.div
              className="contact-info-horizontal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item-horizontal"
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                  }}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="contact-icon" style={{ color: themeColors.primary }}>
                    <info.icon />
                  </div>
                  <div>
                    <h4>{info.label}</h4>
                    {info.link ? (
                      <a href={info.link} style={{ color: themeColors.textSecondary }}>
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.form
              className="contact-form-full"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: themeColors.surface,
                    borderColor: themeColors.primary,
                    color: themeColors.text,
                  }}
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="submit-btn"
                style={{
                  backgroundColor: themeColors.primary,
                  color: themeColors.text,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane /> Send Message
              </motion.button>
            </motion.form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

