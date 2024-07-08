import React from 'react';
import ChatItem from './ChatItem';
import Header from './Header';

const Sidebar = ({ chats, onChatSelect }) => {
  return (
    <div className="flex flex-col h-screen w-1/4 py-4 px-6 overflow-y-auto box-border text-decoration-solid whitespace-nowrap cursor-pointer text-[#00488F] list-none bg-white">
      <div className=' h-3 ' >

      <Header />
      </div>

      <div className="mt-4">
        {chats.map(chat => (
          <ChatItem 
            key={chat.id} 
            chat={chat} 
            onClick={() => onChatSelect(chat)} 
            className="mb-2 last:mb-0" 
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
