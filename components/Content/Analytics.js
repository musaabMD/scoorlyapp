// 'use client'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//   Bar,
//   BarChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   Line,
//   LineChart,
//   Tooltip,
// } from "@/components/ui/chart"

// export default function Analytics() {
//   // Sample data
//   const chartData = [
//     {
//       name: "Jan",
//       total: 12,
//     },
//     {
//       name: "Feb",
//       total: 15,
//     },
//     {
//       name: "Mar",
//       total: 18,
//     },
//     {
//       name: "Apr",
//       total: 13,
//     },
//     {
//       name: "May",
//       total: 20,
//     },
//     {
//       name: "Jun",
//       total: 16,
//     },
//   ]

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-6">Learning Analytics</h2>
//       <div className="grid gap-4 md:grid-cols-2">
//         <Card>
//           <CardHeader>
//             <CardTitle>Study Hours</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-[300px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={chartData}>
//                   <XAxis
//                     dataKey="name"
//                     stroke="#888888"
//                     fontSize={12}
//                     tickLine={false}
//                     axisLine={false}
//                   />
//                   <YAxis
//                     stroke="#888888"
//                     fontSize={12}
//                     tickLine={false}
//                     axisLine={false}
//                     tickFormatter={(value) => `${value}h`}
//                   />
//                   <Bar
//                     dataKey="total"
//                     fill="currentColor"
//                     radius={[4, 4, 0, 0]}
//                     className="fill-primary"
//                   />
//                   <Tooltip />
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Progress Trend</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="h-[300px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={chartData}>
//                   <XAxis
//                     dataKey="name"
//                     stroke="#888888"
//                     fontSize={12}
//                     tickLine={false}
//                     axisLine={false}
//                   />
//                   <YAxis
//                     stroke="#888888"
//                     fontSize={12}
//                     tickLine={false}
//                     axisLine={false}
//                     tickFormatter={(value) => `${value}%`}
//                   />
//                   <Line
//                     type="monotone"
//                     dataKey="total"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     className="stroke-primary"
//                   />
//                   <Tooltip />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const Analytics = () => {
  // Sample data - replace with your actual data
  const data = [
    { name: 'Week 1', progress: 65 },
    { name: 'Week 2', progress: 78 },
    { name: 'Week 3', progress: 82 },
    { name: 'Week 4', progress: 90 },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis 
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}%`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '4px'
                    }}
                    formatter={(value) => [`${value}%`, 'Progress']}
                  />
                  <Bar
                    dataKey="progress"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;