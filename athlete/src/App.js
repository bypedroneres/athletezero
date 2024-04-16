import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';

import HomeScreen from './screens/HomeScreen'; 
import MentalCoachingScreen from './screens/MentalCoachingScreen';
import AmbassadorsScreen from './screens/AmbassadorsScreen';
import NutritionScreen from './screens/NutritionScreen';
import FounderScreen from './screens/FounderScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomeScreen />} />
          <Route path="/mental" element={<MentalCoachingScreen />} />
          <Route path="/nutrition" element={<NutritionScreen />} />
          <Route path="/founder" element={<FounderScreen/>} />
          <Route path="/ambassadors" element={<AmbassadorsScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
