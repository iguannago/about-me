import React from 'react';
import MainContent from './components/MainContent';
import './App.css';
import Footer from './components/Footer';
import ExpenseTracker from './components/ExpenseTracker';

const App: React.FC = () => {
  return (
    <div className='app-container'>
      <MainContent />
      <ExpenseTracker />
      <Footer />
    </div>
  );
};

export default App;
