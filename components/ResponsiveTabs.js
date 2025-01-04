// 'use client'
// import React from 'react'
// import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
// import { Book, MessageSquare, TrendingUp, Zap } from 'lucide-react'
// import { motion } from 'framer-motion'
// import StudyTab from '@/components/StudyTab'

// const tabItems = [
//   { 
//     id: 'study', 
//     label: 'Study', 
//     icon: Book, 
//     content: <StudyTab />
//   },
//   { 
//     id: 'chat', 
//     label: 'Chat', 
//     icon: MessageSquare, 
//     content: 'Chat content' 
//   },
//   { 
//     id: 'progress', 
//     label: 'Progress', 
//     icon: TrendingUp, 
//     content: 'Progress content' 
//   },
//   { 
//     id: 'upgrade', 
//     label: 'Upgrade', 
//     icon: Zap, 
//     content: 'Upgrade content' 
//   }
// ]

// export default function ResponsiveTabs() {
//   return (
//     <div className="w-full max-w-7xl mx-auto p-6">
//       <Tabs defaultValue="study" className="w-full">
//         <TabsList className="grid w-full grid-cols-4 h-auto gap-6 bg-muted/50 p-2">
//           {tabItems.map((tab) => (
//             <TabsTrigger
//               key={tab.id}
//               value={tab.id}
//               className="flex flex-col items-center gap-3 py-6 rounded-xl
//                 data-[state=active]:bg-black data-[state=active]:text-white
//                 data-[state=active]:shadow-xl hover:bg-stone-300 transition-all
//                 data-[state=active]:scale-105"
//             >
//               {React.createElement(tab.icon, {
//                 className: "w-7 h-7"
//               })}
//               <span className="text-base font-medium">{tab.label}</span>
//             </TabsTrigger>
//           ))}
//         </TabsList>
//         {tabItems.map((tab) => (
//           <TabsContent key={tab.id} value={tab.id} className="mt-8">
//             {tab.content}
//           </TabsContent>
//         ))}
//       </Tabs>
//     </div>
//   )
// }
'use client'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Book, MessageSquare, TrendingUp, Zap } from 'lucide-react'
import StudyTab from '@/components/StudyTab'

const tabItems = [
  { 
    id: 'study', 
    label: 'Study', 
    icon: Book,
    content: <StudyTab />
  },
  { 
    id: 'chat', 
    label: 'Chat', 
    icon: MessageSquare,
    content: 'Chat content' 
  },
  { 
    id: 'progress', 
    label: 'Progress', 
    icon: TrendingUp,
    content: 'Progress content' 
  },
  { 
    id: 'upgrade', 
    label: 'Upgrade', 
    icon: Zap,
    content: 'Upgrade content' 
  }
]

export default function ResponsiveTabs() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b">
        <div className="max-w-screen-2xl mx-auto">
          <Tabs defaultValue="study" className="w-full">
            <TabsList className="h-16 w-full justify-start gap-2 bg-transparent p-0">
              {tabItems.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center gap-2 px-4 h-full data-[state=active]:bg-transparent 
                    data-[state=active]:border-b-2 data-[state=active]:border-black 
                    rounded-none hover:bg-gray-50"
                >
                  {React.createElement(tab.icon, {
                    className: "w-5 h-5"
                  })}
                  <span className="font-medium">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </header>
      
      <main className="max-w-screen-2xl mx-auto py-8">
        {tabItems.find(tab => tab.id === 'study')?.content}
      </main>
    </div>
  )
}