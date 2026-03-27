import DsBadge from "@workspace/design-system/components/ds-badge";
import { DsTreeItem } from "@workspace/design-system/components/ds-tree-item";

import { cn } from "@workspace/ui/lib/utils";
import { useState } from "react";
import type { Course } from "@/lib/mock-data";

interface SidebarProps {
  course: Course;
  onSelectLesson: (lessonId: string) => void;
  selectedLessonId: string | null;
}

export function Sidebar({
  course,
  selectedLessonId,
  onSelectLesson,
}: SidebarProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  function toggleItem(id: string) {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

  return (
    <aside className="h-full overflow-y-auto border-border border-r bg-background-secondary p-4 pt-6">
      <div className="flex flex-col gap-4">
        <h1 className="mb-4 font-semibold text-lg">{course.title}</h1>
        <div className="flex flex-col gap-2">
          {course.modules.map((mod) => (
            <div className="mt-4" key={mod.id}>
              <DsTreeItem
                label={mod.title}
                level={0}
                onClick={() => toggleItem(mod.id)}
              >
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openItems[mod.id]
                      ? "max-h-[800px] opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {mod.sections.map((section) => (
                    <DsTreeItem
                      key={section.id}
                      label={section.title}
                      level={1}
                      onClick={() => toggleItem(section.id)}
                    >
                      <div
                        className={cn(
                          "overflow-hidden transition-all duration-300",
                          openItems[section.id]
                            ? "max-h-[800px] opacity-100"
                            : "max-h-0 opacity-0"
                        )}
                      >
                        {section.groups?.map((group) => (
                          <DsTreeItem
                            key={group.id}
                            label={group.title}
                            level={2}
                            onClick={() => toggleItem(group.id)}
                          >
                            <div
                              className={cn(
                                "overflow-hidden transition-all duration-300",
                                openItems[group.id]
                                  ? "max-h-[800px] opacity-100"
                                  : "max-h-0 opacity-0"
                              )}
                            >
                              {group.lessons.map((lesson) => (
                                <DsTreeItem
                                  isActive={lesson.id === selectedLessonId}
                                  key={lesson.id}
                                  label={lesson.title}
                                  level={3}
                                  onClick={() => onSelectLesson(lesson.id)}
                                  rightSlot={
                                    <DsBadge variant={lesson.status}>
                                      {lesson.status}
                                    </DsBadge>
                                  }
                                />
                              ))}
                            </div>
                          </DsTreeItem>
                        ))}
                      </div>
                    </DsTreeItem>
                  ))}
                </div>
              </DsTreeItem>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
