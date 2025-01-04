import React from 'react';
import { 
  Bookmark, BookmarkCheck, Link, Shield, 
  ChevronUp, ChevronDown, Zap 
} from 'lucide-react';
import {
  Card, CardContent, CardFooter, CardHeader, CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NoteCard = ({ 
  note,
  globalTheme,
  themes,
  toggleVerified,
  handleVote,
  toggleBookmark
}) => {
  if (!note) return null;

  return (
    <Card 
      className={`border shadow-sm transition-all duration-200 
        ${themes[globalTheme].background} 
        ${themes[globalTheme].hover}
        ${themes[globalTheme].text || ''}
      `}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="text-sm">
                {note.category}
              </Badge>
              {note.isHighYield && (
                <Zap className="h-5 w-5 text-yellow-500" />
              )}
            </div>
            <CardTitle className="text-2xl mb-3">{note.title}</CardTitle>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={note.author.avatar} />
                <AvatarFallback>{note.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{note.author.name}</p>
                <p className="text-sm text-gray-500">{note.author.handle}</p>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className={`${themes[globalTheme].text || 'text-gray-700'} mb-4`}>
          {note.content}
        </p>
        {note.image && (
          <img 
            src={note.image} 
            alt="Note attachment" 
            className="rounded-lg w-full mb-4"
          />
        )}
        <div className="flex flex-wrap gap-2">
          {note.tags.map(tag => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => toggleVerified(note.id)}
          >
            <Shield className={`h-4 w-4 ${note.verifiedByUser ? 'text-green-500 fill-green-500' : ''}`} />
            <span className={note.verifiedByUser ? 'text-green-500' : ''}>
              {note.verifiedCount}
            </span>
          </Button>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote(note.id, 'up')}
              className={note.userVote === 'up' ? 'text-blue-500' : ''}
            >
              <ChevronUp className={`h-4 w-4 ${note.userVote === 'up' ? 'fill-blue-500' : ''}`} />
              {note.upvotes}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleVote(note.id, 'down')}
              className={note.userVote === 'down' ? 'text-red-500' : ''}
            >
              <ChevronDown className={`h-4 w-4 ${note.userVote === 'down' ? 'fill-red-500' : ''}`} />
              {note.downvotes}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => toggleBookmark(note.id)}
            className="flex items-center gap-1"
          >
            {note.isBookmarked ? (
              <BookmarkCheck className="h-4 w-4 text-blue-500 fill-blue-500" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
            Bookmark
          </Button>

          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <Link className="h-4 w-4" />
            Source
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default NoteCard;