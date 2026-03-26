"use client";

import { DsSidebar } from "@workspace/design-system/components/ds-sidebar";
import { useState } from "react";
import { ChatPanel } from "@/components/lms/chat-panel";
import { ContentArea } from "@/components/lms/content-area";
import { TopBar } from "@/components/lms/top-bar";
import { mockCourse } from "@/lib/mock-data";

export default function Page() {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    "l-5"
  );
  const selectedLesson = mockCourse.modules
    .flatMap((m) => m.sections)
    .flatMap((s) => s.groups)
    .flatMap((g) => g.lessons)
    .find((l) => l.id === selectedLessonId);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0b0c15]">
      {leftOpen && (
        <aside className="scrollbar-hide relative flex w-[280px] shrink-0 flex-col overflow-y-auto border-[#1b1e2d] border-r bg-[#0c0d17] px-5 pt-6 pb-4">
          <div className="mb-5 flex items-center gap-2">
            <div className="relative h-6 w-6">
              <span className="absolute -left-0 h-3 w-3 skew-x-[-20deg] bg-[#c029d6]" />
              <span className="absolute top-2 left-2 h-3 w-3 skew-x-[-20deg] bg-[#8b2dff]" />
              <span className="absolute top-4 left-1 h-3 w-3 skew-x-[-20deg] bg-[#ff4da6]" />
            </div>
            <div className="font-semibold text-sm">{mockCourse.title}</div>
          </div>

          <button
            className="absolute top-10 right-0 z-20 translate-x-1/2 bg-[rgba(11,12,21,0.6)] p-1 text-[#5c5f73] hover:text-white"
            onClick={() => setLeftOpen(false)}
            type="button"
          >
            <i className="fas fa-angle-double-left text-xs" />
          </button>

          <DsSidebar
            modules={mockCourse.modules}
            onSelectLesson={setSelectedLessonId}
            selectedLessonId={selectedLessonId}
          />
        </aside>
      )}

      {!leftOpen && (
        <button
          className="p-4 text-[#5c5f73] hover:text-white"
          onClick={() => setLeftOpen(true)}
          type="button"
        >
          <i className="fas fa-angle-double-right" />
        </button>
      )}

      <div className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <TopBar />
        <ContentArea lesson={selectedLesson} />
      </div>

      {rightOpen ? (
        <section className="flex w-[260px] shrink-0 flex-col border-[#1b1e2d] border-l bg-[#0c0d17]">
          <ChatPanel onClose={() => setRightOpen(false)} />
        </section>
      ) : (
        <div className="flex flex-col border-[#1b1e2d] border-l bg-[#0c0d17] px-2 py-4">
          <button
            className="text-[#5c5f73] hover:text-white"
            onClick={() => setRightOpen(true)}
            type="button"
          >
            <i className="fas fa-chevron-left" />
          </button>
        </div>
      )}
    </div>
  );
}
