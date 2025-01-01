"use client";
import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ExamList({ initialExams }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredExams = initialExams.filter((exam) =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const gradients = [
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-green-500 to-teal-500",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-purple-500",
    "from-yellow-500 to-orange-500"
  ];

  return (
    <section className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
          Explore Exams
        </h1>
        
        <div className="relative max-w-2xl mx-auto mb-16">
          <Input
            type="text"
            placeholder="Search exams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-14 pl-12 pr-4 text-lg rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {filteredExams.map((exam, index) => (
            <Link
              key={exam.id}
              href={`/exams/${exam.slug}`}
              className="block h-full"
            >
              <div className="h-full p-8 bg-white rounded-2xl shadow-sm border-2 border-gray-100 hover:border-blue-500 transition-colors duration-300">
                <div className="flex flex-col items-center h-full">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300 mb-6`}>
                    <span className="text-2xl font-bold text-white">
                      {exam.name[0]}
                    </span>
                  </div>
                  <div className="text-center w-full">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 break-words hyphens-auto">
                      {exam.name}
                    </h3>
                    <p className="text-gray-500 text-sm break-words hyphens-auto">
                      {exam.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}