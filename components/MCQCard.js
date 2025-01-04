'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Bookmark, Star, CheckCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const MCQCard = ({ 
  id,
  question, 
  options, 
  correctAnswer, 
  category, 
  tag, 
  onAnswerSelect, 
  isAnswered,
  selectedAnswer,
  isHighlighted,
  onHighlight,
  onBookmark,
  isBookmarked,
  highlightCount,
  onFeedback
}) => {
  const handleAnswerClick = (answer) => {
    if (isAnswered && answer === selectedAnswer) {
      // Reset the answer if clicked again
      onAnswerSelect(null)
    } else {
      onAnswerSelect(answer)
    }
  }

  return (
    <Card className={`w-full max-w-2xl mx-auto mb-8`}>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="outline">QID: {id}</Badge>
          <Badge variant="secondary">{category}</Badge>
          <Badge variant="secondary">{tag}</Badge>
        </div>
        <h2 className="text-2xl font-bold">{question}</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswerClick(option)}
              variant="outline"
              className={`w-full justify-between items-center text-left ${
                isAnswered
                  ? option === correctAnswer
                    ? 'border-green-500 text-green-700 bg-green-100 hover:bg-green-200'
                    : 'border-red-500 text-red-700 bg-red-100 hover:bg-red-200'
                  : 'hover:bg-gray-100'
              }`}
            >
              <span>{option}</span>
              {isAnswered && option === selectedAnswer && (
                <CheckCircle className={option === correctAnswer ? "text-green-500" : "text-red-500"} />
              )}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={onFeedback}>
                  <AlertCircle className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Provide feedback</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={onHighlight}
                  className={isHighlighted ? 'bg-yellow-400 text-yellow-900' : ''}
                >
                  <Star className={`h-4 w-4 mr-2 ${isHighlighted ? 'fill-yellow-900' : ''}`} />
                  HY {highlightCount}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Highlight as important question</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button 
          variant="outline" 
          size="lg"
          onClick={onBookmark}
          className={`px-6 ${isBookmarked ? 'bg-blue-100 text-blue-700' : ''}`}
        >
          <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-blue-700' : ''}`} />
        </Button>
      </CardFooter>
    </Card>
  )
}

export default MCQCard

