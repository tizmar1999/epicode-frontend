import DsBadge from "@workspace/design-system/components/ds-badge"

import type { Lesson } from "@/lib/mock-data"

type ContentAreaProps = {
  lesson: Lesson | undefined
}

const typeToBadge: Record<Lesson["type"], "default" | "in-progress" | "new"> = {
  video: "in-progress",
  article: "default",
  quiz: "new",
}

export function ContentArea({ lesson }: ContentAreaProps) {
  if (!lesson) {
    return (
      <main className="flex flex-col p-6 gap-4 h-full bg-background">
        <div className="h-full flex items-center justify-center text-foreground-muted">
          Select a lesson
        </div>
      </main>
    )
  }

  return (
    <main className="flex flex-col p-6 gap-4 bg-background">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-semibold mb-2">{lesson.title}</h2>
        <DsBadge variant={typeToBadge[lesson.type]}>{lesson.type}</DsBadge>
      </div>
      <div className="h-[320px] bg-background-secondary border border-border rounded-xl flex items-center justify-center text-foreground-muted">
        {lesson.type === "video" && "Video player"}
        {lesson.type === "article" && "Article content"}
        {lesson.type === "quiz" && "Quiz content"}
      </div>
    </main>
  )
}
