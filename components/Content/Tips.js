
// Tips.js
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export default function Tips() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Study Tips</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-500" />
              <CardTitle className="text-lg">Active Recall</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Test yourself frequently instead of passive re-reading...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}