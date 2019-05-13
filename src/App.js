import React from 'react';
import './App.scss';
import TopBar from './components/sections/TopBar';
import LeftPanel from './components/sections/LeftPanel';
import RightPanel from './components/sections/RightPanel'

function App() {
  return (
    <div className="">
      <TopBar />
      <div className="content-wrapper">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
