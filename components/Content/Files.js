
// Files.js
'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, File } from "lucide-react"

export default function Files() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Files</h2>
        <Button className="flex items-center gap-2">
          <Upload className="h-4 w-4" /> Upload File
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <File className="h-8 w-8 text-blue-500" />
            <div>
              <h3 className="font-semibold">Chapter 1 Notes.pdf</h3>
              <p className="text-sm text-muted-foreground">Added 2 days ago</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
