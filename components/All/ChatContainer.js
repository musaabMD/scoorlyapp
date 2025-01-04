
// components/chat/ChatContainer.js
'use client';
import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatContainer = () => {
    const [messages, setMessages] = React.useState([
      {
        id: 1,
        user: { 
          name: 'Musab R', 
          avatar: null,
          bgColor: 'bg-blue-500',
        },
        content: 'fdsf\nfdsf\nfdsfd\nfdsfds\nfdsfds',
        timestamp: '4:56 PM',
        reactions: {
          '✅': 1
        }
      },
      {
        id: 2,
        user: { 
          name: 'Musab R', 
          avatar: null,
          bgColor: 'bg-blue-500',
        },
        content: 'dfsf',
        timestamp: '5:22 PM',
        reactions: {
          '✅': 1,
          '⭐': 1
        }
      }
    ]);
  
    const handleAddReaction = (messageId, emoji) => {
      setMessages(messages.map(msg => {
        if (msg.id === messageId) {
          const updatedReactions = { ...msg.reactions };
          if (updatedReactions[emoji]) {
            updatedReactions[emoji]++;
          } else {
            updatedReactions[emoji] = 1;
          }
          return { ...msg, reactions: updatedReactions };
        }
        return msg;
      }));
    };
  
    const handleSendMessage = (content) => {
      const newMessage = {
        id: messages.length + 1,
        user: { 
          name: 'Musab R', 
          avatar: null,
          bgColor: 'bg-blue-500',
        },
        content,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        reactions: {}
      };
      setMessages([...messages, newMessage]);
    };
  
    return (
      <div className="flex flex-col h-[calc(100vh-4rem)]">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-1">
            {messages.map((msg) => (
              <ChatMessage 
                key={msg.id} 
                message={msg}
                user={msg.user}
                timestamp={msg.timestamp}
                onAddReaction={handleAddReaction}
              />
            ))}
          </div>
        </ScrollArea>
        <ChatInput onSend={handleSendMessage} />
      </div>
    );
  };
  
  export default ChatContainer;