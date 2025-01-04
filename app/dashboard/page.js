// app/dashboard/page.js
'use client'
import ResponsiveTabs from '@/components/ResponsiveTabs'
import LayoutPrivate from '@/components/LayoutClient' // Fix import path

export const dynamic = "force-dynamic"

export default function DashboardPage() {
  return (
    <LayoutPrivate>
      <main className="min-h-screen bg-white p-4">
        <ResponsiveTabs />
      </main>
    </LayoutPrivate>
  )
}