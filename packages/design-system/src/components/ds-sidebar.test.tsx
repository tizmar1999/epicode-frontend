import { render, screen, fireEvent } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"

import { DsSidebar } from "./ds-sidebar"

const mockModules = [
  {
    id: "mod-1",
    title: "Module 1",
    sections: [
      {
        id: "sec-1",
        title: "Section 1",
        groups: [
          {
            id: "group-1",
            title: "Video",
            lessons: [
              {
                id: "l-1",
                title: "Lesson 1",
                status: "completed",
              },
            ],
          },
        ],
      },
    ],
  },
]

describe("DsSidebar", () => {
  it("renders module title", () => {
    render(
      <DsSidebar
        modules={mockModules}
        selectedLessonId={null}
        onSelectLesson={() => {}}
      />
    )

    expect(screen.getByText("Module 1")).toBeInTheDocument()
  })

  it("expands module on click", () => {
    render(
      <DsSidebar
        modules={mockModules}
        selectedLessonId={null}
        onSelectLesson={() => {}}
      />
    )

    expect(screen.getByText("Section 1")).toBeInTheDocument()
  })

  it("expands section on click", () => {
    render(
      <DsSidebar
        modules={mockModules}
        selectedLessonId={null}
        onSelectLesson={() => {}}
      />
    )

    expect(screen.getByText("Video")).toBeInTheDocument()
  })

  it("shows lessons when group is expanded", () => {
    render(
      <DsSidebar
        modules={mockModules}
        selectedLessonId={null}
        onSelectLesson={() => {}}
      />
    )

    expect(screen.getByText("Lesson 1")).toBeInTheDocument()
  })

  it("calls onSelectLesson when lesson is clicked", () => {
    const handleSelect = vi.fn()

    render(
      <DsSidebar
        modules={mockModules}
        selectedLessonId={null}
        onSelectLesson={handleSelect}
      />
    )

    fireEvent.click(screen.getByText("Lesson 1"))

    expect(handleSelect).toHaveBeenCalledWith("l-1")
  })
})
