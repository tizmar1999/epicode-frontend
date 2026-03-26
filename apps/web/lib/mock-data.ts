export type LessonStatus = "completed" | "in-progress" | "locked"
export type LessonType = "video" | "article" | "quiz"

export type Lesson = {
  id: string
  title: string
  type: LessonType
  status: LessonStatus
  format?: "video" | "pdf" | "article"
}

export type Section = {
  id: string
  title: string
  lessons: Lesson[]
}

export type Module = {
  id: string
  title: string
  sections: Section[]
}

export type Course = {
  id: string
  title: string
  modules: Module[]
}

export const mockCourse: Course = {
  id: "course-1",
  title: "Data Analytics & AI",
  modules: [
    {
      id: "mod-0",
      title: "M0. Fundamentals",
      sections: [
        {
          id: "sec-1",
          title: "Introduzione al mondo dei dati",
          lessons: [
            {
              id: "l-1",
              title: "Intro all'analisi dei dati (1)",
              type: "video",
              status: "completed",
              format: "video",
            },
            {
              id: "l-2",
              title: "Intro all'analisi dei dati (2)",
              type: "video",
              status: "completed",
              format: "video",
            },
            {
              id: "l-3",
              title: "Analisi dati",
              type: "video",
              status: "in-progress",
              format: "video",
            },
            {
              id: "l-4",
              title: "Gestione dati",
              type: "video",
              status: "locked",
              format: "video",
            },
          ],
        },
        {
          id: "sec-2",
          title: "Teoria",
          lessons: [
            {
              id: "l-5",
              title: "Dati 1",
              type: "article",
              status: "locked",
              format: "pdf",
            },
          ],
        },
      ],
    },
    {
      id: "mod-1",
      title: "M1. Excel: febbraio 9 - marzo 13",
      sections: [],
    },
    {
      id: "mod-2",
      title: "M2: marzo 16 - aprile 17",
      sections: [],
    },
    {
      id: "mod-3",
      title: "M3, aprile 20 - maggio 22",
      sections: [],
    },
    {
      id: "mod-4",
      title: "M4. Google Looker Studio: maggio",
      sections: [],
    },
    {
      id: "mod-5",
      title: "M5. Power BI: giugno 15 - luglio 17",
      sections: [],
    },
    {
      id: "mod-6",
      title: "Capstone Project & Career Training",
      sections: [],
    },
  ],
}
