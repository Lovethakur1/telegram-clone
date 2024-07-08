// src/components/ChatItem.js
import React from 'react';

const ChatItem = ({ chat, onClick }) => {
  return (
    <div
      className="flex items-center px-4 py-3 hover:bg-gray-100 rounded-md cursor-pointer"
      onClick={onClick}
    >
      <div className="relative flex-shrink-0 h-12 w-12">
        <img
          src={`https://www.gravatar.com/avatar/${chat.creator.email}?d=identicon`}
          alt={chat.creator.name || 'User'}
          className="rounded-full"
        />
        </div>
      <div className="flex-1 ml-4 overflow-hidden">
        <div className="flex justify-between items-center">
          <span className="text-black font-medium">{chat.creator.name || 'Anonymous'}</span>
          <span className="text-gray-600 text-xs">{chat.lastMessageTime || '10:30 PM' }</span>
        </div>
        <div className="flex text-gray-400 text-sm gap-16">
            <span className="text-black font-medium">
              {chat.lastMessage || 'No messages yet'}
            </span>
            <span className="text-white text-xs rounded-full flex items-center bg-sky-500 ml-2 px-2">
              {chat.msg_count > 99 ? '99+' : chat.msg_count}
            </span>
          </div>

      </div>
    </div>
  );
};

export default ChatItem;
