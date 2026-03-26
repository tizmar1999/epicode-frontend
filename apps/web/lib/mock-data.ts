export type LessonStatus = "completed" | "in-progress" | "locked"
export type LessonType = "video" | "article" | "quiz"

export type Lesson = {
  id: string
  title: string
  type: LessonType
  status: LessonStatus
}

export type LessonGroup = {
  id: string
  title: string // "Video", "Teoria"
  lessons: Lesson[]
}

export type Section = {
  id: string
  title: string
  groups: LessonGroup[]
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
          groups: [
            {
              id: "group-1",
              title: "Video",
              lessons: [
                {
                  id: "l-1",
                  title: "Intro all'analisi dei dati (1)",
                  type: "video",
                  status: "completed",
                },
                {
                  id: "l-2",
                  title: "Intro all'analisi dei dati (2)",
                  type: "video",
                  status: "completed",
                },
                {
                  id: "l-3",
                  title: "Analisi dati",
                  type: "video",
                  status: "in-progress",
                },
                {
                  id: "l-4",
                  title: "Gestione dati",
                  type: "video",
                  status: "locked",
                },
              ],
            },
            {
              id: "group-2",
              title: "Teoria",
              lessons: [
                {
                  id: "l-5",
                  title: "Dati 1",
                  type: "article",
                  status: "locked",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mod-1",
      title: "M1. Advanced Topics",
      sections: [
        {
          id: "sec-2",
          title: "Advanced Data Analysis",
          groups: [
            {
              id: "group-3",
              title: "Video",
              lessons: [
                {
                  id: "l-6",
                  title: "Advanced Analytics (1)",
                  type: "video",
                  status: "completed",
                },
                {
                  id: "l-7",
                  title: "Advanced Analytics (2)",
                  type: "video",
                  status: "completed",
                },
                {
                  id: "l-8",
                  title: "Machine Learning Basics",
                  type: "video",
                  status: "in-progress",
                },
                {
                  id: "l-9",
                  title: "Deep Learning Fundamentals",
                  type: "video",
                  status: "locked",
                },
              ],
            },
            {
              id: "group-4",
              title: "Teoria",
              lessons: [
                {
                  id: "l-10",
                  title: "Advanced Datasets",
                  type: "article",
                  status: "locked",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mod-2",
      title: "M2. Data Visualization",
      sections: [
        {
          id: "sec-3",
          title: "Data Visualization Techniques",
          groups: [
            {
              id: "group-5",
              title: "Video",
              lessons: [
                {
                  id: "l-11",
                  title: "Visualization Tools (1)",
                  type: "video",
                  status: "completed",
                },
                {
                  id: "l-12",
                  title: "Visualization Tools (2)",
                  type: "video",
                  status: "completed",
                },
                {
                  id: "l-13",
                  title: "Interactive Dashboards",
                  type: "video",
                  status: "in-progress",
                },
                {
                  id: "l-14",
                  title: "Data Storytelling",
                  type: "video",
                  status: "locked",
                },
              ],
            },
            {
              id: "group-6",
              title: "Teoria",
              lessons: [
                {
                  id: "l-15",
                  title: "Visualization Principles",
                  type: "article",
                  status: "locked",
                },
              ],
            },
          ],
        },
      ]
    }
  ],
}

