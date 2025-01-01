// Polls.js
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState } from 'react'

export default function Polls() {
  const [selectedOption, setSelectedOption] = useState("")
  
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Community Polls</h2>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What topic should we cover next?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
              {["System Design", "Data Structures", "Algorithms", "Design Patterns"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            <div className="mt-4">
              <Button className="w-full">Vote</Button>
            </div>
            <div className="mt-4 space-y-2">
              {["System Design: 45%", "Data Structures: 25%", "Algorithms: 20%", "Design Patterns: 10%"].map((result) => (
                <div key={result} className="flex items-center gap-2">
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: result.split(": ")[1] }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-20">{result.split(": ")[1]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
