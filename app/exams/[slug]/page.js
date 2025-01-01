// app/exams/[slug]/page.js
import { createClient } from "../../../libs/supabase/server";
import Link from "next/link";

export default async function ExamPage({ params }) {
  const supabase = createClient();

  try {
    const { data: exam, error } = await supabase
      .from('scoorly_exams')
      .select('*, scoorly_exam_categories(name, slug)')
      .eq('slug', params.slug)
      .single();

    if (error) {
      console.error("Error:", error.message);
      return <div>Failed to load exam details. Please try again later.</div>;
    }

    if (!exam) {
      return <div>Exam not found</div>;
    }

    const colors = ["bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-red-200"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div className="min-h-screen bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6 text-sm">
            <Link href="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            {" "}/{" "}
            {exam.name}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <div className="flex items-center gap-6 mb-6">
              <div className={`w-20 h-20 ${color} flex items-center justify-center rounded-md text-2xl font-bold text-gray-800`}>
                {exam.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{exam.name}</h1>
                <p className="text-lg text-gray-600">{exam.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exam.provider && 
                <DetailCard title="Provider" value={exam.provider} />
              }
              {exam.duration_minutes && 
                <DetailCard title="Duration" value={`${exam.duration_minutes} minutes`} />
              }
              {exam.number_of_questions &&
                <DetailCard title="Questions" value={exam.number_of_questions} />
              }
            </div>
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error("Error:", err.message);
    return <div>Failed to load exam details. Please try again later.</div>;
  }
}

function DetailCard(props) {
  if (!props.value) return null;
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-sm font-medium text-gray-500">{props.title}</h3>
      <p className="mt-1 text-lg font-semibold text-gray-900">{props.value}</p>
    </div>
  );
}