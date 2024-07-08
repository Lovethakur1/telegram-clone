// src/App.js
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import { fetchChats } from './services/api';
import './App.css';

const App = () => {
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const getChats = async () => {
      const chatData = await fetchChats();
      setChats(chatData.data);
    };

    getChats();
  }, []);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  return (
    <div className="flex h-screen">
      <Sidebar chats={chats} onChatSelect={setSelectedChat} />
      <div className="flex-grow">
        {selectedChat ? (
          <ChatWindow chat={selectedChat} />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
           
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
