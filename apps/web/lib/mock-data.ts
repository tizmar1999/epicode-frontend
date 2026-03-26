export type LessonStatus = "completed" | "in-progress" | "locked"
export type LessonType = "video" | "article" | "quiz"

export type Lesson = {
  id: string
  title: string
  type: LessonType
  status: LessonStatus
  icon?: string
}

export type LessonGroup = {
  id: string
  title: string // "Video", "Teoria"
  lessons: Lesson[]
  icon?: string
}

export type Section = {
  id: string
  title: string
  groups: LessonGroup[]
  icon?: string
}

export type Module = {
  id: string
  title: string
  sections: Section[]
  icon?: string
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
      id: "welcome",
      title: "Welcome: Data Analyst",
      icon: "cube",
      sections: [],
    },
    {
      id: "mod-0",
      title: "M0. Fundamentals",
      icon: "cube",
      sections: [
        {
          id: "sec-1",
          title: "Introduzione al mondo dei dati",
          icon: "book",
          groups: [
            {
              id: "group-1",
              title: "Video",
              icon: "play-circle",
              lessons: [
                {
                  id: "l-1",
                  title: "Intro all'analisi dei dati (1)",
                  type: "video",
                  status: "completed",
                  icon: "play",
                },
                {
                  id: "l-2",
                  title: "Intro all'analisi dei dati (2)",
                  type: "video",
                  status: "completed",
                  icon: "play",
                },
                {
                  id: "l-3",
                  title: "Analisi dati",
                  type: "video",
                  status: "in-progress",
                  icon: "play",
                },
                {
                  id: "l-4",
                  title: "Gestione dati",
                  type: "video",
                  status: "locked",
                  icon: "play",
                },
              ],
            },
            {
              id: "group-2",
              title: "Teoria",
              icon: "book",
              lessons: [
                {
                  id: "l-5",
                  title: "Dati 1",
                  type: "article",
                  status: "locked",
                  icon: "file",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mod-1",
      title: "M1. Excel: febbraio 9 - marzo 13",
      icon: "cube",
      sections: [],
    },
    {
      id: "mod-2",
      title: "M2: marzo 16 - aprile 17",
      icon: "cube",
      sections: [],
    },
    {
      id: "mod-3",
      title: "M3. aprile 20 - maggio 22",
      icon: "cube",
      sections: [],
    },
    {
      id: "mod-4",
      title: "M4. Google Looker Studio: maggio...",
      icon: "cube",
      sections: [],
    },
    {
      id: "mod-5",
      title: "M5. Power BI: giugno 15 - luglio 17",
      icon: "cube",
      sections: [],
    },
    {
      id: "mod-6",
      title: "Capstone Project & Career Training",
      icon: "cube",
      sections: [],
    },
  ],
}
