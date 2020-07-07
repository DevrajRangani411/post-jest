import React from 'react';
import './App.css';
import Home from './component/Home';
import Header from './component/Header'



function App() {
  return (
  
        <div className="App">
          <Header logo='DEV'/>
            <Home heading="User Dashboard"/>
        </div>
    
  );
}

export default App;
