export type LessonStatus = "completed" | "in-progress" | "locked";
export type LessonType = "video" | "article" | "quiz";

export interface Lesson {
  icon?: string;
  id: string;
  status: LessonStatus;
  title: string;
  type: LessonType;
}

export interface LessonGroup {
  icon?: string;
  id: string;
  lessons: Lesson[];
  title: string; // "Video", "Teoria"
}

export interface Section {
  groups: LessonGroup[];
  icon?: string;
  id: string;
  title: string;
}

export interface Module {
  icon?: string;
  id: string;
  sections: Section[];
  title: string;
}

export interface Course {
  id: string;
  modules: Module[];
  title: string;
}

export type Locale = "en" | "it";

export const mockCourses: Record<Locale, Course> = {
  en: {
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
            title: "Introduction to the world of data",
            icon: "book",
            groups: [
              {
                id: "group-1",
                title: "Video",
                icon: "play-circle",
                lessons: [
                  {
                    id: "l-1",
                    title: "Intro to data analysis (1)",
                    type: "video",
                    status: "completed",
                    icon: "play",
                  },
                  {
                    id: "l-2",
                    title: "Intro to data analysis (2)",
                    type: "video",
                    status: "completed",
                    icon: "play",
                  },
                  {
                    id: "l-3",
                    title: "Data analysis",
                    type: "video",
                    status: "in-progress",
                    icon: "play",
                  },
                  {
                    id: "l-4",
                    title: "Data management",
                    type: "video",
                    status: "locked",
                    icon: "play",
                  },
                ],
              },
              {
                id: "group-2",
                title: "Theory",
                icon: "book",
                lessons: [
                  {
                    id: "l-5",
                    title: "Data 1",
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
        title: "M1. Excel: Feb 9 - Mar 13",
        icon: "cube",
        sections: [],
      },
      {
        id: "mod-2",
        title: "M2: Mar 16 - Apr 17",
        icon: "cube",
        sections: [],
      },
      {
        id: "mod-3",
        title: "M3. Apr 20 - May 22",
        icon: "cube",
        sections: [],
      },
      {
        id: "mod-4",
        title: "M4. Google Looker Studio: May...",
        icon: "cube",
        sections: [],
      },
      {
        id: "mod-5",
        title: "M5. Power BI: Jun 15 - Jul 17",
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
  },
  it: {
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
        title: "M0. Fondamentali",
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
  },
};

export const mockCourse: Course = mockCourses.en;
