export const overlays = {
  overlay1: {
    name: 'Holographic',
    description: 'Futuristic holographic grid effect',
    class: 'overlay-holographic',
    autoSelect: true, // Best one - auto selected
  },
  overlay2: {
    name: 'Particles',
    description: 'Floating particle system',
    class: 'overlay-particles',
    autoSelect: false,
  },
  overlay3: {
    name: 'Circuit',
    description: 'Electronic circuit board pattern',
    class: 'overlay-circuit',
    autoSelect: false,
  },
  overlay4: {
    name: 'Matrix',
    description: 'Matrix-style digital rain',
    class: 'overlay-matrix',
    autoSelect: false,
  },
  overlay5: {
    name: 'Glitch',
    description: 'Digital glitch effects',
    class: 'overlay-glitch',
    autoSelect: false,
  },
  overlay6: {
    name: 'Neural',
    description: 'Neural network connections',
    class: 'overlay-neural',
    autoSelect: false,
  },
  overlay7: {
    name: 'Hexagon',
    description: 'Hexagonal mesh pattern',
    class: 'overlay-hexagon',
    autoSelect: false,
  },
};

export const getOverlay = (overlayKey) => {
  return overlays[overlayKey] || overlays.overlay1;
};

export const getAutoSelectedOverlay = () => {
  const overlay = Object.keys(overlays).find(key => overlays[key].autoSelect);
  return overlay || 'overlay1';
};

