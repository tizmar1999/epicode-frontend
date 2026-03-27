"use client";

import { DsSidebar } from "@workspace/design-system/components/ds-sidebar";
import { useState } from "react";
import { useEffect } from "react";
import { ChatPanel } from "@/components/lms/chat-panel";
import { ContentArea } from "@/components/lms/content-area";
import { TopBar } from "@/components/lms/top-bar";
import { mockCourses } from "@/lib/mock-data";
import { useI18n } from "@/lib/i18n";

export default function Page() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    "l-5"
  );
  const [isMobile, setIsMobile] = useState(false);
  const { locale } = useI18n();

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (mobile) {
        setLeftOpen(false);
        setRightOpen(false);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const course = mockCourses[locale] ?? mockCourses.en;

  const selectedLesson = course.modules
    .flatMap((m) => m.sections)
    .flatMap((s) => s.groups)
    .flatMap((g) => g.lessons)
    .find((l) => l.id === selectedLessonId);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[var(--color-background)] transition-colors">
      {leftOpen && (
        <aside className="scrollbar-hide relative flex w-[280px] shrink-0 flex-col overflow-y-auto border-r border-[var(--color-border)] bg-[var(--color-background-secondary)] px-5 pt-6 pb-4 transition-all duration-300 ease-in-out">
          <div className="mb-5 flex items-center gap-2">
            <div className="relative h-6 w-6">
              <span className="absolute -left-0 h-3 w-3 skew-x-[-20deg] bg-[#c029d6]" />
              <span className="absolute top-2 left-2 h-3 w-3 skew-x-[-20deg] bg-[#8b2dff]" />
              <span className="absolute top-4 left-1 h-3 w-3 skew-x-[-20deg] bg-[#ff4da6]" />
            </div>
            <div className="font-semibold text-sm">{course.title}</div>
          </div>

          {!isMobile && (
            <button
              className="absolute top-10 right-0 z-20 translate-x-1/2 bg-[rgba(11,12,21,0.6)] p-1 text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-foreground)]"
              onClick={() => setLeftOpen(false)}
              type="button"
            >
              <i className="fas fa-angle-double-left text-xs" />
            </button>
          )}

          <DsSidebar
            modules={course.modules}
            onSelectLesson={(id) => {
              setSelectedLessonId(id);
              if (isMobile) {
                setLeftOpen(false);
              }
            }}
            selectedLessonId={selectedLessonId}
          />
        </aside>
      )}

      {!leftOpen && (
        <button
          className="p-4 text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-foreground)]"
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

      {isMobile ? (
        <>
          {rightOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/50"
                onClick={() => setRightOpen(false)}
              />
              <div className="fixed inset-y-0 right-0 z-50 w-[90%] max-w-sm overflow-hidden border-l border-[var(--color-border)] bg-[var(--color-background-secondary)] shadow-2xl transition-transform duration-300 ease-in-out">
                <ChatPanel onClose={() => setRightOpen(false)} />
              </div>
            </>
          )}
          <button
            aria-label="Open chat"
            className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-white shadow-lg transition-transform hover:scale-105"
            onClick={() => setRightOpen(true)}
            type="button"
          >
            <i className="fas fa-comments" />
          </button>
        </>
      ) : rightOpen ? (
        <section className="flex w-[260px] shrink-0 flex-col border-l border-[var(--color-border)] bg-[var(--color-background-secondary)] transition-all duration-300 ease-in-out">
          <ChatPanel onClose={() => setRightOpen(false)} />
        </section>
      ) : (
        <div className="flex flex-col border-l border-[var(--color-border)] bg-[var(--color-background-secondary)] px-2 py-4 transition-all duration-300 ease-in-out">
          <button
            className="text-[var(--color-foreground-muted)] hover:text-[var(--color-foreground)]"
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
