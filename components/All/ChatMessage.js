// ChatMessage.js
'use client';
import React, { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Smile } from "lucide-react"

const EMOJI_OPTIONS = ['👍', '❤️', '😂', '🎉', '🤔', '😢', '🔥', '🚀', '✅', '⭐'];

const ChatMessage = ({ message, user, timestamp, onAddReaction }) => {
  const [showEmoji, setShowEmoji] = useState(false);

  const handleEmojiSelect = (emoji) => {
    onAddReaction(message.id, emoji);
  };

  return (
    <div 
      className="group relative flex flex-col py-3 hover:bg-[#F8F8F8] transition-colors"
      onMouseEnter={() => setShowEmoji(true)}
      onMouseLeave={() => setShowEmoji(false)}
    >
      <div className="flex items-start space-x-4 px-6">
        <Avatar className="h-14 w-14 rounded-sm">
          <AvatarImage src={user.avatar} alt={user.name} className="rounded-sm" />
          <AvatarFallback className={`${user.bgColor} text-white text-xl font-medium rounded-sm`}>
            {user.name.split(' ').map(n => n[0]).join('')}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-3 mb-1">
            <span className="font-bold text-xl">{user.name}</span>
            <span className="text-base text-muted-foreground">{timestamp}</span>
          </div>
          
          <div className="space-y-1">
            {message.content.split('\n').map((line, i) => (
              <p key={i} className="text-xl text-[#1D1C1D] leading-normal">{line}</p>
            ))}
          </div>
          
          {Object.keys(message.reactions).length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {Object.entries(message.reactions).map(([emoji, count]) => (
                <button
                  key={emoji}
                  onClick={() => handleEmojiSelect(emoji)}
                  className="flex items-center space-x-1.5 bg-accent/40 rounded-full px-3 py-1.5 hover:bg-accent/60"
                >
                  <span className="text-lg">{emoji}</span>
                  <span className="text-sm text-muted-foreground">{count}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Emoji Selector */}
      {showEmoji && (
        <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg border p-2 z-10">
          <div className="flex items-center space-x-2">
            {EMOJI_OPTIONS.map((emoji) => (
              <button
                key={emoji}
                onClick={() => handleEmojiSelect(emoji)}
                className="p-2 text-xl hover:bg-accent rounded-md"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
