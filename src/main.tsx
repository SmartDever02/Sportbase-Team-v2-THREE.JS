import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

//@ts-ignore
import App from './App';

import './index.css';

const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: '/images/backImage1.png',
    data: {
      role: 'SPORTBASE',
      name: 'TEAM MEMBER',
      contact: [{}],
    },
  },
  // Back
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: '/images/backImage2.png',
    data: {
      role: 'Artist',
      name: 'Eonix',
    },
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: '/images/backImage3.png',
    data: {
      role: 'Advisor',
      name: 'Remco',
    },
  },
  // Left
  {
    position: [-1.9, 0, -0.1],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/images/backImage4.png',
    data: {
      role: 'Designer',
      name: 'Ayaz',
    },
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/images/backImage5.png',
    data: {
      role: 'Developer',
      name: 'James',
    },
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/images/backImage6.png',
    data: {
      role: 'L.Developer',
      name: 'Azuki',
    },
  },
  // Right
  {
    position: [1.95, 0, -0.1],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/images/backImage7.png',
    data: {
      role: 'Community',
      name: 'Rob',
    },
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/images/backImage8.png',
    data: {
      role: 'Marketing',
      name: 'Rom',
    },
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/images/backImage9.png',
    data: {
      role: 'CEO',
      name: 'Kanessa',
    },
  },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App images={images} />
    </Suspense>
  </React.StrictMode>
);
