import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; 
import './App.css';

import HomeScreen from './screens/HomeScreen'; 
import MentalCoachingScreen from './screens/MentalCoachingScreen';
import AmbassadorsScreen from './screens/AmbassadorsScreen';
import NutritionScreen from './screens/NutritionScreen';
import FounderScreen from './screens/FounderScreen';
import ContactScreen from './screens/ContactScreen';
import InfoScreen from './screens/InfoScreen';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomeScreen />} />
          <Route path="/mental" element={<MentalCoachingScreen />} />
          <Route path="/nutrition" element={<NutritionScreen />} />
          <Route path="/founder" element={<FounderScreen/>} />
          <Route path="/info" element={<InfoScreen/>} />
          <Route path="/contact" element={<ContactScreen/>} />
          <Route path="/ambassadors" element={<AmbassadorsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

// Component to scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
