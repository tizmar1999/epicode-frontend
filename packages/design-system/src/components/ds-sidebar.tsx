import { DsTreeItem } from "./ds-tree-item";

/** Lesson node definition used by DsSidebar */
export interface DsSidebarLesson {
  /** Optional leading icon */
  icon?: string;
  /** Unique identifier for the lesson */
  id: string;
  /** Status indicator */
  status: "completed" | "in-progress" | "locked";
  /** Lesson title */
  title: string;
}

/** Group of lessons within a section */
export interface DsSidebarLessonGroup {
  /** Optional leading icon */
  icon?: string;
  /** Unique identifier for the group */
  id: string;
  /** Lessons contained in this group */
  lessons: DsSidebarLesson[];
  /** Group title (e.g., Video, Teoria) */
  title: string;
}

/** Section inside a module containing lesson groups */
export interface DsSidebarSection {
  /** Groups within the section */
  groups: DsSidebarLessonGroup[];
  /** Optional leading icon */
  icon?: string;
  /** Unique identifier for the section */
  id: string;
  /** Section title */
  title: string;
}

/** Module grouping sections */
export interface DsSidebarModule {
  /** Optional leading icon */
  icon?: string;
  /** Unique identifier for the module */
  id: string;
  /** Sections within the module */
  sections: DsSidebarSection[];
  /** Module title */
  title: string;
}

/**
 * Props for DsSidebar component.
 * Sidebar navigation component for rendering course/module/lesson hierarchy.
 */
export interface DsSidebarProps {
  /** Modules to render in the sidebar */
  modules: DsSidebarModule[];
  /** Callback when a lesson is selected */
  onSelectLesson: (lessonId: string) => void;
  /** Currently selected lesson id */
  selectedLessonId: string | null;
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
    <div className="flex flex-col" role="tree">
      {modules.map((mod) => (
        <div className="mt-2" key={mod.id}>
          <DsTreeItem icon={mod.icon ?? "cube"} label={mod.title} level={0}>
            {mod.sections.map((section) => (
              <DsTreeItem
                icon={section.icon ?? "book"}
                key={section.id}
                label={section.title}
                level={1}
              >
                {section.groups.map((group) => (
                  <DsTreeItem
                    icon={group.icon ?? "folder"}
                    key={group.id}
                    label={group.title}
                    level={2}
                  >
                    {group.lessons.map((lesson) => (
                      <DsTreeItem
                        defaultOpen
                        icon={lesson.icon ?? "file"}
                        isActive={lesson.id === selectedLessonId}
                        key={lesson.id}
                        label={lesson.title}
                        level={3}
                        onClick={() => onSelectLesson(lesson.id)}
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
  );
}
