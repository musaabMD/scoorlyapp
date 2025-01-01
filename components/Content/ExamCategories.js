
// components/ExamCategories.js
'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@/libs/supabase/client';
import CardGrid from '@/components/CardGrid';

const ExamCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const colors = [
    "bg-blue-100",
    "bg-green-100",
    "bg-red-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-yellow-100",
  ];
  
  const borderColors = [
    "border-blue-500",
    "border-green-500",
    "border-red-500",
    "border-purple-500",
    "border-orange-500",
    "border-yellow-500",
  ];
  
  const emojis = ["📚", "💻", "🩺", "🏆", "🔬", "☁️", "🛡️"];

  useEffect(() => {
    const fetchCategories = async () => {
      const supabase = createClient();
      try {
        const { data, error } = await supabase
          .from('scoorly_exam_categories')
          .select('id, name, description, slug');

        if (error) throw error;

        const mappedCategories = data.map((category, index) => ({
          ...category,
          color: colors[index % colors.length],
          emoji: emojis[index % emojis.length],
          examCount: Math.floor(Math.random() * 50) + 10,
          borderColor: borderColors[index % borderColors.length],
        }));

        setCategories(mappedCategories);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-8">Exam Categories</h1>
      <CardGrid items={categories} type="category" />
    </div>
  );
};

export default ExamCategories;