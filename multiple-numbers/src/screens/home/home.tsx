import React from 'react';
import logo from '../../assets/images/logo.svg';
import './home.css';
import Message from '../../components/message';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      <Message />
      </header>
    </div>
  );
}

export default App;
