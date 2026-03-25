// or choose nested structure for the content tree, whatever is more convenient for you
export type Course = {
    id: string
    title: string
    modules: Module[]
}

export type Module = {
    id: string
    title: string
    lessons: Lesson[]
}

export type Lesson = {
    id: string
    title: string
    type: 'video' | 'article' | 'quiz' //  one  content type render is enough, use placeholder content for the rest
    status: 'completed' | 'in-progress' | 'locked'
    content?: string
}