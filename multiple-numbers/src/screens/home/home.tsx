import React from 'react';
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
