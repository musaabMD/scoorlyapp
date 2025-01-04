// // // // // // "use client";

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { Plus } from 'lucide-react';
// // // // // // import { Button } from "@/components/ui/button";
// // // // // // import Hero from '@/components/Hero';
// // // // // // import SearchAndFilter from '@/components/SearchAndFilter';
// // // // // // import NoteCard from '@/components/NoteCard';

// // // // // // const themes = {
// // // // // //   white: {
// // // // // //     background: 'bg-white',
// // // // // //     hover: 'hover:bg-gray-50',
// // // // // //   },
// // // // // //   yellow: {
// // // // // //     background: 'bg-yellow-50',
// // // // // //     hover: 'hover:bg-yellow-100',
// // // // // //   },
// // // // // //   green: {
// // // // // //     background: 'bg-green-50',
// // // // // //     hover: 'hover:bg-green-100',
// // // // // //   },
// // // // // //   dark: {
// // // // // //     background: 'bg-gray-800',
// // // // // //     hover: 'hover:bg-gray-700',
// // // // // //     text: 'text-white',
// // // // // //     subtext: 'text-gray-300',
// // // // // //   }
// // // // // // };

// // // // // // const initialNotes = [
// // // // // //   {
// // // // // //     id: 1,
// // // // // //     title: "Meeting Notes",
// // // // // //     content: "Discuss Q4 planning with the team",
// // // // // //     tags: ["💼 work", "📅 planning"],
// // // // // //     isBookmarked: false,
// // // // // //     verifiedCount: 34,
// // // // // //     verifiedByUser: false,
// // // // // //     source: "https://example.com/notes/1",
// // // // // //     category: "Business",
// // // // // //     image: "/api/placeholder/400/200",
// // // // // //     isHighYield: true,
// // // // // //     upvotes: 45,
// // // // // //     downvotes: 5,
// // // // // //     userVote: null,
// // // // // //     author: {
// // // // // //       name: "Sarah Chen",
// // // // // //       avatar: "/api/placeholder/32/32",
// // // // // //       handle: "@schen"
// // // // // //     }
// // // // // //   }, {
// // // // // //     id: 1,
// // // // // //     title: "Meeting Notes",
// // // // // //     content: "Discuss Q4 planning with the team",
// // // // // //     tags: ["💼 work", "📅 planning"],
// // // // // //     isBookmarked: false,
// // // // // //     verifiedCount: 34,
// // // // // //     verifiedByUser: false,
// // // // // //     source: "https://example.com/notes/1",
// // // // // //     category: "Business",
// // // // // //     image: "/api/placeholder/400/200",
// // // // // //     isHighYield: true,
// // // // // //     upvotes: 45,
// // // // // //     downvotes: 5,
// // // // // //     userVote: null,
// // // // // //     author: {
// // // // // //       name: "Sarah Chen",
// // // // // //       avatar: "/api/placeholder/32/32",
// // // // // //       handle: "@schen"
// // // // // //     }
// // // // // //   }, {
// // // // // //     id: 1,
// // // // // //     title: "Meeting Notes",
// // // // // //     content: "Discuss Q4 planning with the team",
// // // // // //     tags: ["💼 work", "📅 planning"],
// // // // // //     isBookmarked: false,
// // // // // //     verifiedCount: 34,
// // // // // //     verifiedByUser: false,
// // // // // //     source: "https://example.com/notes/1",
// // // // // //     category: "USMLE",
// // // // // //     image: "/api/placeholder/400/200",
// // // // // //     isHighYield: true,
// // // // // //     upvotes: 45,
// // // // // //     downvotes: 5,
// // // // // //     userVote: null,
// // // // // //     author: {
// // // // // //       name: "Sarah Chen",
// // // // // //       avatar: "/api/placeholder/32/32",
// // // // // //       handle: "@schen"
// // // // // //     }
// // // // // //   }
// // // // // //   // Add more initial notes as needed
// // // // // // ];

// // // // // // export default function StickyNotesApp() {
// // // // // //   const [notes, setNotes] = useState(initialNotes);
// // // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // // //   const [selectedTags, setSelectedTags] = useState([]);
// // // // // //   const [allTags, setAllTags] = useState([]);
// // // // // //   const [globalTheme, setGlobalTheme] = useState('white');

// // // // // //   useEffect(() => {
// // // // // //     const tags = [...new Set(notes.flatMap(note => note.tags))];
// // // // // //     setAllTags(tags);
// // // // // //   }, [notes]);

// // // // // //   const filteredNotes = notes.filter(note => {
// // // // // //     const matchesSearch = 
// // // // // //       note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //       note.content.toLowerCase().includes(searchTerm.toLowerCase());
    
// // // // // //     const matchesTags = 
// // // // // //       selectedTags.length === 0 ||
// // // // // //       selectedTags.every(tag => note.tags.includes(tag));
    
// // // // // //     return matchesSearch && matchesTags;
// // // // // //   });

// // // // // //   const toggleVerified = (noteId) => {
// // // // // //     setNotes(prevNotes => prevNotes.map(note => {
// // // // // //       if (note.id === noteId) {
// // // // // //         return {
// // // // // //           ...note,
// // // // // //           verifiedByUser: !note.verifiedByUser,
// // // // // //           verifiedCount: note.verifiedByUser 
// // // // // //             ? note.verifiedCount - 1 
// // // // // //             : note.verifiedCount + 1
// // // // // //         };
// // // // // //       }
// // // // // //       return note;
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleVote = (noteId, voteType) => {
// // // // // //     setNotes(prevNotes => prevNotes.map(note => {
// // // // // //       if (note.id === noteId) {
// // // // // //         const isRemovingVote = note.userVote === voteType;
// // // // // //         return {
// // // // // //           ...note,
// // // // // //           upvotes: note.upvotes + (
// // // // // //             voteType === 'up' 
// // // // // //               ? (isRemovingVote ? -1 : 1) 
// // // // // //               : (note.userVote === 'up' ? -1 : 0)
// // // // // //           ),
// // // // // //           downvotes: note.downvotes + (
// // // // // //             voteType === 'down' 
// // // // // //               ? (isRemovingVote ? -1 : 1) 
// // // // // //               : (note.userVote === 'down' ? -1 : 0)
// // // // // //           ),
// // // // // //           userVote: isRemovingVote ? null : voteType
// // // // // //         };
// // // // // //       }
// // // // // //       return note;
// // // // // //     }));
// // // // // //   };

// // // // // //   const toggleBookmark = (noteId) => {
// // // // // //     setNotes(prevNotes => prevNotes.map(note => {
// // // // // //       if (note.id === noteId) {
// // // // // //         return {
// // // // // //           ...note,
// // // // // //           isBookmarked: !note.isBookmarked
// // // // // //         };
// // // // // //       }
// // // // // //       return note;
// // // // // //     }));
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-base-100">
// // // // // //       <Hero />
// // // // // //       <div className="max-w-6xl mx-auto px-6 pb-12"> {/* Increased from max-w-4xl to max-w-6xl, adjusted padding */}
// // // // // //         <SearchAndFilter
// // // // // //           searchTerm={searchTerm}
// // // // // //           setSearchTerm={setSearchTerm}
// // // // // //           selectedTags={selectedTags}
// // // // // //           setSelectedTags={setSelectedTags}
// // // // // //           allTags={allTags}
// // // // // //           globalTheme={globalTheme}
// // // // // //           setGlobalTheme={setGlobalTheme}
// // // // // //           themes={themes}
// // // // // //         />
// // // // // //         <div className="space-y-6"> {/* Increased gap between cards */}
// // // // // //           {filteredNotes.map(note => (
// // // // // //             <NoteCard
// // // // // //               key={note.id}
// // // // // //               note={note}
// // // // // //               globalTheme={globalTheme}
// // // // // //               themes={themes}
// // // // // //               toggleVerified={toggleVerified}
// // // // // //               handleVote={handleVote}
// // // // // //               toggleBookmark={toggleBookmark}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //         <Button className="fixed bottom-12 right-12 h-16 w-16 rounded-full shadow-xl text-xl"> {/* Increased button size */}
// // // // // //           <Plus className="h-8 w-8" /> {/* Increased icon size */}
// // // // // //         </Button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // 'use client'

// // // // // import { useState } from 'react'
// // // // // import MCQCard from '@/components/MCQCard'
// // // // // import ExplanationCard from '@/components/ExplanationCard'
// // // // // import FeedbackForm from '@/components/FeedbackForm'

// // // // // export default function Home() {
// // // // //   const [mcqData, setMcqData] = useState([
// // // // //     {
// // // // //       id: 1,
// // // // //       question: "What is the capital of France?",
// // // // //       options: ["London", "Berlin", "Paris", "Madrid"],
// // // // //       correctAnswer: "Paris",
// // // // //       explanation: "Paris is the capital and most populous city of France. It is located on the Seine River in northern central France and has been a major European city for centuries.",
// // // // //       category: "Geography",
// // // // //       tag: "Capitals",
// // // // //       isAnswered: false,
// // // // //       selectedAnswer: null,
// // // // //       isHighlighted: false,
// // // // //       isBookmarked: false,
// // // // //       isExplanationBookmarked: false,
// // // // //       highlightCount: 0
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       question: "Which planet is known as the Red Planet?",
// // // // //       options: ["Venus", "Mars", "Jupiter", "Saturn"],
// // // // //       correctAnswer: "Mars",
// // // // //       explanation: "Mars is often called the Red Planet due to its reddish appearance in the night sky, which is caused by iron oxide (rust) on its surface.",
// // // // //       category: "Astronomy",
// // // // //       tag: "Planets",
// // // // //       isAnswered: false,
// // // // //       selectedAnswer: null,
// // // // //       isHighlighted: false,
// // // // //       isBookmarked: false,
// // // // //       isExplanationBookmarked: false,
// // // // //       highlightCount: 0
// // // // //     }
// // // // //   ])

// // // // //   const [showFeedbackForm, setShowFeedbackForm] = useState(false)
// // // // //   const [currentFeedbackQuestion, setCurrentFeedbackQuestion] = useState(null)

// // // // //   const handleAnswerSelect = (id, answer) => {
// // // // //     setMcqData(prevData => prevData.map(q => 
// // // // //       q.id === id ? { ...q, isAnswered: answer !== null, selectedAnswer: answer } : q
// // // // //     ))
// // // // //   }

// // // // //   const handleHighlight = (id) => {
// // // // //     setMcqData(prevData => prevData.map(q => 
// // // // //       q.id === id 
// // // // //         ? { ...q, isHighlighted: !q.isHighlighted, highlightCount: q.highlightCount + (q.isHighlighted ? -1 : 1) } 
// // // // //         : q
// // // // //     ))
// // // // //   }

// // // // //   const handleBookmark = (id, isExplanation = false) => {
// // // // //     setMcqData(prevData => prevData.map(q => 
// // // // //       q.id === id 
// // // // //         ? isExplanation 
// // // // //           ? { ...q, isExplanationBookmarked: !q.isExplanationBookmarked }
// // // // //           : { ...q, isBookmarked: !q.isBookmarked }
// // // // //         : q
// // // // //     ))
// // // // //   }

// // // // //   const handleFeedback = (id, isExplanation = false) => {
// // // // //     setCurrentFeedbackQuestion({ id, isExplanation })
// // // // //     setShowFeedbackForm(true)
// // // // //   }

// // // // //   return (
// // // // //     <main className="min-h-screen p-8 bg-gray-100">
// // // // //       <div className="max-w-2xl mx-auto space-y-8">
// // // // //         {mcqData.map((data) => (
// // // // //           <div key={data.id}>
// // // // //             <MCQCard 
// // // // //               {...data}
// // // // //               onAnswerSelect={(answer) => handleAnswerSelect(data.id, answer)}
// // // // //               onHighlight={() => handleHighlight(data.id)}
// // // // //               onBookmark={() => handleBookmark(data.id)}
// // // // //               onFeedback={() => handleFeedback(data.id)}
// // // // //             />
// // // // //             {data.isAnswered && (
// // // // //               <ExplanationCard 
// // // // //                 explanation={data.explanation}
// // // // //                 isBookmarked={data.isExplanationBookmarked}
// // // // //                 onBookmark={() => handleBookmark(data.id, true)}
// // // // //                 onFeedback={() => handleFeedback(data.id, true)}
// // // // //               />
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //       {showFeedbackForm && (
// // // // //         <FeedbackForm 
// // // // //           onClose={() => {
// // // // //             setShowFeedbackForm(false)
// // // // //             setCurrentFeedbackQuestion(null)
// // // // //           }} 
// // // // //           questionId={currentFeedbackQuestion?.id}
// // // // //           isExplanation={currentFeedbackQuestion?.isExplanation}
// // // // //         />
// // // // //       )}
// // // // //     </main>
// // // // //   )
// // // // // }
// // // // "use client"
// // // // import React, { useState } from 'react';
// // // // import { Button } from "@/components/ui/button";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { ArrowLeft, ArrowRight } from "lucide-react";

// // // // const QuestionPage = () => {
// // // //   const [showExplanation, setShowExplanation] = useState(false);
// // // //   const [selectedAnswer, setSelectedAnswer] = useState(null);

// // // //   // Sample question data - in real app, this would come from your Supabase backend
// // // //   const questionData = {
// // // //     question: "What is the capital of France?",
// // // //     options: ["London", "Berlin", "Paris", "Madrid"],
// // // //     correctAnswer: "Paris",
// // // //     explanation: "Paris is the capital and largest city of France, situated on the river Seine."
// // // //   };

// // // //   const handleAnswerSelect = (answer) => {
// // // //     setSelectedAnswer(answer);
// // // //     setShowExplanation(true);
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen flex flex-col">
// // // //       {/* Fixed Header */}
// // // //       <header className="h-16 bg-background border-b flex items-center px-4 fixed top-0 w-full z-10">
// // // //         <div className="max-w-5xl w-full mx-auto flex justify-between items-center">
// // // //           <Button variant="ghost" size="icon">
// // // //             <ArrowLeft className="h-4 w-4" />
// // // //           </Button>
// // // //           <h1 className="text-lg font-semibold">Question 1/10</h1>
// // // //           <Button variant="ghost" size="icon">
// // // //             <ArrowRight className="h-4 w-4" />
// // // //           </Button>
// // // //         </div>
// // // //       </header>

// // // //       {/* Main Content - Scrollable */}
// // // //       <main className="flex-grow overflow-y-auto mt-16 mb-16 p-4">
// // // //         <div className="max-w-5xl mx-auto">
// // // //           <Card className="mb-6">
// // // //             <CardContent className="pt-6">
// // // //               <h2 className="text-xl font-semibold mb-4">{questionData.question}</h2>
// // // //               <div className="space-y-3">
// // // //                 {questionData.options.map((option) => (
// // // //                   <Button
// // // //                     key={option}
// // // //                     variant={selectedAnswer === option ? "default" : "outline"}
// // // //                     className="w-full justify-start text-left h-auto py-4 px-6"
// // // //                     onClick={() => handleAnswerSelect(option)}
// // // //                   >
// // // //                     {option}
// // // //                   </Button>
// // // //                 ))}
// // // //               </div>
// // // //             </CardContent>
// // // //           </Card>

// // // //           {/* Explanation Card */}
// // // //           {showExplanation && (
// // // //             <Card className="bg-muted">
// // // //               <CardContent className="pt-6">
// // // //                 <h3 className="font-semibold mb-2">Explanation</h3>
// // // //                 <p>{questionData.explanation}</p>
// // // //                 <div className="mt-4">
// // // //                   {selectedAnswer === questionData.correctAnswer ? (
// // // //                     <p className="text-green-600 font-medium">Correct answer! Well done!</p>
// // // //                   ) : (
// // // //                     <p className="text-red-600 font-medium">
// // // //                       Incorrect. The correct answer is {questionData.correctAnswer}.
// // // //                     </p>
// // // //                   )}
// // // //                 </div>
// // // //               </CardContent>
// // // //             </Card>
// // // //           )}
// // // //         </div>
// // // //       </main>

// // // //       {/* Fixed Footer */}
// // // //       <footer className="h-16 bg-background border-t flex items-center px-4 fixed bottom-0 w-full">
// // // //         <div className="max-w-5xl w-full mx-auto flex justify-between items-center">
// // // //           <Button variant="outline">
// // // //             Previous Question
// // // //           </Button>
// // // //           <Button>
// // // //             Next Question
// // // //           </Button>
// // // //         </div>
// // // //       </footer>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default QuestionPage;
// // // "use client"

// // // // import React, { useState } from 'react';
// // // // import { Progress } from "@/components/ui/progress";
// // // // import { Button } from "@/components/ui/button";
// // // // import { 
// // // //   DropdownMenu, 
// // // //   DropdownMenuContent, 
// // // //   DropdownMenuItem, 
// // // //   DropdownMenuTrigger 
// // // // } from "@/components/ui/dropdown-menu";
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { 
// // // //   BookmarkIcon, 
// // // //   ChevronLeft, 
// // // //   ChevronRight, 
// // // //   Flag, 
// // // //   PauseCircle, 
// // // //   Trophy 
// // // // } from "lucide-react";

// // // // // Sample questions data
// // // // const questions = [
// // // //   {
// // // //     id: 1,
// // // //     question: "What is the value of x in the equation 2x + 5 = 13?",
// // // //     options: ["x = 4", "x = 8", "x = 6", "x = 3"],
// // // //     correctAnswer: "x = 4"
// // // //   },
// // // //   {
// // // //     id: 2,
// // // //     question: "Solve for y: 3y - 7 = 14",
// // // //     options: ["y = 7", "y = 5", "y = 8", "y = 6"],
// // // //     correctAnswer: "y = 7"
// // // //   }
// // // // ];

// // // // const Preview = () => {
// // // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // // //   const [progress, setProgress] = useState(25);
// // // //   const [score, setScore] = useState(150);
// // // //   const [isBookmarked, setIsBookmarked] = useState(false);
// // // //   const [selectedAnswer, setSelectedAnswer] = useState(null);
// // // //   const [showFeedback, setShowFeedback] = useState(false);

// // // //   const currentQuestion = questions[currentQuestionIndex];

// // // //   const handleNext = () => {
// // // //     if (currentQuestionIndex < questions.length - 1) {
// // // //       setCurrentQuestionIndex(prev => prev + 1);
// // // //       setProgress(prev => Math.min(prev + 25, 100));
// // // //       setSelectedAnswer(null);
// // // //     }
// // // //   };

// // // //   const handleBack = () => {
// // // //     if (currentQuestionIndex > 0) {
// // // //       setCurrentQuestionIndex(prev => prev - 1);
// // // //       setProgress(prev => Math.max(prev - 25, 0));
// // // //       setSelectedAnswer(null);
// // // //     }
// // // //   };

// // // //   // Header Component
// // // //   const Header = () => (
// // // //     <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
// // // //       <div className="max-w-7xl mx-auto px-4">
// // // //         <div className="flex items-center justify-between h-14">
// // // //           <div className="flex items-center space-x-4">
// // // //             <h1 className="text-xl font-bold text-purple-600">Scoorly</h1>
// // // //             <div className="flex items-center space-x-2">
// // // //               <span className="text-gray-600">Mathematics</span>
// // // //               <span className="text-gray-400">|</span>
// // // //               <span className="text-gray-600">Algebra Basics</span>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="flex items-center space-x-3">
// // // //             <Trophy className="w-5 h-5 text-yellow-500" />
// // // //             <span className="font-semibold">{score} pts</span>
// // // //           </div>
// // // //         </div>
        
// // // //         <div className="h-2 w-full mb-1">
// // // //           <Progress value={progress} className="h-full" />
// // // //         </div>
        
// // // //         <div className="flex justify-between text-xs text-gray-500 pb-2">
// // // //           <span>{progress}% Complete</span>
// // // //           <span>{currentQuestionIndex + 1}/20 Questions</span>
// // // //         </div>
// // // //       </div>
// // // //     </header>
// // // //   );

// // // //   // Footer Component
// // // //   const Footer = () => (
// // // //     <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
// // // //       <div className="max-w-7xl mx-auto px-4 py-3">
// // // //         <div className="flex items-center justify-between">
// // // //           <div className="flex items-center space-x-2">
// // // //             <Button
// // // //               variant="ghost"
// // // //               size="icon"
// // // //               onClick={() => setIsBookmarked(!isBookmarked)}
// // // //               className={isBookmarked ? "text-yellow-500" : "text-gray-400"}
// // // //             >
// // // //               <BookmarkIcon className="h-5 w-5" fill={isBookmarked ? "currentColor" : "none"} />
// // // //             </Button>

// // // //             <DropdownMenu>
// // // //               <DropdownMenuTrigger asChild>
// // // //                 <Button variant="ghost" size="icon">
// // // //                   <Flag className="h-5 w-5 text-gray-400" />
// // // //                 </Button>
// // // //               </DropdownMenuTrigger>
// // // //               <DropdownMenuContent>
// // // //                 <DropdownMenuItem>Answer is incorrect</DropdownMenuItem>
// // // //                 <DropdownMenuItem>Question is unclear</DropdownMenuItem>
// // // //                 <DropdownMenuItem>Found a typo</DropdownMenuItem>
// // // //                 <DropdownMenuItem>Other issue</DropdownMenuItem>
// // // //               </DropdownMenuContent>
// // // //             </DropdownMenu>

// // // //             <Button
// // // //               variant="ghost"
// // // //               size="icon"
// // // //               className="text-gray-400"
// // // //             >
// // // //               <PauseCircle className="h-5 w-5" />
// // // //             </Button>
// // // //           </div>

// // // //           <div className="flex items-center space-x-3">
// // // //             <Button
// // // //               variant="outline"
// // // //               size="sm"
// // // //               onClick={handleBack}
// // // //               disabled={currentQuestionIndex === 0}
// // // //               className="flex items-center space-x-1"
// // // //             >
// // // //               <ChevronLeft className="h-4 w-4" />
// // // //               <span>Back</span>
// // // //             </Button>

// // // //             <Button
// // // //               variant="default"
// // // //               size="sm"
// // // //               onClick={handleNext}
// // // //               disabled={currentQuestionIndex === questions.length - 1}
// // // //               className="flex items-center space-x-1"
// // // //             >
// // // //               <span>Next</span>
// // // //               <ChevronRight className="h-4 w-4" />
// // // //             </Button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </footer>
// // // //   );

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-50">
// // // //       <Header />
      
// // // //       <main className="pt-24 pb-20 px-4">
// // // //         <Card className="max-w-2xl mx-auto">
// // // //           <CardContent className="p-6">
// // // //             <h2 className="text-xl font-semibold mb-6">
// // // //               {currentQuestion.question}
// // // //             </h2>
            
// // // //             <div className="space-y-3">
// // // //               {currentQuestion.options.map((option, index) => (
// // // //                 <Button
// // // //                   key={index}
// // // //                   variant={selectedAnswer === option 
// // // //                     ? option === currentQuestion.correctAnswer 
// // // //                       ? "success" 
// // // //                       : "destructive"
// // // //                     : "outline"
// // // //                   }
// // // //                   className="w-full justify-start text-left p-4 h-auto"
// // // //                   onClick={() => setSelectedAnswer(option)}
// // // //                   disabled={selectedAnswer !== null}
// // // //                 >
// // // //                   {option}
// // // //                 </Button>
// // // //               ))}
// // // //             </div>

// // // //             {selectedAnswer && (
// // // //               <div className="mt-6">
// // // //                 <div className={`p-4 mb-4 rounded-lg ${
// // // //                   selectedAnswer === currentQuestion.correctAnswer
// // // //                     ? "bg-green-100 text-green-800" 
// // // //                     : "bg-red-100 text-red-800"
// // // //                 }`}>
// // // //                   {selectedAnswer === currentQuestion.correctAnswer 
// // // //                     ? "Correct! Well done!" 
// // // //                     : `Incorrect. The correct answer is "${currentQuestion.correctAnswer}"`
// // // //                   }
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </CardContent>
// // // //         </Card>
// // // //       </main>
      
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Preview;
// // // // supabaseClient.js
// // // import { createClient } from '@supabase/supabase-js'

// // // const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
// // // const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// // // export const supabase = createClient(supabaseUrl, supabaseKey)

// // // // utils/date.js
// // // export const calculateDaysLeft = (examDate) => {
// // //   const today = new Date()
// // //   const exam = new Date(examDate)
// // //   const diffTime = Math.abs(exam - today)
// // //   return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
// // // }

// // // // components/StudyDashboard.js
// // // import React, { useState, useEffect } from 'react'
// // // import { supabase } from '../supabaseClient'
// // // import { calculateDaysLeft } from '../utils/date'
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Progress } from "@/components/ui/progress"
// // // import { Avatar } from "@/components/ui/avatar"
// // // import { Clock, Calendar, Book, Users, Trophy } from 'lucide-react'

// // // const StudyDashboard = () => {
// // //   const [currentUser, setCurrentUser] = useState(null)
// // //   const [activeUsers, setActiveUsers] = useState([])
// // //   const [studyStats, setStudyStats] = useState({})
// // //   const [studyPlan, setStudyPlan] = useState({
// // //     totalHours: 0,
// // //     completedHours: 0,
// // //     examDate: '',
// // //     dailyStreak: 0
// // //   })

// // //   useEffect(() => {
// // //     // Get current user
// // //     const getCurrentUser = async () => {
// // //       const { data: { user } } = await supabase.auth.getUser()
// // //       if (user) {
// // //         const { data } = await supabase
// // //           .from('users')
// // //           .select('*')
// // //           .eq('id', user.id)
// // //           .single()
// // //         setCurrentUser(data)
// // //       }
// // //     }
// // //     getCurrentUser()

// // //     // Subscribe to active users
// // //     const usersSubscription = supabase
// // //       .channel('active-users')
// // //       .on('presence', { event: 'sync' }, () => {
// // //         const presenceState = usersSubscription.presenceState()
// // //         setActiveUsers(Object.values(presenceState).flat())
// // //       })
// // //       .subscribe()

// // //     // Subscribe to study stats
// // //     const studyStatsSubscription = supabase
// // //       .from('study_sessions')
// // //       .select('subject, count')
// // //       .on('*', payload => {
// // //         setStudyStats(current => ({
// // //           ...current,
// // //           [payload.new.subject]: payload.new.count
// // //         }))
// // //       })
// // //       .subscribe()

// // //     return () => {
// // //       supabase.removeChannel(usersSubscription)
// // //       supabase.removeChannel(studyStatsSubscription)
// // //     }
// // //   }, [])

// // //   // Track study session
// // //   const startStudySession = async (subject) => {
// // //     const { data, error } = await supabase
// // //       .from('study_sessions')
// // //       .insert([
// // //         { 
// // //           user_id: currentUser.id,
// // //           subject,
// // //           start_time: new Date().toISOString()
// // //         }
// // //       ])
// // //     if (error) console.error('Error starting study session:', error)
// // //   }

// // //   // End study session
// // //   const endStudySession = async (sessionId) => {
// // //     const { data, error } = await supabase
// // //       .from('study_sessions')
// // //       .update({ end_time: new Date().toISOString() })
// // //       .eq('id', sessionId)
// // //     if (error) console.error('Error ending study session:', error)
// // //   }

// // //   // Update study plan
// // //   const updateStudyPlan = async (updates) => {
// // //     const { data, error } = await supabase
// // //       .from('study_plans')
// // //       .update(updates)
// // //       .eq('user_id', currentUser.id)
// // //     if (error) console.error('Error updating study plan:', error)
// // //     else setStudyPlan(current => ({ ...current, ...updates }))
// // //   }

// // //   const daysLeft = calculateDaysLeft(studyPlan.examDate)
// // //   const progress = (studyPlan.completedHours / studyPlan.totalHours) * 100

// // //   return (
// // //     <div className="max-w-7xl mx-auto p-4 space-y-6">
// // //       {/* Study Progress Cards */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // //         <Card>
// // //           <CardHeader>
// // //             <CardTitle className="flex items-center gap-2">
// // //               <Calendar className="h-5 w-5" />
// // //               Exam Countdown
// // //             </CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <div className="text-3xl font-bold">{daysLeft} days</div>
// // //             <div className="text-sm text-gray-500">Until exam</div>
// // //           </CardContent>
// // //         </Card>

// // //         <Card>
// // //           <CardHeader>
// // //             <CardTitle className="flex items-center gap-2">
// // //               <Book className="h-5 w-5" />
// // //               Study Progress
// // //             </CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <Progress value={progress} className="h-2 mb-2" />
// // //             <div className="text-sm text-gray-500">
// // //               {studyPlan.completedHours} / {studyPlan.totalHours} hours completed
// // //             </div>
// // //           </CardContent>
// // //         </Card>

// // //         <Card>
// // //           <CardHeader>
// // //             <CardTitle className="flex items-center gap-2">
// // //               <Trophy className="h-5 w-5" />
// // //               Study Streak
// // //             </CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <div className="text-3xl font-bold">{studyPlan.dailyStreak}</div>
// // //             <div className="text-sm text-gray-500">Days streak</div>
// // //           </CardContent>
// // //         </Card>
// // //       </div>

// // //       {/* Active Users Section */}
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Active Students</CardTitle>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <div className="space-y-4">
// // //             {activeUsers.map((user, index) => (
// // //               <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50">
// // //                 <Avatar>
// // //                   <img 
// // //                     src={user.avatar_url || "/api/placeholder/32/32"} 
// // //                     alt={user.name} 
// // //                     className="rounded-full" 
// // //                   />
// // //                 </Avatar>
// // //                 <div className="flex-1">
// // //                   <div className="font-semibold">{user.name}</div>
// // //                   <div className="text-sm text-gray-500">
// // //                     Studying {user.current_subject} • {user.country}
// // //                   </div>
// // //                 </div>
// // //                 <div className="text-right text-sm">
// // //                   <div>{user.total_study_hours} hours total</div>
// // //                   <div className="text-gray-500">
// // //                     {user.last_seen ? `Last seen ${user.last_seen}` : 'Online'}
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </CardContent>
// // //       </Card>

// // //       {/* Study Stats Section */}
// // //       <Card>
// // //         <CardHeader>
// // //           <CardTitle>Currently Studying</CardTitle>
// // //         </CardHeader>
// // //         <CardContent>
// // //           <div className="space-y-4">
// // //             {Object.entries(studyStats).map(([subject, count]) => (
// // //               <div key={subject} className="flex justify-between items-center">
// // //                 <div className="flex items-center gap-2">
// // //                   <Users className="h-5 w-5 text-blue-500" />
// // //                   <span className="capitalize">{subject}</span>
// // //                 </div>
// // //                 <div className="text-lg font-semibold">
// // //                   {count} studying
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   )
// // // }

// // // export default StudyDashboard

// // 'use client'
// // import React, { useState } from 'react'
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Progress } from "@/components/ui/progress"
// // import { Avatar } from "@/components/ui/avatar"
// // import { Clock, Calendar, Book, Users, Trophy } from 'lucide-react'

// // const StudyDashboard = () => {
// //   // Mock data
// //   const [activeUsers] = useState([
// //     {
// //       name: "Sarah Chen",
// //       avatar: "/api/placeholder/32/32",
// //       examDate: "2024-05-15",
// //       totalHours: 450,
// //       lastSeen: "2 mins ago",
// //       currentSubject: "Pathology",
// //       country: "Canada"
// //     },
// //     {
// //       name: "John Smith",
// //       avatar: "/api/placeholder/32/32",
// //       examDate: "2024-04-20",
// //       totalHours: 380,
// //       lastSeen: "5 mins ago",
// //       currentSubject: "Pharmacology",
// //       country: "USA"
// //     }
// //   ])

// //   const [studyStats] = useState({
// //     pharmacology: 23,
// //     pathology: 344,
// //     immunology: 23
// //   })

// //   const [studyPlan] = useState({
// //     totalHours: 500,
// //     completedHours: 320,
// //     daysLeft: 45,
// //     examDate: '2024-03-01',
// //     dailyStreak: 15
// //   })

// //   const progress = (studyPlan.completedHours / studyPlan.totalHours) * 100

// //   return (
// //     <div className="max-w-7xl mx-auto p-4 space-y-6">
// //       {/* Study Progress Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //         <Card>
// //           <CardHeader>
// //             <CardTitle className="flex items-center gap-2">
// //               <Calendar className="h-5 w-5" />
// //               Exam Countdown
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-bold">{studyPlan.daysLeft} days</div>
// //             <div className="text-sm text-gray-500">Until exam</div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader>
// //             <CardTitle className="flex items-center gap-2">
// //               <Book className="h-5 w-5" />
// //               Study Progress
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <Progress value={progress} className="h-2 mb-2" />
// //             <div className="text-sm text-gray-500">
// //               {studyPlan.completedHours} / {studyPlan.totalHours} hours completed
// //             </div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader>
// //             <CardTitle className="flex items-center gap-2">
// //               <Trophy className="h-5 w-5" />
// //               Study Streak
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="text-3xl font-bold">{studyPlan.dailyStreak}</div>
// //             <div className="text-sm text-gray-500">Days streak</div>
// //           </CardContent>
// //         </Card>
// //       </div>

// //       {/* Active Users Section */}
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Active Students</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             {activeUsers.map((user, index) => (
// //               <div key={index} className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-50">
// //                 <Avatar>
// //                   <img 
// //                     src={user.avatar} 
// //                     alt={user.name} 
// //                     className="rounded-full" 
// //                   />
// //                 </Avatar>
// //                 <div className="flex-1">
// //                   <div className="font-semibold">{user.name}</div>
// //                   <div className="text-sm text-gray-500">
// //                     Studying {user.currentSubject} • {user.country}
// //                   </div>
// //                 </div>
// //                 <div className="text-right text-sm">
// //                   <div>{user.totalHours} hours total</div>
// //                   <div className="text-gray-500">Last seen {user.lastSeen}</div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>

// //       {/* Study Stats Section */}
// //       <Card>
// //         <CardHeader>
// //           <CardTitle>Currently Studying</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="space-y-4">
// //             {Object.entries(studyStats).map(([subject, count]) => (
// //               <div key={subject} className="flex justify-between items-center">
// //                 <div className="flex items-center gap-2">
// //                   <Users className="h-5 w-5 text-blue-500" />
// //                   <span className="capitalize">{subject}</span>
// //                 </div>
// //                 <div className="text-lg font-semibold">
// //                   {count} studying
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   )
// // }

// // export default StudyDashboard
// 'use client'
// // app/page.js
// import Header from '@/components/All/Header'
// import StudyDashboard from '@/components/Content/StudyDashboard'

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <main className="pt-16">
//         <StudyDashboard />
//       </main>
//     </div>
//   )
// // }
// "use client"
// import React, { useState } from 'react';

// const LayoutPreview = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const Header = () => (
//     <header className="fixed top-0 w-full bg-white shadow-md z-50 h-16">
//       <nav className="container mx-auto px-4 h-full flex items-center justify-between">
//         <div className="text-xl font-bold text-blue-600">Your Logo</div>
//         <div className="hidden md:flex space-x-4">
//           <a href="#" className="hover:text-blue-600">Home</a>
//           <a href="#" className="hover:text-blue-600">About</a>
//           <a href="#" className="hover:text-blue-600">Contact</a>
//         </div>
//         <button 
//           className="md:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </nav>
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">About</a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
//         </div>
//       )}
//     </header>
//   );

//   const Footer = () => (
//     <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2025 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );

//   const LeftSidebar = () => (
//     <aside className="w-full md:w-64 bg-gray-100 p-4 overflow-y-auto">
//       <nav className="space-y-2">
//         <a href="#" className="block p-2 hover:bg-gray-200 rounded">Dashboard</a>
//         <a href="#" className="block p-2 hover:bg-gray-200 rounded">Analytics</a>
//         <a href="#" className="block p-2 hover:bg-gray-200 rounded">Settings</a>
//       </nav>
//     </aside>
//   );

//   const RightSidebar = () => (
//     <aside className="w-full md:w-64 bg-gray-50 p-4 overflow-y-auto">
//       <div className="space-y-4">
//         <div className="p-4 bg-white rounded shadow">
//           <h3 className="font-bold mb-2">Notifications</h3>
//           <p className="text-sm text-gray-600">No new notifications</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow">
//           <h3 className="font-bold mb-2">Quick Actions</h3>
//           <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             New Item
//           </button>
//         </div>
//       </div>
//     </aside>
//   );

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex-grow flex flex-col md:flex-row mt-16 mb-16">
//         <LeftSidebar />
//         <main className="flex-grow p-4 bg-white">
//           <div className="container mx-auto">
//             <h1 className="text-2xl font-bold mb-4">Welcome to Your App</h1>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <p className="text-gray-600 mb-4">
//               This is the main content area. It will grow to fill available space
//               between the sidebars. Try resizing the window to see how the layout
//               responds to different screen sizes.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="p-4 bg-blue-50 rounded">
//                 <h2 className="text-lg font-bold mb-2">Feature 1</h2>
//                 <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//               </div>
//               <div className="p-4 bg-blue-50 rounded">
//                 <h2 className="text-lg font-bold mb-2">Feature 2</h2>
//                 <p className="text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//               </div>
//             </div>
//           </div>
//         </main>
//         <RightSidebar />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// // export default LayoutPreview;
// "use client"
// import React, { useState } from 'react';

// const LayoutPreview = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const Header = () => (
//     <header className="fixed top-0 w-full bg-white shadow-md z-50 h-16">
//       <nav className="container mx-auto px-4 h-full flex items-center justify-between">
//         <div className="text-xl font-bold text-blue-600">Your Logo</div>
//         <div className="hidden md:flex space-x-4">
//           <a href="#" className="hover:text-blue-600">Home</a>
//           <a href="#" className="hover:text-blue-600">About</a>
//           <a href="#" className="hover:text-blue-600">Contact</a>
//         </div>
//         <button 
//           className="md:hidden"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </nav>
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white border-t">
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Home</a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">About</a>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
//         </div>
//       )}
//     </header>
//   );

//   const Footer = () => (
//     <footer className="fixed bottom-0 w-full bg-gray-800 text-white p-4">
//       <div className="container mx-auto text-center">
//         <p>&copy; 2025 Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );

//   const LeftSidebar = () => (
//     <aside className="fixed top-16 left-0 h-[calc(100vh-8rem)] w-full md:w-96 bg-gray-100 overflow-y-auto">
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-4">Navigation</h2>
//         <nav className="space-y-2">
//           <a href="#" className="block p-3 hover:bg-gray-200 rounded">Dashboard</a>
//           <a href="#" className="block p-3 hover:bg-gray-200 rounded">Analytics</a>
//           <a href="#" className="block p-3 hover:bg-gray-200 rounded">Settings</a>
//           <a href="#" className="block p-3 hover:bg-gray-200 rounded">Users</a>
//           <a href="#" className="block p-3 hover:bg-gray-200 rounded">Reports</a>
//           <a href="#" className="block p-3 hover:bg-gray-200 rounded">Integration</a>
//         </nav>
//       </div>
//     </aside>
//   );

//   const RightSidebar = () => (
//     <aside className="fixed top-16 right-0 h-[calc(100vh-8rem)] w-full md:w-96 bg-gray-50 overflow-y-auto">
//       <div className="p-4 space-y-4">
//         <div className="p-4 bg-white rounded shadow">
//           <h3 className="font-bold mb-2">Notifications</h3>
//           <p className="text-sm text-gray-600">No new notifications</p>
//         </div>
//         <div className="p-4 bg-white rounded shadow">
//           <h3 className="font-bold mb-2">Quick Actions</h3>
//           <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//             New Item
//           </button>
//         </div>
//         <div className="p-4 bg-white rounded shadow">
//           <h3 className="font-bold mb-2">Recent Activity</h3>
//           <div className="space-y-2">
//             <p className="text-sm text-gray-600">User logged in</p>
//             <p className="text-sm text-gray-600">New report generated</p>
//             <p className="text-sm text-gray-600">Settings updated</p>
//           </div>
//         </div>
//       </div>
//     </aside>
//   );

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <div className="pt-16 pb-16">
//         <LeftSidebar />
//         <main className="md:ml-96 md:mr-96 min-h-[calc(100vh-8rem)] bg-white">
//           <div className="p-6">
//             <h1 className="text-2xl font-bold mb-4">Welcome to Your App</h1>
//             <p className="text-gray-600 mb-6">
//               This is the main content area with fixed sidebars. The content here will scroll independently
//               while the sidebars, header, and footer remain fixed in place.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {[...Array(6)].map((_, i) => (
//                 <div key={i} className="p-4 bg-blue-50 rounded">
//                   <h2 className="text-lg font-bold mb-2">Feature {i + 1}</h2>
//                   <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//                   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  
//                 </div>
//               ))}
//             </div>
//           </div>
//         </main>
//         <RightSidebar />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default LayoutPreview;
// app/page.js
'use client';
import React from 'react';
import Header from '@/components/All/Header';
import LeftSidebar from '@/components/All/LeftSidebar';
import RightSidebar from '@/components/All/RightSidebar';
import ChatContainer from '@/components/All/ChatContainer';;

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <LeftSidebar />
        <main className="md:ml-96 md:mr-96 min-h-[calc(100vh-4rem)]">
          <ChatContainer />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}