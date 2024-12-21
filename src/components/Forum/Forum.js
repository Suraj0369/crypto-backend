// // src/Forum.js
// import React, { useState } from 'react';
// import './Forum.css';

// const Forum = () => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');

//   const handleInputChange = (e) => {
//     setNewMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newMessage.trim()) {
//       setMessages([...messages, newMessage]);
//       setNewMessage('');
//     }
//   };

//   return (
//     <div className="forum-container">
//       <h1>Community Forum</h1>
//       <div className="messages">
//         {messages.map((message, index) => (
//           <div key={index} className="message">
//             {message}
//           </div>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit} className="message-form">
//         <textarea
//           value={newMessage}
//           onChange={handleInputChange}
//           placeholder="Enter your message"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default Forum;


import React, { useState, useEffect } from 'react';
import './Forum.css';

const Forum = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('http://localhost:5000/messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      try {
        await fetch('http://localhost:5000/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: newMessage }),
        });
        fetchMessages(); // Refresh messages after adding a new one
        setNewMessage('');
      } catch (error) {
        console.error('Error adding message:', error);
      }
    }
  };

  return (
    <div className="forum-container">
      <h1>Community Forum</h1>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <textarea
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Enter your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Forum;
