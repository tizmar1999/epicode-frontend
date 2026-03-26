'use client'

import { useState } from "react"

import DsBadge from "@workspace/design-system/components/ds-badge"
import { mockCourse } from "@/lib/mock-data"

export default function Page() {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-[380px_1fr_420px] h-screen">
      <aside className="bg-background-secondary border-r border-border p-4 h-full overflow-y-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold">{mockCourse.title}</h1>
          <div className="flex flex-col gap-2">
            {mockCourse.modules.map((mod) => (
              <div key={mod.id} className="flex flex-col gap-2 mt-4">
                <div className="text-sm font-semibold">{mod.title}</div>
                <div className="flex flex-col gap-2 pl-4 text-sm text-foreground-muted">
                  {mod.sections.map((section) => (
                    <div key={section.id} className="flex flex-col gap-1 mt-2">
                      <div className="text-xs uppercase tracking-wide text-foreground-muted">
                        {section.title}
                      </div>
                      <div className="flex flex-col gap-1 pl-4 text-sm text-foreground">
                        {section.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            onClick={() => setSelectedLessonId(lesson.id)}
                            className={[
                              "flex items-center justify-between pl-2 pr-2 py-1 rounded-md",
                              "text-sm",
                              selectedLessonId === lesson.id
                                ? "bg-primary/10 text-primary"
                                : "hover:bg-muted cursor-pointer",
                            ].join(" ")}
                          >
                            <span>{lesson.title}</span>
                            <DsBadge variant={lesson.status}>{lesson.status}</DsBadge>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <main className="flex flex-col p-6">Content</main>
      <section className="bg-background-secondary border-l border-border p-4">
        Chat
      </section>
    </div>
  )
}
