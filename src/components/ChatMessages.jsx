import React, { useEffect, useState } from 'react';
import patternImage from '../assets/pattern.svg';

const truncateUrl = (url) => {
  const maxLength = 30;
  if (url.length <= maxLength) return url;
  const domain = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
  return domain.length + 3 > maxLength
    ? `${domain.slice(0, maxLength - 3)}...`
    : `${domain}/...`;
};

const ChatMessages = ({ chatId }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
        const data = await response.json();
        if (data.status === "success") {
          setMessages(data.data);
        } else {
          setError('Failed to fetch messages');
        }
      } catch (err) {
        setError('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [chatId]);

  if (loading) return <div className="text-center">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  const renderMessage = (message) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parts = message.split(urlPattern);

    return parts.map((part, index) =>
      urlPattern.test(part) ? (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {truncateUrl(part)}
        </a>
      ) : (
        part
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg h-screen overflow-y-auto" style={{ backgroundImage: `url(${patternImage})` }}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 p-3 rounded shadow max-w-xs ${message.sender.name === 'BeyondChat' ? 'ml-auto bg-green-100' : 'mr-auto bg-white'}`}
        >
          <div className="text-gray-800 font-bold">{message.sender.name || 'Unknown'}</div>
          <div className="text-gray-600">{renderMessage(message.message)}</div>
          <div className="text-gray-400 text-xs text-right">
            {new Date(message.created_at).toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
