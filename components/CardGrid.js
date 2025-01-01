'use client';
import Link from 'next/link';

export function CardGrid({ items, type }) {
  return (
    <section className="p-6 bg-gradient-to-r from-yellow-50 via-green-50 to-cyan-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            href={
              type === "category"
                ? `/exams/${item.slug}`
                : `/exams/${item.category_slug}/${item.slug}`
            }
            className={`rounded-xl p-6 cursor-pointer transition-transform hover:scale-105 bg-gradient-to-br from-${item.color}-200 via-${item.color}-300 to-${item.color}-400 shadow-lg border-2 border-${item.borderColor} flex flex-col justify-between`}
          >
            <div>
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm font-medium text-gray-700">
                {type === "category" ? `${item.examCount} Exams` : `${item.questionCount} Questions`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CardGrid;
