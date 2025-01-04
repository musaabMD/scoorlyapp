'use client'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bold, Italic, Link as LinkIcon, Image, Smile, Send } from 'lucide-react'

const ChatFooter = ({ newMessage, setNewMessage, sendMessage }) => {
  return (
    <div className="p-4">
      {/* Text Formatting Options */}
      <div className="flex items-center gap-1 mb-2">
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Image className="h-4 w-4" />
        </Button>
      </div>

      {/* Message Input */}
      <div className="relative rounded-lg border bg-white">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Message #general"
          className="w-full min-h-[80px] p-4 pr-24 text-base rounded-lg resize-none focus:outline-none focus:ring-0 border-0"
          style={{ maxHeight: '50vh' }}
        />
        <div className="absolute right-3 bottom-3 flex items-center gap-2">
          <Button 
            type="button" 
            variant="ghost" 
            size="icon"
            className="h-8 w-8"
          >
            <Smile className="h-5 w-5 text-gray-500" />
          </Button>
          <Button 
            onClick={sendMessage}
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-gray-500 hover:text-blue-600"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="absolute bottom-2 left-4 text-xs text-gray-400">
          Press Shift + Enter for a new line
        </div>
      </div>
    </div>
  )
}

export default ChatFooter