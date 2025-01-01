
// Flashcards.js
'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

export default function Flashcards() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Flashcards</h2>
      <div className="max-w-2xl mx-auto">
        <Card 
          className="h-64 cursor-pointer" 
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <CardContent className="flex items-center justify-center h-full p-6">
            <p className="text-lg text-center">
              {isFlipped ? "Definition goes here" : "Term goes here"}
            </p>
          </CardContent>
        </Card>
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline">Previous</Button>
          <Button>Next</Button>
        </div>
      </div>
    </div>
  )
}