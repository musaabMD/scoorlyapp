'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import { 
  BookOpen, 
  FileText, 
  CreditCardIcon as Card, 
  Layers, 
  Lightbulb, 
  HelpCircle, 
  MessageCircle, 
  Bookmark, 
  File, 
  Calendar, 
  ClipboardList,
  BarChart 
} from 'lucide-react'

// Import all view components
import Notes from '@/components/Content/Notes'
import Analytics from '@/components/Content/Analytics'
import Files from '@/components/Content/Files'
import Flashcards from '@/components/Content/Flashcards'
import StudyPlans from '@/components/Content/StudyPlans'
import Tips from '@/components/Content/Tips'
import Topics from '@/components/Content/Topics'
import Polls from '@/components/Content/Polls'
import Experience from '@/components/Content/Experience'
import MCQs from '@/components/Content/MCQs'

const views = [
  { name: "Question", icon: BookOpen, component: MCQs },
  { name: "Note", icon: FileText, component: Notes },
  { name: "Flashcard", icon: Card, component: Flashcards },
  { name: "Topic", icon: Layers, component: Topics },
  { name: "Tips", icon: Lightbulb, component: Tips },
  { name: "FAQ", icon: HelpCircle },
  { name: "Chat", icon: MessageCircle },
  { name: "Saved", icon: Bookmark },
  { name: "File", icon: File, component: Files },
  { name: "Study Plan", icon: Calendar, component: StudyPlans },
  { name: "Experience", icon: ClipboardList, component: Experience },
  { name: "Analytics", icon: BarChart, component: Analytics },
  { name: "Polls", icon: MessageCircle, component: Polls }
]

export default function ContentHero() {
  const [activeView, setActiveView] = useState(views[0].name)
  const [searchQuery, setSearchQuery] = useState('')

  const ActiveComponent = views.find(view => view.name === activeView)?.component

  return (
    <div className="w-full bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Your Learning Journey Starts Here
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-[800px]">
            Access comprehensive study materials, track your progress, and enhance your learning experience.
          </p>
          
          <div className="w-full max-w-lg mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search content..."
                className="pl-10 py-6 text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {views.map(({ name, icon: Icon }) => (
              <Button
                key={name}
                variant={activeView === name ? "default" : "outline"}
                onClick={() => setActiveView(name)}
                className="flex items-center gap-2 text-sm"
                size="lg"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{name}</span>
              </Button>
            ))}
          </div>

          <div className="w-full mt-8">
            {ActiveComponent ? (
              <ActiveComponent searchQuery={searchQuery} />
            ) : (
              <div className="p-8 bg-muted rounded-lg">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  {activeView} View
                </h2>
                <p className="text-lg">Content for {activeView} view is coming soon!</p>
                {searchQuery && (
                  <p className="mt-6 text-sm text-muted-foreground">
                    Searching for: {searchQuery}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}