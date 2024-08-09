import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ProductPage from './pages/ProductPage';
import CommunityPage from './pages/CommunityPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';

const AppContainer = styled.div`
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </AppContainer>
    </Router>
  );
};

export default App;
