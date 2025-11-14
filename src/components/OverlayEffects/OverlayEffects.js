import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './OverlayEffects.css';

const OverlayEffects = () => {
  const { overlayData, themeColors } = useTheme();

  return (
    <div className={`overlay-container ${overlayData.class}`}>
      {/* Holographic Overlay */}
      {overlayData.class === 'overlay-holographic' && (
        <>
          <div className="holographic-grid" style={{ borderColor: themeColors.primary + '30' }}></div>
          <div className="holographic-scan" style={{ background: `linear-gradient(transparent, ${themeColors.primary}20, transparent)` }}></div>
        </>
      )}

      {/* Particles Overlay */}
      {overlayData.class === 'overlay-particles' && (
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                backgroundColor: themeColors.primary,
              }}
            />
          ))}
        </div>
      )}

      {/* Circuit Overlay */}
      {overlayData.class === 'overlay-circuit' && (
        <div className="circuit-overlay" style={{ borderColor: themeColors.primary + '40' }}>
          <svg className="circuit-svg" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 50 L 100 50 M 50 0 L 50 100"
                  stroke={themeColors.primary}
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle cx="50" cy="50" r="3" fill={themeColors.primary} opacity="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
          </svg>
        </div>
      )}

      {/* Matrix Overlay */}
      {overlayData.class === 'overlay-matrix' && (
        <div className="matrix-rain">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: `${(i * 100) / 20}%`,
                animationDelay: `${Math.random() * 2}s`,
                color: themeColors.primary,
              }}
            >
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j} className="matrix-char">
                  {String.fromCharCode(0x30a0 + Math.random() * 96)}
                </span>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Glitch Overlay */}
      {overlayData.class === 'overlay-glitch' && (
        <div className="glitch-overlay">
          <div className="glitch-line" style={{ backgroundColor: themeColors.primary + '20' }}></div>
          <div className="glitch-line" style={{ backgroundColor: themeColors.accent + '20' }}></div>
          <div className="glitch-line" style={{ backgroundColor: themeColors.secondary + '20' }}></div>
        </div>
      )}

      {/* Neural Overlay */}
      {overlayData.class === 'overlay-neural' && (
        <div className="neural-overlay">
          <svg className="neural-svg" viewBox="0 0 1000 1000">
            {Array.from({ length: 15 }).map((_, i) => {
              const x1 = Math.random() * 1000;
              const y1 = Math.random() * 1000;
              const x2 = Math.random() * 1000;
              const y2 = Math.random() * 1000;
              return (
                <g key={i}>
                  <circle cx={x1} cy={y1} r="5" fill={themeColors.primary} opacity="0.6">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur={`${2 + Math.random() * 2}s`} repeatCount="indefinite" />
                  </circle>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={themeColors.primary}
                    strokeWidth="1"
                    opacity="0.2"
                  >
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur={`${3 + Math.random() * 2}s`} repeatCount="indefinite" />
                  </line>
                </g>
              );
            })}
          </svg>
        </div>
      )}

      {/* Hexagon Overlay */}
      {overlayData.class === 'overlay-hexagon' && (
        <div className="hexagon-overlay">
          <svg className="hexagon-svg" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="hex-pattern" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon
                  points="50,0 100,25 100,75 50,100 0,75 0,25"
                  fill="none"
                  stroke={themeColors.primary}
                  strokeWidth="1"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex-pattern)" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default OverlayEffects;

