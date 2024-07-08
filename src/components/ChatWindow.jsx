import React from 'react';
import ChatMessages from './ChatMessages';
import ChatBox from './chatBox/ChatBox';

const ChatWindow = ({ chat }) => {
  return (
    <div className="flex flex-col  h-screen">
      <div className="flex items-center p-4 bg-white text-black">
        <div className="flex items-center">
          <img
            src={`https://www.gravatar.com/avatar/${chat.creator.email}?d=identicon`}
            alt={chat.creator.name || 'User'}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-bold">{chat.creator.name || 'Anonymous'}</h2>
            <p className="text-gray-600 text-sm">last seen yesterday at 19:33</p>
          </div>
        </div>
        <div className="ml-auto flex space-x-2">
          <button className="px-3 py-1 rounded">
            <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="Call" className=" text-gray-600 h-5  w-5" />
          </button>
          <button className="px-3 py-1 rounded">
            <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="Video Call" className="text-gray-600 h-5 w-5" />
          </button>
          <button className="px-3 py-1 rounded">
            <img src="https://cdn-icons-png.flaticon.com/512/2311/2311524.png" alt="More" className=" text-gray-600 h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
        <ChatMessages chatId={chat.id} />
      </div>
      <ChatBox/>
    </div>
  );
};

export default ChatWindow;
