import DsBadge from "@workspace/design-system/components/ds-badge"

import { Course } from "@/lib/mock-data"

type SidebarProps = {
  course: Course
  selectedLessonId: string | null
  onSelectLesson: (lessonId: string) => void
}

export function Sidebar({
  course,
  selectedLessonId,
  onSelectLesson,
}: SidebarProps) {
  return (
    <aside className="bg-background-secondary border-r border-border p-4 h-full overflow-y-auto">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-semibold">{course.title}</h1>
        <div className="flex flex-col gap-2">
          {course.modules.map((mod) => (
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
                          onClick={() => onSelectLesson(lesson.id)}
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
  )
}
