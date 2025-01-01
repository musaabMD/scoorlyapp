'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  LineChart,
  Tooltip,
} from "@/components/ui/chart"

export default function Analytics() {
  // Sample data
  const chartData = [
    {
      name: "Jan",
      total: 12,
    },
    {
      name: "Feb",
      total: 15,
    },
    {
      name: "Mar",
      total: 18,
    },
    {
      name: "Apr",
      total: 13,
    },
    {
      name: "May",
      total: 20,
    },
    {
      name: "Jun",
      total: 16,
    },
  ]

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Learning Analytics</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Study Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
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
                    tickFormatter={(value) => `${value}h`}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                  <Tooltip />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Progress Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
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
                  <Line
                    type="monotone"
                    dataKey="total"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="stroke-primary"
                  />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}