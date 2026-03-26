import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

import DsBadge from "./ds-badge"
import { DsTreeItem } from "./ds-tree-item"

/** Lesson node definition used by DsSidebar */
export type DsSidebarLesson = {
  /** Unique identifier for the lesson */
  id: string
  /** Lesson title */
  title: string
  /** Status indicator */
  status: "completed" | "in-progress" | "locked"
}

/** Group of lessons within a section */
export type DsSidebarLessonGroup = {
  /** Unique identifier for the group */
  id: string
  /** Group title (e.g., Video, Teoria) */
  title: string
  /** Lessons contained in this group */
  lessons: DsSidebarLesson[]
}

/** Section inside a module containing lesson groups */
export type DsSidebarSection = {
  /** Unique identifier for the section */
  id: string
  /** Section title */
  title: string
  /** Groups within the section */
  groups: DsSidebarLessonGroup[]
}

/** Module grouping sections */
export type DsSidebarModule = {
  /** Unique identifier for the module */
  id: string
  /** Module title */
  title: string
  /** Sections within the module */
  sections: DsSidebarSection[]
}

/**
 * Props for DsSidebar component.
 * Sidebar navigation component for rendering course/module/lesson hierarchy.
 */
export type DsSidebarProps = {
  /** Modules to render in the sidebar */
  modules: DsSidebarModule[]
  /** Currently selected lesson id */
  selectedLessonId: string | null
  /** Callback when a lesson is selected */
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

/**
 * Sidebar navigation component for rendering course/module/lesson hierarchy.
 * Handles its own expand/collapse state and supports badges on lessons.
 */
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
                    {section.groups.map((group) => (
                      <DsTreeItem
                        key={group.id}
                        label={group.title}
                        level={2}
                        onClick={() => toggleItem(group.id)}
                      >
                        <AnimatedWrapper isOpen={!!openItems[group.id]}>
                          {group.lessons.map((lesson) => (
                            <DsTreeItem
                              key={lesson.id}
                              label={lesson.title}
                              level={3}
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
              ))}
            </AnimatedWrapper>
          </DsTreeItem>
        </div>
      ))}
    </div>
  )
}
