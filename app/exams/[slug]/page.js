"use client";

import React, { useState, useEffect } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import Link from "next/link";
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchAndFilter from '@/components/SearchAndFilter';
import NoteCard from '@/components/NoteCard';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const themes = {
  white: {
    background: 'bg-white',
    hover: 'hover:bg-gray-50',
  },
  yellow: {
    background: 'bg-yellow-50',
    hover: 'hover:bg-yellow-100',
  },
  green: {
    background: 'bg-green-50',
    hover: 'hover:bg-green-100',
  },
  dark: {
    background: 'bg-gray-800',
    hover: 'hover:bg-gray-700',
    text: 'text-white',
    subtext: 'text-gray-300',
  }
};

const initialNotes = [
  {
    id: 1,
    title: "Cardiology Notes",
    content: "The heart's electrical system consists of specialized cells that create and conduct electrical impulses.",
    tags: ["📚 cardiology", "⚡ electrical system"],
    isBookmarked: false,
    verifiedCount: 34,
    verifiedByUser: false,
    source: "https://example.com/notes/1",
    category: "USMLE",
    image: "/api/placeholder/400/200",
    isHighYield: true,
    upvotes: 45,
    downvotes: 5,
    userVote: null,
    author: {
      name: "Dr. Smith",
      avatar: "/api/placeholder/32/32",
      handle: "@drsmith"
    }
  },
  {
    id: 2,
    title: "Neurology Basics",
    content: "Understanding the blood-brain barrier and its clinical significance in drug delivery.",
    tags: ["🧠 neurology", "💊 pharmacology"],
    isBookmarked: true,
    verifiedCount: 28,
    verifiedByUser: true,
    source: "https://example.com/notes/2",
    category: "USMLE",
    image: "/api/placeholder/400/200",
    isHighYield: true,
    upvotes: 38,
    downvotes: 2,
    userVote: "up",
    author: {
      name: "Dr. Johnson",
      avatar: "/api/placeholder/32/32",
      handle: "@drj"
    }
  },
  {
    id: 3,
    title: "Pharmacology Review",
    content: "Beta blockers mechanism of action and clinical applications in various conditions.",
    tags: ["💊 pharmacology", "❤️ cardiology"],
    isBookmarked: false,
    verifiedCount: 42,
    verifiedByUser: false,
    source: "https://example.com/notes/3",
    category: "USMLE",
    image: "/api/placeholder/400/200",
    isHighYield: true,
    upvotes: 56,
    downvotes: 3,
    userVote: null,
    author: {
      name: "Dr. Williams",
      avatar: "/api/placeholder/32/32",
      handle: "@drwilliams"
    }
  }
];

export default function ExamPage({ params }) {
  const [exam, setExam] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState(initialNotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [globalTheme, setGlobalTheme] = useState('white');

  useEffect(() => {
    async function fetchExam() {
      try {
        const { data, error } = await supabase
          .from('scoorly_exams')
          .select('*, scoorly_exam_categories(name, slug)')
          .eq('slug', params.slug)
          .single();

        if (error) throw error;
        setExam(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchExam();
  }, [params.slug]);

  useEffect(() => {
    const tags = [...new Set(notes.flatMap(note => note.tags))];
    setAllTags(tags);
  }, [notes]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!exam) return <div>Exam not found</div>;

  const colors = ["bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = 
      selectedTags.length === 0 ||
      selectedTags.every(tag => note.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });

  const toggleVerified = (noteId) => {
    setNotes(prevNotes => prevNotes.map(note => {
      if (note.id === noteId) {
        return {
          ...note,
          verifiedByUser: !note.verifiedByUser,
          verifiedCount: note.verifiedByUser 
            ? note.verifiedCount - 1 
            : note.verifiedCount + 1
        };
      }
      return note;
    }));
  };

  const handleVote = (noteId, voteType) => {
    setNotes(prevNotes => prevNotes.map(note => {
      if (note.id === noteId) {
        const isRemovingVote = note.userVote === voteType;
        return {
          ...note,
          upvotes: note.upvotes + (
            voteType === 'up' 
              ? (isRemovingVote ? -1 : 1) 
              : (note.userVote === 'up' ? -1 : 0)
          ),
          downvotes: note.downvotes + (
            voteType === 'down' 
              ? (isRemovingVote ? -1 : 1) 
              : (note.userVote === 'down' ? -1 : 0)
          ),
          userVote: isRemovingVote ? null : voteType
        };
      }
      return note;
    }));
  };

  const toggleBookmark = (noteId) => {
    setNotes(prevNotes => prevNotes.map(note => {
      if (note.id === noteId) {
        return {
          ...note,
          isBookmarked: !note.isBookmarked
        };
      }
      return note;
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="pt-8 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
          {" "}/{" "}
          {exam.name}
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className={`w-24 h-24 ${color} flex items-center justify-center rounded-xl text-3xl font-bold text-gray-800 mb-6 shadow-lg`}>
            {exam.name.charAt(0).toUpperCase()}
          </div>
          
          <div className="max-w-2xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">{exam.name}</h1>
            <p className="text-xl text-gray-600 mb-8">{exam.description}</p>
            
            <div className="flex justify-center gap-8">
              {exam.duration_minutes && (
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{exam.duration_minutes}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Minutes</p>
                </div>
              )}
              
              {exam.number_of_questions && (
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">{exam.number_of_questions}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Questions</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="py-8">
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            allTags={allTags}
            globalTheme={globalTheme}
            setGlobalTheme={setGlobalTheme}
            themes={themes}
          />
          
          {filteredNotes.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No notes found. Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredNotes.map(note => (
                <NoteCard
                  key={note.id}
                  note={note}
                  globalTheme={globalTheme}
                  themes={themes}
                  toggleVerified={toggleVerified}
                  handleVote={handleVote}
                  toggleBookmark={toggleBookmark}
                />
              ))}
            </div>
          )}

          <Button className="fixed bottom-12 right-12 h-16 w-16 rounded-full shadow-xl text-xl">
            <Plus className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}