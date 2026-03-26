'use client'

import { useState } from "react"

import { TopBar } from "@/components/lms/top-bar"
import { ContentArea } from "@/components/lms/content-area"
import { ChatPanel } from "@/components/lms/chat-panel"
import { mockCourse } from "@/lib/mock-data"
import { DsSidebar } from "@workspace/design-system/components/ds-sidebar"

export default function Page() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const selectedLesson = mockCourse.modules
    .flatMap((m) => m.sections)
    .flatMap((s) => s.groups)
    .flatMap((g) => g.lessons)
    .find((l) => l.id === selectedLessonId)

  return (
    <div className="grid grid-cols-[380px_1fr_420px] h-screen bg-background">
      <aside className="bg-background-secondary border-r border-border p-4 pt-6 h-full overflow-y-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold mb-4">{mockCourse.title}</h1>
          <DsSidebar
            modules={mockCourse.modules}
            selectedLessonId={selectedLessonId}
            onSelectLesson={setSelectedLessonId}
          />
        </div>
      </aside>
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
