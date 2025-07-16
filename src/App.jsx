import React, { useState, useEffect } from 'react';
import Preloader from './pages/Preloader';
import Portfolio from './pages/Portfolio';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onFinish={() => setIsLoading(false)} />
      ) : (
        <Portfolio />
      )}
    </>
  );
}

export default App;
