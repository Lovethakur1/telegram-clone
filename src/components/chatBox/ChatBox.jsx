import React from 'react';
import styled from 'styled-components';

const ChatBoxContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 128, 0, 0.1); /* Semi-transparent green */
  border-radius: 25px;
  padding: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 10px;
  font-size: 16px;
  color: #000;
`;

const Icon = styled.div`
  margin: 0 5px;
  cursor: pointer;
`;

const SendButton = styled.button`
  background-color: #0084ff; /* Blue color for the send button */
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ChatBox = () => {
  return (
    <ChatBoxContainer>
      <Icon>😊</Icon> {/* Smiley Icon */}
      <Input type="text" placeholder="Message" />
      <img src="https://cdn-icons-png.flaticon.com/512/8138/8138518.png" alt="" className='h-6 m-4' /> {/* Attachment Icon */}
      <SendButton>
        <span role="img" aria-label="send">🎤</span> {/* Microphone Icon */}
      </SendButton>
    </ChatBoxContainer>
  );
};

export default ChatBox;
