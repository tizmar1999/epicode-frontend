'use client'

import { useState } from "react"

import { TopBar } from "@/components/lms/top-bar"
import { ContentArea } from "@/components/lms/content-area"
import { ChatPanel } from "@/components/lms/chat-panel"
import { mockCourse } from "@/lib/mock-data"
import { DsSidebar } from "@workspace/design-system/components/ds-sidebar"

export default function Page() {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>("l-5")
  const selectedLesson = mockCourse.modules
    .flatMap((m) => m.sections)
    .flatMap((s) => s.groups)
    .flatMap((g) => g.lessons)
    .find((l) => l.id === selectedLessonId)

  return (
    <div className="h-screen w-screen flex bg-[#0b0c15] overflow-hidden">
      {leftOpen && (
        <aside className="w-[280px] border-r border-[#1b1e2d] bg-[#0c0d17] flex flex-col shrink-0 relative overflow-y-auto scrollbar-hide px-5 pt-6 pb-4">
          <div className="flex items-center gap-2 mb-5">
            <div className="relative w-6 h-6">
              <span className="absolute w-3 h-3 bg-[#c029d6] skew-x-[-20deg] -left-0"></span>
              <span className="absolute w-3 h-3 bg-[#8b2dff] skew-x-[-20deg] left-2 top-2"></span>
              <span className="absolute w-3 h-3 bg-[#ff4da6] skew-x-[-20deg] left-1 top-4"></span>
            </div>
            <div className="text-sm font-semibold">{mockCourse.title}</div>
          </div>

          <button
            onClick={() => setLeftOpen(false)}
            className="absolute right-0 top-10 translate-x-1/2 z-20 bg-[rgba(11,12,21,0.6)] p-1 text-[#5c5f73] hover:text-white"
          >
            <i className="fas fa-angle-double-left text-xs" />
          </button>

          <DsSidebar
            modules={mockCourse.modules}
            selectedLessonId={selectedLessonId}
            onSelectLesson={setSelectedLessonId}
          />
        </aside>
      )}

      {!leftOpen && (
        <button
          onClick={() => setLeftOpen(true)}
          className="p-4 text-[#5c5f73] hover:text-white"
        >
          <i className="fas fa-angle-double-right" />
        </button>
      )}

      <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
        <TopBar />
        <ContentArea lesson={selectedLesson} />
      </div>

      {rightOpen ? (
        <section className="w-[260px] border-l border-[#1b1e2d] bg-[#0c0d17] flex flex-col shrink-0">
          <ChatPanel onClose={() => setRightOpen(false)} />
        </section>
      ) : (
        <div className="flex flex-col border-l border-[#1b1e2d] bg-[#0c0d17] py-4 px-2">
          <button
            onClick={() => setRightOpen(true)}
            className="text-[#5c5f73] hover:text-white"
          >
            <i className="fas fa-chevron-left" />
          </button>
        </div>
      )}
    </div>
  )
}
