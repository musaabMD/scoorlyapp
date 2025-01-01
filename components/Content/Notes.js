// Notes.js
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle, Search } from "lucide-react"

export default function Notes() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Notes</h2>
        <Button className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" /> Add Note
        </Button>
      </div>
      <div className="relative mb-6">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input type="search" placeholder="Search notes..." className="pl-8" />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Data Structures</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Key concepts and implementations...</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
