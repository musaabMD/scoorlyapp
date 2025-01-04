'use client'
import { useState } from 'react'
import MCQCard from '@/components/MCQCard'
import ExplanationCard from '@/components/ExplanationCard'
import FeedbackForm from '@/components/FeedbackForm'

export default function StudyTab() {
  const [mcqData, setMcqData] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
      explanation: "Paris is the capital and most populous city of France. It is located on the Seine River in northern central France and has been a major European city for centuries.",
      category: "Geography",
      tag: "Capitals",
      isAnswered: false,
      selectedAnswer: null,
      isHighlighted: false,
      isBookmarked: false,
      isExplanationBookmarked: false,
      highlightCount: 0
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      explanation: "Mars is often called the Red Planet due to its reddish appearance in the night sky, which is caused by iron oxide (rust) on its surface.",
      category: "Astronomy",
      tag: "Planets",
      isAnswered: false,
      selectedAnswer: null,
      isHighlighted: false,
      isBookmarked: false,
      isExplanationBookmarked: false,
      highlightCount: 0
    }
  ])

  const [showFeedbackForm, setShowFeedbackForm] = useState(false)
  const [currentFeedbackQuestion, setCurrentFeedbackQuestion] = useState(null)

  const handleAnswerSelect = (id, answer) => {
    setMcqData(prevData => prevData.map(q =>
      q.id === id ? { ...q, isAnswered: answer !== null, selectedAnswer: answer } : q
    ))
  }

  const handleHighlight = (id) => {
    setMcqData(prevData => prevData.map(q =>
      q.id === id
        ? { ...q, isHighlighted: !q.isHighlighted, highlightCount: q.highlightCount + (q.isHighlighted ? -1 : 1) }
        : q
    ))
  }

  const handleBookmark = (id, isExplanation = false) => {
    setMcqData(prevData => prevData.map(q =>
      q.id === id
        ? isExplanation
          ? { ...q, isExplanationBookmarked: !q.isExplanationBookmarked }
          : { ...q, isBookmarked: !q.isBookmarked }
        : q
    ))
  }

  const handleFeedback = (id, isExplanation = false) => {
    setCurrentFeedbackQuestion({ id, isExplanation })
    setShowFeedbackForm(true)
  }

  return (
    <div className="w-[150%] -ml-[25%] p-6">
      <div className="space-y-8">
        {mcqData.map((data) => (
          <div key={data.id} className="mb-8">
            <MCQCard
              {...data}
              onAnswerSelect={(answer) => handleAnswerSelect(data.id, answer)}
              onHighlight={() => handleHighlight(data.id)}
              onBookmark={() => handleBookmark(data.id)}
              onFeedback={() => handleFeedback(data.id)}
            />
            {data.isAnswered && (
              <ExplanationCard
                explanation={data.explanation}
                isBookmarked={data.isExplanationBookmarked}
                onBookmark={() => handleBookmark(data.id, true)}
                onFeedback={() => handleFeedback(data.id, true)}
              />
            )}
          </div>
        ))}
      </div>
      {showFeedbackForm && (
        <FeedbackForm
          onClose={() => {
            setShowFeedbackForm(false)
            setCurrentFeedbackQuestion(null)
          }}
          questionId={currentFeedbackQuestion?.id}
          isExplanation={currentFeedbackQuestion?.isExplanation}
        />
      )}
    </div>
  )
}