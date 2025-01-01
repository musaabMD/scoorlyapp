// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { createClient } from "../libs/supabase/client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import { Search } from "lucide-react";

// const supabase = createClient();

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("category");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         await fetchCategories();
//         await fetchExams();
//       } catch (err) {
//         setError("Failed to load data. Please try again.");
//         console.error("Error loading data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const fetchCategories = async () => {
//     const { data, error } = await supabase
//       .from("scoorly_exam_categories")
//       .select("id, name, description");
//     if (error) throw error;

//     const mappedCategories = data.map((category, index) => ({
//       ...category,
//       color: colors[index % colors.length],
//       emoji: emojis[index % emojis.length],
//       examCount: Math.floor(Math.random() * 50) + 10,
//       borderColor: borderColors[index % borderColors.length],
//     }));

//     setCategories(mappedCategories);
//   };

//   const fetchExams = async () => {
//     const { data, error } = await supabase
//       .from("scoorly_exams")
//       .select("id, name, description, category_id");
//     if (error) throw error;

//     const mappedExams = data.map((exam, index) => ({
//       ...exam,
//       color: colors[index % colors.length],
//       emoji: emojis[index % emojis.length],
//       questionCount: Math.floor(Math.random() * 200) + 50,
//       borderColor: borderColors[index % borderColors.length],
//     }));

//     setExams(mappedExams);
//   };

//   const colors = [
//     "bg-blue-100",
//     "bg-green-100",
//     "bg-red-100",
//     "bg-purple-100",
//     "bg-orange-100",
//     "bg-yellow-100",
//   ];
//   const borderColors = [
//     "border-blue-500",
//     "border-green-500",
//     "border-red-500",
//     "border-purple-500",
//     "border-orange-500",
//     "border-yellow-500",
//   ];
//   const emojis = ["📚", "💻", "🩺", "🏆", "🔬", "☁️", "🛡️"];

//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredExams = exams.filter((exam) =>
//     exam.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main className="min-h-screen text-gray-900 p-6">
//       {/* Logo Section */}
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-extrabold text-blue-600">Scoorly</h1>
//       </div>

//       {/* Hero Section */}
//       <div className="text-center mb-12 py-10 px-6 bg-white rounded-lg ">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
//           Prepare for Your Future
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
//           Master your exams with our comprehensive test prep platform.
//         </p>
//         {/* Search Box */}
//         <div className="flex justify-center items-center space-x-2 max-w-2xl mx-auto">
//           <Input
//             type="text"
//             placeholder="Search categories or exams..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full h-[56px] text-lg rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//           <Button
//             className="h-[56px] px-6 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
//           >
//             <Search className="w-5 h-5" />
//           </Button>
//         </div>
//       </div>

//       {/* Loading State */}
//       {loading && (
//         <div className="text-center text-gray-600 text-lg">Loading...</div>
//       )}

//       {/* Error State */}
//       {error && (
//         <div className="text-center text-red-500 text-lg">{error}</div>
//       )}

//       {/* Tabs Section */}
//       {!loading && !error && (
//         <div className="flex justify-center mb-12">
//           <Tabs defaultValue="category" className="w-full max-w-7xl">
//             <TabsList className="grid w-full grid-cols-2 h-[12rem] sm:h-auto">
//               <TabsTrigger value="category">Browse by Category</TabsTrigger>
//               <TabsTrigger value="exam">Browse by Exam</TabsTrigger>
//             </TabsList>

//             {/* Categories */}
//             <TabsContent value="category">
//               <CategoryList categories={filteredCategories} />
//             </TabsContent>

//             {/* Exams */}
//             <TabsContent value="exam">
//               <CardGrid items={filteredExams} type="exam" />
//             </TabsContent>
//           </Tabs>
//         </div>
//       )}
//     </main>
//   );
// }

// function CardGrid({ items, type }) {
//   return (
//     <section className="p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {items.map((item) => (
//           <Link
//             key={item.id}
//             href={
//               type === "category"
//                 ? `/exams/${item.id}`
//                 : `/exams/${item.category_id}/${item.id}`
//             } // Adjust these paths based on your routing structure
//             className={`rounded-xl p-6 cursor-pointer transition-transform hover:scale-105 ${item.color} border-2 ${item.borderColor} flex flex-col justify-between`}
//           >
//             <div>
//               <div className="text-4xl mb-4">{item.emoji}</div>
//               <h3 className="text-2xl font-bold mb-2 text-gray-800">
//                 {item.name}
//               </h3>
//             </div>
//             <p className="text-sm font-medium text-gray-700">
//               {type === "category"
//                 ? `${item.examCount} Exams`
//                 : `${item.questionCount} Questions`}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


// function CategoryList({ categories }) {
//   return (
//     <section className="bg-white p-8">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Popular Categories</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {categories.map((category, index) => (
//           <Link
//             key={category.id}
//             href={`/exams/${category.id}`}
//             passHref
//           >
//             <a
//               className={`rounded-xl p-6 cursor-pointer transition-transform hover:scale-105 ${category.color} border-2 ${category.borderColor} flex flex-col justify-between`}
//             >
//               <div>
//                 <div className="text-4xl mb-4">{category.emoji}</div>
//                 <h3 className="text-2xl font-bold mb-2 text-gray-800">
//                   {category.name}
//                 </h3>
//               </div>
//               <p className="text-sm font-medium text-gray-700">
//                 {category.examCount} Exams
//               </p>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
// // // // pages/index.js
// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { createClient } from "../libs/supabase/client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs";
// import { Search } from "lucide-react";
// import { CategoryList } from "@/components/CategoryList";
// import { CardGrid } from "@/components/CardGrid";

// const supabase = createClient();

// export default function Home() {
//   const [activeTab, setActiveTab] = useState("category");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [exams, setExams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const colors = [
//     "bg-blue-100",
//     "bg-green-100",
//     "bg-red-100",
//     "bg-purple-100",
//     "bg-orange-100",
//     "bg-yellow-100",
//   ];
//   const borderColors = [
//     "border-blue-500",
//     "border-green-500",
//     "border-red-500",
//     "border-purple-500",
//     "border-orange-500",
//     "border-yellow-500",
//   ];
//   const emojis = ["📚", "💻", "🩺", "🏆", "🔬", "☁️", "🛡️"];

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       const { data: categoriesData, error: categoriesError } = await supabase
//         .from("scoorly_exam_categories")
//         .select("id, name, description");

//       if (categoriesError) throw categoriesError;

//       const mappedCategories = categoriesData.map((category, index) => ({
//         ...category,
//         color: colors[index % colors.length],
//         emoji: emojis[index % emojis.length],
//         examCount: Math.floor(Math.random() * 50) + 10,
//         borderColor: borderColors[index % borderColors.length],
//       }));

//       setCategories(mappedCategories);

//       const { data: examsData, error: examsError } = await supabase
//         .from("scoorly_exams")
//         .select("id, name, description, category_id");

//       if (examsError) throw examsError;

//       const mappedExams = examsData.map((exam, index) => ({
//         ...exam,
//         color: colors[index % colors.length],
//         emoji: emojis[index % emojis.length],
//         questionCount: Math.floor(Math.random() * 200) + 50,
//         borderColor: borderColors[index % borderColors.length],
//       }));

//       setExams(mappedExams);
//     } catch (err) {
//       setError("Failed to load data. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const filteredCategories = categories.filter((category) =>
//     category.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const filteredExams = exams.filter((exam) =>
//     exam.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <main className="min-h-screen text-gray-900 p-6">
//       <div className="text-center mb-6">
//         <h1 className="text-4xl font-extrabold text-blue-600">Scoorly</h1>
//       </div>

//       <div className="text-center mb-12 py-10 px-6 bg-white rounded-lg">
//         <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
//           Prepare for Your Future
//         </h1>
//         <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
//           Master your exams with our comprehensive test prep platform.
//         </p>
//         <div className="flex justify-center items-center space-x-2 max-w-2xl mx-auto">
//           <Input
//             type="text"
//             placeholder="Search categories or exams..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full h-[56px] text-lg rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//           <Button className="h-[56px] px-6 bg-blue-600 text-white hover:bg-blue-700 rounded-lg">
//             <Search className="w-5 h-5" />
//           </Button>
//         </div>
//       </div>

//       {loading && <div className="text-center text-gray-600 text-lg">Loading...</div>}
//       {error && <div className="text-center text-red-500 text-lg">{error}</div>}

//       {!loading && !error && (
//         <div className="flex justify-center mb-12">
//           <Tabs defaultValue="category" className="w-full max-w-7xl">
//             <TabsList className="grid w-full grid-cols-2 h-[12rem] sm:h-auto">
//               <TabsTrigger value="category">Browse by Category</TabsTrigger>
//               <TabsTrigger value="exam">Browse by Exam</TabsTrigger>
//             </TabsList>

//             <TabsContent value="category">
//               <CategoryList categories={filteredCategories} />
//             </TabsContent>

//             <TabsContent value="exam">
//               <CardGrid items={filteredExams} type="exam" />
//             </TabsContent>
//           </Tabs>
//         </div>
//       )}
//     </main>
//   );
// }
// 
// app/page.js
import { createClient } from "../libs/supabase/server";
import ExamList from "@/components/ExamList";

export default async function Home() {
  const supabase = createClient();

  try {
    // Fetch exams data with slugs
    const { data: exams, error } = await supabase
      .from("scoorly_exams")
      .select("id, name, description, slug");

    if (error) {
      console.error("Error fetching exams:", error.message);
      return <p>Failed to load exams. Please try again later.</p>;
    }

    return (
      <main className="min-h-screen  text-gray-900 p-6">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    <span className="text-5xl font-bold text-white">S</span>
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                   Scoorly  
                </h2>
                <br />
                <br />

                <p className="text-xl text-gray-600">Connect with 50,000+ fellow travelers worldwide!</p>
              </div>
      
        </div>

        {/* Exam List */}
        <ExamList initialExams={exams || []} />
      </main>
    );
  } catch (err) {
    console.error("Error:", err.message);
    return <p>Failed to load exams. Please try again later.</p>;
  }
}
