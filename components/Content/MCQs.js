// MCQs.js
'use client'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'

export default function MCQs() {
  const [selected, setSelected] = useState("")
  const [isAnswered, setIsAnswered] = useState(false)
  const correctAnswer = "B"

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Practice Questions</h2>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">Question 1/20</span>
          <Button variant="outline">Skip</Button>
        </div>
      </div>
      
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>
            What is the time complexity of a binary search algorithm?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selected} onValueChange={setSelected}>
            <div className="space-y-4">
              {[
                { id: 'A', text: 'O(n)' },
                { id: 'B', text: 'O(log n)' },
                { id: 'C', text: 'O(n²)' },
                { id: 'D', text: 'O(n log n)' }
              ].map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={option.id} 
                    id={option.id}
                    disabled={isAnswered}
                  />
                  <Label htmlFor={option.id}>{option.text}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          {isAnswered && (
            <Alert className="mt-4" variant={selected === correctAnswer ? "default" : "destructive"}>
              <AlertDescription className="flex items-center gap-2">
                {selected === correctAnswer ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Correct! Binary search has O(log n) complexity as it halves the search space in each step.
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4" />
                    Incorrect. The correct answer is O(log n). Binary search repeatedly divides the search interval in half.
                  </>
                )}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="justify-between">
          <Button variant="outline">Previous</Button>
          <Button 
            onClick={() => setIsAnswered(true)}
            disabled={!selected || isAnswered}
          >
            Check Answer
          </Button>
          <Button>Next</Button>
        </CardFooter>
      </Card>
    </div>
  )
}