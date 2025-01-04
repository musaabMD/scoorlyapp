'use client'
// components/ActiveUsersSidebar.js
import React from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, Fire, Trophy, MapPin } from 'lucide-react'

const ActiveUsersSidebar = () => {
  const users = [
    {
      name: "Sarah Chen",
      avatar: "https://i.pravatar.cc/150?u=sarah_chen",
      subject: "Immunology",
      city: "Toronto",
      streak: 45,
      status: "online",
      points: 2850,
      rank: 1
    },
    {
      name: "John Smith",
      avatar: "https://i.pravatar.cc/150?u=john_smith",
      subject: "Pathology",
      city: "Boston",
      streak: 32,
      status: "online",
      points: 2340,
      rank: 2
    },
    {
      name: "Emma Davis",
      avatar: "https://i.pravatar.cc/150?u=emma_davis",
      subject: "Pharmacology",
      city: "London",
      streak: 28,
      status: "idle",
      points: 2100,
      rank: 3
    }
  ]

  const getSubjectColor = (subject) => {
    const colors = {
      Immunology: 'bg-purple-100 text-purple-700',
      Pathology: 'bg-blue-100 text-blue-700',
      Pharmacology: 'bg-green-100 text-green-700'
    }
    return colors[subject] || 'bg-gray-100 text-gray-700'
  }

  const getRankBadge = (rank) => {
    const badges = {
      1: '🥇',
      2: '🥈',
      3: '🥉'
    }
    return badges[rank] || rank
  }

  return (
    <Card className="h-full">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="font-semibold text-lg">Study Leaderboard</div>
          <div className="text-sm text-green-600">12 peers online</div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {users.map((user, index) => (
            <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4">
                {/* Rank & Avatar */}
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold w-6">{getRankBadge(user.rank)}</span>
                  <div className="relative">
                    <Avatar className="h-14 w-14">
                      <img src={user.avatar} alt={user.name} className="rounded-full" />
                    </Avatar>
                    <div className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                      user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                    }`} />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-base">{user.name}</div>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getSubjectColor(user.subject)}`}>
                      {user.subject}
                    </span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {user.city}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1 text-orange-500">
                      <Fire className="h-4 w-4" />
                      <span>{user.streak} day streak</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-600">
                      <Trophy className="h-4 w-4" />
                      <span>{user.points} XP</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ActiveUsersSidebar