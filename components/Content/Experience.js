
// Experience.js
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Calendar, Trophy } from "lucide-react"

export default function Experience() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Exam Experiences</h2>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>AWS Solutions Architect</CardTitle>
                <div className="flex gap-2 mt-2">
                  <Badge>Passed</Badge>
                  <Badge variant="outline">Score: 850/1000</Badge>
                </div>
              </div>
              <Trophy className="h-6 w-6 text-yellow-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Prep Time: 3 months (2-3 hours/day)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>Sources: Official AWS Documentation, A Cloud Guru, Practice Tests</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Exam Date: March 15, 2024</span>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Tips:</h4>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Focus on hands-on labs</li>
                  <li>Practice with real scenarios</li>
                  <li>Review white papers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
