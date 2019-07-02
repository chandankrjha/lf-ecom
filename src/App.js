import React from 'react';
import './App.scss';
import TopBar from './components/sections/TopBar';
import AppRouter from './routes/routes';


function App() {
  return (
      <div className="">
        <TopBar />
        <AppRouter />
      </div>
  );
}

export default App;
