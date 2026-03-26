import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

import DsBadge from "./ds-badge"
import { DsTreeItem } from "./ds-tree-item"

type Lesson = {
  id: string
  title: string
  status: "completed" | "in-progress" | "locked"
}

type Section = {
  id: string
  title: string
  lessons: Lesson[]
}

type Module = {
  id: string
  title: string
  sections: Section[]
}

type DsSidebarProps = {
  modules: Module[]
  selectedLessonId: string | null
  onSelectLesson: (lessonId: string) => void
}

function AnimatedWrapper({
  isOpen,
  children,
}: {
  isOpen: boolean
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      {children}
    </div>
  )
}

export function DsSidebar({
  modules,
  selectedLessonId,
  onSelectLesson,
}: DsSidebarProps) {
  const [openItems, setOpenItems] = React.useState<Record<string, boolean>>({})

  function toggleItem(id: string) {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="flex flex-col">
      {modules.map((mod) => (
        <div key={mod.id} className="mt-4">
          <DsTreeItem
            label={mod.title}
            level={0}
            onClick={() => toggleItem(mod.id)}
          >
            <AnimatedWrapper isOpen={!!openItems[mod.id]}>
              {mod.sections.map((section) => (
                <DsTreeItem
                  key={section.id}
                  label={section.title}
                  level={1}
                  onClick={() => toggleItem(section.id)}
                >
                  <AnimatedWrapper isOpen={!!openItems[section.id]}>
                    {section.lessons.map((lesson) => (
                      <DsTreeItem
                        key={lesson.id}
                        label={lesson.title}
                        level={2}
                        isActive={lesson.id === selectedLessonId}
                        onClick={() => onSelectLesson(lesson.id)}
                        rightSlot={
                          <DsBadge variant={lesson.status}>{lesson.status}</DsBadge>
                        }
                      />
                    ))}
                  </AnimatedWrapper>
                </DsTreeItem>
              ))}
            </AnimatedWrapper>
          </DsTreeItem>
        </div>
      ))}
    </div>
  )
}
