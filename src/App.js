import React, { useState, useEffect } from 'react';
import Preloader from "./Components/Preloader/Preloader";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import ErrorPage from './Components/ErrorPage/ErrorPage';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous process (e.g., fetching data)
    const fetchData = async () => {
      // Assuming your data fetching logic here
      // For example, setTimeout to simulate a delay
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  return (
    
    <Router>
      
      <div className="App">
        {loading ? (
          <Preloader />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* Add a generic catch-all route for 404 */}
              <Route path="*" element={<ErrorPage/>} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
