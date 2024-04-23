import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Import CSS for loading spinner

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the time as needed

    // Cleanup function
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="loading-screen" style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.5s ease' }}>
      <img src='/images/loading/logo.svg' alt='Phone' />
    </div>
  );
};

export default LoadingScreen;
