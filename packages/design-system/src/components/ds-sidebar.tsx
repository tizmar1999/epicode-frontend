import { DsTreeItem } from "./ds-tree-item"

/** Lesson node definition used by DsSidebar */
export type DsSidebarLesson = {
  /** Unique identifier for the lesson */
  id: string
  /** Lesson title */
  title: string
  /** Status indicator */
  status: "completed" | "in-progress" | "locked"
  /** Optional leading icon */
  icon?: string
}

/** Group of lessons within a section */
export type DsSidebarLessonGroup = {
  /** Unique identifier for the group */
  id: string
  /** Group title (e.g., Video, Teoria) */
  title: string
  /** Lessons contained in this group */
  lessons: DsSidebarLesson[]
  /** Optional leading icon */
  icon?: string
}

/** Section inside a module containing lesson groups */
export type DsSidebarSection = {
  /** Unique identifier for the section */
  id: string
  /** Section title */
  title: string
  /** Groups within the section */
  groups: DsSidebarLessonGroup[]
  /** Optional leading icon */
  icon?: string
}

/** Module grouping sections */
export type DsSidebarModule = {
  /** Unique identifier for the module */
  id: string
  /** Module title */
  title: string
  /** Sections within the module */
  sections: DsSidebarSection[]
  /** Optional leading icon */
  icon?: string
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

/**
 * Sidebar navigation component for rendering course/module/lesson hierarchy.
 * Handles its own expand/collapse state and supports badges on lessons.
 */
export function DsSidebar({
  modules,
  selectedLessonId,
  onSelectLesson,
}: DsSidebarProps) {
  return (
    <div className="flex flex-col">
      {modules.map((mod) => (
        <div key={mod.id} className="mt-2">
          <DsTreeItem label={mod.title} level={0} icon={mod.icon ?? "cube"}>
            {mod.sections.map((section) => (
              <DsTreeItem
                key={section.id}
                label={section.title}
                level={1}
                icon={section.icon ?? "book"}
              >
                {section.groups.map((group) => (
                  <DsTreeItem
                    key={group.id}
                    label={group.title}
                    level={2}
                    icon={group.icon ?? "folder"}
                  >
                    {group.lessons.map((lesson) => (
                      <DsTreeItem
                        key={lesson.id}
                        label={lesson.title}
                        level={3}
                        isActive={lesson.id === selectedLessonId}
                        icon={lesson.icon ?? "file"}
                        onClick={() => onSelectLesson(lesson.id)}
                        defaultOpen
                      />
                    ))}
                  </DsTreeItem>
                ))}
              </DsTreeItem>
            ))}
          </DsTreeItem>
        </div>
      ))}
    </div>
  )
}
