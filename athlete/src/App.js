import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';

import HomeScreen from './screens/HomeScreen'; 
import MentalCoachingScreen from './screens/MentalCoachingScreen';
import AmbassadorsScreen from './screens/AmbassadorsScreen';
import NutritionScreen from './screens/NutritionScreen';
import InfoScreen from './screens/InfoScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomeScreen />} />
          <Route path="/mental" element={<MentalCoachingScreen />} />
          <Route path="/nutrition" element={<NutritionScreen />} />
          <Route path="/info" element={<InfoScreen />} />
          <Route path="/ambassadors" element={<AmbassadorsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
