import React from 'react';
import numbersUtil from '../utils/numbersUtil';
import '../styles/style.css';

const numbersReplaced = numbersUtil.join(', ');
const Message: React.FC = () => {
  return (
    <div className="showNumbers">
      <p>{numbersReplaced}</p>
    </div>
  );
}

export default Message;