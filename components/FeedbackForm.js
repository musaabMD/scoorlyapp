'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ThumbsUp, Meh, ThumbsDown } from 'lucide-react'

const FeedbackForm = ({ onClose }) => {
  const [feedbackType, setFeedbackType] = useState('')
  const [feedbackText, setFeedbackText] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the feedback to your backend
    console.log({ feedbackType, feedbackText, rating })
    onClose()
  }

  return (
    <Card className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
      <CardHeader>
        <h3 className="text-lg font-semibold">Provide Feedback</h3>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <RadioGroup value={feedbackType} onValueChange={setFeedbackType} className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="typo" id="typo" />
              <Label htmlFor="typo">Typo</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="incorrect" id="incorrect" />
              <Label htmlFor="incorrect">Incorrect Information</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unclear" id="unclear" />
              <Label htmlFor="unclear">Unclear Question</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other</Label>
            </div>
          </RadioGroup>
          <Textarea
            placeholder="Provide additional details..."
            value={feedbackText}
            onChange={(e) => setFeedbackText(e.target.value)}
            className="mb-4"
          />
          <div className="mb-4">
            <Label className="mb-2 block">Rate this question:</Label>
            <div className="flex justify-between">
              <Button
                type="button"
                variant={rating === 'bad' ? 'default' : 'outline'}
                onClick={() => setRating('bad')}
              >
                <ThumbsDown className="h-5 w-5 mr-2" />
                Bad
              </Button>
              <Button
                type="button"
                variant={rating === 'ok' ? 'default' : 'outline'}
                onClick={() => setRating('ok')}
              >
                <Meh className="h-5 w-5 mr-2" />
                OK
              </Button>
              <Button
                type="button"
                variant={rating === 'good' ? 'default' : 'outline'}
                onClick={() => setRating('good')}
              >
                <ThumbsUp className="h-5 w-5 mr-2" />
                Good
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit Feedback</Button>
      </CardFooter>
    </Card>
  )
}

export default FeedbackForm

