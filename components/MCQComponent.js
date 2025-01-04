'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const MCQComponent = ({ question, options, correctAnswer, explanation }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer)
    setShowExplanation(true)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="space-y-2">
        {options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={`w-full justify-start ${
              selectedAnswer === option
                ? option === correctAnswer
                  ? 'bg-green-500 hover:bg-green-600'
                  : 'bg-red-500 hover:bg-red-600'
                : ''
            }`}
          >
            {option}
          </Button>
        ))}
      </div>
      {showExplanation && (
        <Card className="mt-4">
          <CardContent className="pt-6">
            <p className="font-semibold mb-2">
              {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect.'}
            </p>
            <p>{explanation}</p>
            <p className="mt-2">
              Correct answer: <span className="font-semibold">{correctAnswer}</span>
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

export default MCQComponent

