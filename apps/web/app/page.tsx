'use client'

import { useState } from "react"

import { TopBar } from "@/components/lms/top-bar"
import { ContentArea } from "@/components/lms/content-area"
import { ChatPanel } from "@/components/lms/chat-panel"
import { mockCourse } from "@/lib/mock-data"
import { DsSidebar } from "@workspace/design-system/components/ds-sidebar"

export default function Page() {
  const [leftOpen, setLeftOpen] = useState(true)
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)
  const selectedLesson = mockCourse.modules
    .flatMap((m) => m.sections)
    .flatMap((s) => s.groups)
    .flatMap((g) => g.lessons)
    .find((l) => l.id === selectedLessonId)

  return (
    <div className="grid grid-cols-[280px_1fr_260px] h-screen bg-background">
      {leftOpen ? (
        <aside className="bg-background-secondary border-r border-border px-5 pt-6 pb-4 h-full overflow-y-auto relative">
          <button
            onClick={() => setLeftOpen(false)}
            className="absolute right-0 top-10 translate-x-1/2 z-20 bg-[rgba(11,12,21,0.6)] p-1 text-foreground-muted hover:text-foreground"
          >
            ‹‹
          </button>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold mb-4">{mockCourse.title}</h1>
            <DsSidebar
              modules={mockCourse.modules}
              selectedLessonId={selectedLessonId}
              onSelectLesson={setSelectedLessonId}
            />
          </div>
        </aside>
      ) : (
        <button
          onClick={() => setLeftOpen(true)}
          className="p-4 text-foreground-muted hover:text-foreground"
        >
          ››
        </button>
      )}
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
