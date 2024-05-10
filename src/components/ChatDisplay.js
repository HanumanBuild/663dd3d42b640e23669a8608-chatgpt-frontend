import React from 'react';

const ChatDisplay = ({ messages }) => {
  return (
    <div className="chat-display bg-gray-100 p-3 rounded-lg shadow">
      {messages.map((msg, index) => (
        <p key={index} className="text-left text-black">{msg}</p>
      ))}
    </div>
  );
};

export default ChatDisplay;