'use client'

import { useState } from "react"

import { Sidebar } from "@/components/lms/sidebar"
import { TopBar } from "@/components/lms/top-bar"
import { ContentArea } from "@/components/lms/content-area"
import { ChatPanel } from "@/components/lms/chat-panel"
import { mockCourse } from "@/lib/mock-data"

export default function Page() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const selectedLesson = mockCourse.modules
    .flatMap((m) => m.sections)
    .flatMap((s) => s.lessons)
    .find((l) => l.id === selectedLessonId)

  return (
    <div className="grid grid-cols-[380px_1fr_420px] h-screen bg-background">
      <Sidebar
        course={mockCourse}
        selectedLessonId={selectedLessonId}
        onSelectLesson={setSelectedLessonId}
      />
      <div className="flex flex-col h-full">
        <TopBar />
        <div className="flex-1 p-6">
          <ContentArea lesson={selectedLesson} />
        </div>
      </div>
      <section className="bg-background-secondary border-l border-border">
        <ChatPanel />
      </section>
    </div>
  )
}
