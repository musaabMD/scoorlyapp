// components/chat/ChatInput.js
'use client';
import React from 'react';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const isMessageEmpty = !message.trim();

  return (
    <form onSubmit={handleSubmit} className="flex items-end space-x-3 p-4 border-t bg-background">
      <div className="flex-1">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="min-h-[80px] text-lg resize-none p-4"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
      </div>
      <Button 
        type="submit" 
        size="icon"
        className={`h-12 w-12 transition-colors duration-200 ${
          isMessageEmpty 
            ? 'bg-gray-200 hover:bg-gray-300 text-gray-600' 
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
        disabled={isMessageEmpty}
      >
        <Send className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default ChatInput;