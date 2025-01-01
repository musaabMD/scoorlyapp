// Topics.js
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function Topics() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Learning Topics</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>Programming Basics</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Fundamental concepts of programming...
            </p>
            <Button variant="outline" className="w-full">
              <span>Start Learning</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}