import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function fetchMessages() {
      const { data, error } = await supabase.from('messages').select('*');
      if (error) {
        console.error('Error fetching messages:', error);
      } else {
        setMessages(data);
      }
    }

    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      {messages.length > 0 ? (
        messages.map((message) => (
          <div key={message.id}>
            <h3>{message.sender}</h3>
            <p>{message.content}</p>
          </div>
        ))
      ) : (
        <p>Loading messages...</p>
      )}
    </div>
  );
}

export default Messages;
