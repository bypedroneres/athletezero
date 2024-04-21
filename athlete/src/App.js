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
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import TermsAndConditionsScreen from './screens/TermsAndConditions';
// import LoadingScreen from './components/LoadingScreen'; 

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* <LoadingScreen />  */}
      <div className="App">
        <Routes> 
          <Route path="/" element={<HomeScreen />} />
          <Route path="/mental" element={<MentalCoachingScreen />} />
          <Route path="/nutrition" element={<NutritionScreen />} />
          <Route path="/founder" element={<FounderScreen/>} />
          <Route path="/info" element={<InfoScreen/>} />
          <Route path="/contact" element={<ContactScreen/>} />
          <Route path="/ambassadors" element={<AmbassadorsScreen />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyScreen/>} />
          <Route path='/terms-and-conditions' element={<TermsAndConditionsScreen/>} />
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
