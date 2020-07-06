import React from 'react';
import './App.css';
import Home from './component/Home';
import Header from './component/Home/Header'



function App() {
  return (
  
        <div className="App">
          <Header logo={Navbar}/>
            <Home heading="User Dashboard"/>
        </div>
    
  );
}

export default App;
