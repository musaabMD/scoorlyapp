'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Card } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { PhoneCall, Video, Pin, MoreVertical } from 'lucide-react'
import ChatFooter from '@/components/All/ChatFooter'

const StudyChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      content: "Hi everyone! I have launched a new pathology study group today. It's a comprehensive review covering all major systems. I was wondering if anyone would like to join our daily sessions? We'll be using Anki flashcards and practice questions! Thank you so much, here's the link to our schedule: https://study.group/pathology",
      user: {
        name: "Sarah Chen",
        avatar: "https://i.pravatar.cc/150?u=sarah_chen",
        title: "Medical Student"
      },
      isCurrentUser: false,
      timestamp: "11:39 AM"
    },
    {
      id: 2,
      content: "This sounds great! I've been looking for a structured study group. Would love to join and contribute my question bank.",
      user: {
        name: "John Smith",
        avatar: "https://i.pravatar.cc/150?u=john_smith",
        title: "Medical Student"
      },
      isCurrentUser: true,
      timestamp: "11:45 AM"
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const message = {
      id: messages.length + 1,
      content: newMessage,
      user: {
        name: "You",
        avatar: "https://i.pravatar.cc/150?u=current_user",
        title: "Medical Student"
      },
      isCurrentUser: true,
      timestamp: new Date().toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      })
    }

    setMessages([...messages, message])
    setNewMessage('')
  }

  return (
    <Card className="w-full h-full flex flex-col bg-white rounded-lg shadow-lg">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <img
                src="https://i.pravatar.cc/150?u=study_group"
                alt="Study Group"
                className="rounded-full"
              />
            </Avatar>
            <div>
              <div className="font-bold text-lg">USMLE Study Group</div>
              <div className="text-sm text-gray-500">24 members • General Discussion</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon">
              <PhoneCall className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Pin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="py-6 space-y-8">
          {messages.map((message) => (
            <div key={message.id} className="group flex items-start gap-4">
              <Avatar className="h-10 w-10 mt-1">
                <img
                  src={message.user.avatar}
                  alt={message.user.name}
                  className="rounded-full"
                />
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-lg">{message.user.name}</span>
                  <span className="text-sm text-gray-500">{message.timestamp}</span>
                </div>
                <div className="mt-1 text-[15px] leading-relaxed text-gray-900 whitespace-pre-wrap">
                  {message.content}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Chat Input - No Border */}
      <div className="px-4 pt-2 pb-4">
        <ChatFooter 
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
        />
      </div>
    </Card>
  )
}

export default StudyChat