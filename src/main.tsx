import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { store } from './app/store';
import { Provider } from 'react-redux';

//@ts-ignore
import App from './App';

import './index.css';

const images = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    url: '/images/sportbase_team.webp',
    data: {
      role: 'SPORTBASE',
      name: 'TEAM',
      contact: [{}],
    },
  },
  // Back
  {
    position: [-0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: '/images/Artist_Eonx.webp',
    data: {
      role: 'Artist',
      name: 'Eonix',
    },
  },
  {
    position: [0.8, 0, -0.6],
    rotation: [0, 0, 0],
    url: '/images/Bussiness Advisor_Remco CFO.webp',
    data: {
      role: 'Advisor',
      name: 'Remco',
    },
  },
  // Left
  {
    position: [-1.9, 0, -0.1],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/images/Designer_Ayaz.webp',
    data: {
      role: 'Desginer',
      name: 'Ayaz',
    },
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/images/Front-end Developer_James.webp',
    data: {
      role: 'Developer',
      name: 'James',
    },
  },
  {
    position: [-2, 0, 2.75],
    rotation: [0, Math.PI / 2.5, 0],
    url: '/images/Developer_Jogoslav.webp',
    data: {
      role: 'L.Developer',
      name: 'Azuki',
    },
  },
  // Right
  {
    position: [1.95, 0, -0.1],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/images/Community_Rob.webp',
    data: {
      role: 'Community',
      name: 'Rob',
    },
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/images/Marketing_Rom.webp',
    data: {
      role: 'Marketing',
      name: 'Rom',
    },
  },
  {
    position: [2, 0, 2.75],
    rotation: [0, -Math.PI / 2.5, 0],
    url: '/images/CEO_Kanessa.webp',
    data: {
      role: 'CEO',
      name: 'Kanessa',
    },
  },
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path='/' element={<App images={images} />} /> */}
          <Route path='/team' element={<App images={images} />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
