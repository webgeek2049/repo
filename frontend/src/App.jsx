import React, { useEffect, useState } from "react";
import './index.scss';
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const headerElement = document.getElementById("header");
    if (headerElement) {
      const height = headerElement.offsetHeight;
      setHeaderHeight(height);
      document.documentElement.style.setProperty('--header-height', `${height}px`);
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
