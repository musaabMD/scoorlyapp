// import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { AlertCircle, Bookmark } from 'lucide-react'
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// const ExplanationCard = ({ explanation, onBookmark, isBookmarked, onFeedback }) => {
//   return (
//     <Card className="w-full max-w-2xl mx-auto mb-8">
//       <CardHeader>
//         <h3 className="text-xl font-semibold">Explanation</h3>
//       </CardHeader>
//       <CardContent>
//         <p>{explanation}</p>
//       </CardContent>
//       <CardFooter className="justify-end space-x-2">
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button variant="outline" size="icon" onClick={onFeedback}>
//                 <AlertCircle className="h-4 w-4" />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>Provide feedback</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <Button 
//                 variant="outline" 
//                 size="icon"
//                 onClick={onBookmark}
//                 className={isBookmarked ? 'bg-blue-100 text-blue-700' : ''}
//               >
//                 <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-blue-700' : ''}`} />
//               </Button>
//             </TooltipTrigger>
//             <TooltipContent>
//               <p>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</p>
//             </TooltipContent>
//           </Tooltip>
//         </TooltipProvider>
//       </CardFooter>
//     </Card>
//   )
// }

// export default ExplanationCard
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, Bookmark } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const ExplanationCard = ({ explanation, onBookmark, isBookmarked, onFeedback }) => {
  return (
    <Card className="w-full max-w-6xl mx-auto mb-8">
      <CardHeader>
        <h3 className="text-2xl font-semibold py-2">Explanation</h3>
      </CardHeader>
      <CardContent className="py-4">
        <p className="text-lg leading-relaxed">{explanation}</p>
      </CardContent>
      <CardFooter className="justify-end space-x-4 py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="lg" onClick={onFeedback}>
                <AlertCircle className="h-6 w-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-base">Provide feedback</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                onClick={onBookmark}
                className={isBookmarked ? 'bg-blue-100 text-blue-700' : ''}
              >
                <Bookmark className={`h-6 w-6 ${isBookmarked ? 'fill-blue-700' : ''}`} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-base">{isBookmarked ? 'Bookmarked' : 'Bookmark'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
    </Card>
  )
}

export default ExplanationCard
