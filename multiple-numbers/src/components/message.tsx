import React from 'react';
import numbersUtil from '../utils/numbersUtil';
import '../styles/style.css';

const Message: React.FC = () => {
  return (
    <div className= "showNumbers">
      {numbersUtil}
    </div>
  );
}

export default Message;