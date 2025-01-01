
// StudyPlans.js
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"

export default function StudyPlans() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Study Plans</h2>
        <Button>Create New Plan</Button>
      </div>
      <div className="grid gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Data Structures & Algorithms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>4 weeks</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>2 hours/day</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}