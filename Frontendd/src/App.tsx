import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
// import Login from './components/Login';


function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Dashboard />
     {/* <Login /> */}
    
    </ThemeProvider>
  );
}

export default App;