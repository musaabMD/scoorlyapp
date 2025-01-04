// 'use client'
// import React, { useState } from 'react'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Progress } from "@/components/ui/progress"
// import { Avatar } from "@/components/ui/avatar"
// import { Calendar, Book, Users, Trophy, BarChart } from 'lucide-react'
// import StudyChat from '@/components/Content/StudyChat'
// const StudyDashboard = () => {
//     const [activeUsers] = useState([
//       {
//         name: "Sarah Chen",
//         avatar: "https://i.pravatar.cc/150?u=sarah_chen",
//         examDate: "2024-05-15",
//         totalHours: 450,
//         lastSeen: "2 mins ago",
//         currentSubject: "Pathology",
//         country: "Canada"
//       },
//       {
//         name: "John Smith",
//         avatar: "https://i.pravatar.cc/150?u=john_smith",
//         examDate: "2024-04-20",
//         totalHours: 380,
//         lastSeen: "5 mins ago",
//         currentSubject: "Pharmacology",
//         country: "USA"
//       },
//       {
//         name: "Emma Davis",
//         avatar: "https://i.pravatar.cc/150?u=emma_davis",
//         examDate: "2024-06-10",
//         totalHours: 290,
//         lastSeen: "15 mins ago",
//         currentSubject: "Immunology",
//         country: "UK"
//       }
//     ])
  
//     const [studyStats] = useState({
//       pharmacology: { count: 23, total: 50 },
//       pathology: { count: 34, total: 80 },
//       immunology: { count: 18, total: 40 }
//     })
  
//     const [studyPlan] = useState({
//       totalHours: 500,
//       completedHours: 320,
//       daysLeft: 45,
//       examDate: '2024-03-01',
//       dailyStreak: 15
//     })
  
//     const progress = (studyPlan.completedHours / studyPlan.totalHours) * 100
  
//     return (
//       <div className="grid grid-cols-12 gap-4 h-[calc(100vh-4rem)]">
//         {/* Left Column - Progress Stats */}
//         <div className="col-span-12 lg:col-span-3 space-y-4 overflow-y-auto p-4">
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Calendar className="h-5 w-5" />
//                 Exam Countdown
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-3xl font-bold">{studyPlan.daysLeft} days</div>
//               <div className="text-sm text-gray-500">Until exam</div>
//             </CardContent>
//           </Card>
  
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Book className="h-5 w-5" />
//                 Study Progress
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <Progress value={progress} className="h-2 mb-2" />
//               <div className="text-sm text-gray-500">
//                 {studyPlan.completedHours} / {studyPlan.totalHours} hours completed
//               </div>
//             </CardContent>
//           </Card>
  
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Trophy className="h-5 w-5" />
//                 Study Streak
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="text-3xl font-bold">{studyPlan.dailyStreak}</div>
//               <div className="text-sm text-gray-500">Days streak</div>
//             </CardContent>
//           </Card>
  
//           <Card>
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <BarChart className="h-5 w-5" />
//                 Currently Studying
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {Object.entries(studyStats).map(([subject, data]) => (
//                   <div key={subject} className="space-y-2">
//                     <div className="flex justify-between items-center">
//                       <span className="capitalize">{subject}</span>
//                       <span className="text-sm text-gray-500">
//                         {data.count}/{data.total} students
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div
//                         className="bg-blue-600 h-2 rounded-full"
//                         style={{ width: `${(data.count / data.total) * 100}%` }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
  
//         {/* Middle Column - Chat */}
//         <div className="col-span-12 lg:col-span-6 h-full">
//           <StudyChat />
//         </div>
  
//         {/* Right Column - Active Users */}
//         <div className="col-span-12 lg:col-span-3 h-full overflow-y-auto p-4">
//           <Card className="h-full">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <Users className="h-5 w-5" />
//                 Active Students
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {activeUsers.map((user, index) => (
//                   <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50">
//                     <Avatar>
//                       <img 
//                         src={user.avatar} 
//                         alt={user.name} 
//                         className="rounded-full" 
//                       />
//                     </Avatar>
//                     <div className="flex-1">
//                       <div className="font-semibold">{user.name}</div>
//                       <div className="text-sm text-gray-500">
//                         Studying {user.currentSubject} • {user.country}
//                       </div>
//                       <div className="text-xs text-gray-400">
//                         Last seen {user.lastSeen}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     )
//   }
  'use client'
// components/Content/StudyDashboard.js
import React, { useState } from 'react'
import StudyChat from '@/components/Content/StudyChat'
import LeaderboardSidebar from '@/components/Content/LeaderboardSidebar'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Calendar, Book, Trophy, BarChart } from 'lucide-react'

const StudyDashboard = () => {
  const [studyStats] = useState({
    pharmacology: { count: 23, total: 50 },
    pathology: { count: 34, total: 80 },
    immunology: { count: 18, total: 40 }
  })

  const [studyPlan] = useState({
    totalHours: 500,
    completedHours: 320,
    daysLeft: 45,
    examDate: '2024-03-01',
    dailyStreak: 15
  })

  const progress = (studyPlan.completedHours / studyPlan.totalHours) * 100

  return (
    <div className="grid grid-cols-12 gap-4 h-[calc(100vh-4rem)]">
      {/* Left Column - Progress Stats */}
      <div className="col-span-12 lg:col-span-3 space-y-4 overflow-y-auto p-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Exam Countdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{studyPlan.daysLeft} days</div>
            <div className="text-sm text-gray-500">Until exam</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5" />
              Study Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="h-2 mb-2" />
            <div className="text-sm text-gray-500">
              {studyPlan.completedHours} / {studyPlan.totalHours} hours completed
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Study Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{studyPlan.dailyStreak}</div>
            <div className="text-sm text-gray-500">Days streak</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Currently Studying
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(studyStats).map(([subject, data]) => (
                <div key={subject} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="capitalize">{subject}</span>
                    <span className="text-sm text-gray-500">
                      {data.count}/{data.total} students
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(data.count / data.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Middle Column - Chat */}
      <div className="col-span-12 lg:col-span-6 h-full">
        <StudyChat />
      </div>

      {/* Right Column - Active Users */}
      <div className="col-span-12 lg:col-span-3 h-full overflow-y-auto p-4">
        <LeaderboardSidebar />
      </div>
    </div>
  )
}

export default StudyDashboard