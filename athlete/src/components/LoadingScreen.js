// LoadingScreen.js
import React, { useState, useEffect } from 'react';
import './LoadingScreen.css'; // Import the CSS file

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + 3000; // 3 seconds duration

    const updateProgress = () => {
      const now = Date.now();
      const elapsedTime = now - startTime;
      const timeRemaining = Math.max(0, endTime - now);
      const progressValue = 100 - (timeRemaining / 3000) * 100; // Calculate progress

      setProgress(progressValue);

      if (elapsedTime < 3000) {
        requestAnimationFrame(updateProgress); // Update progress using requestAnimationFrame
      } else {
        setLoading(false);
      }
    };

    requestAnimationFrame(updateProgress); // Initial call to update progress

    return () => {
      setProgress(0); // Reset progress when component unmounts
    };
  }, []);

  return loading ? (
    <div className="loading-screen">
      <div className="loading-text">{`${Math.min(100, Math.round(progress))}%`}</div>
      <div className="loading-bar">
        <div className="loading-progress" style={{ width: `${Math.min(100, Math.round(progress))}%` }} />
      </div>
    </div>
  ) : null;
}

export default LoadingScreen;
