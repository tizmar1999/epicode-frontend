'use client'

import { useState } from "react"

import DsBadge from "@workspace/design-system/components/ds-badge"
import { Sidebar } from "@/components/lms/sidebar"
import { mockCourse } from "@/lib/mock-data"

export default function Page() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-[380px_1fr_420px] h-screen">
      <Sidebar
        course={mockCourse}
        selectedLessonId={selectedLessonId}
        onSelectLesson={setSelectedLessonId}
      />
      <main className="flex flex-col p-6">Content</main>
      <section className="bg-background-secondary border-l border-border p-4">
        Chat
      </section>
    </div>
  )
}
