import { getClientServer } from "./supabase"

export type Subject = {
  id: number
  slug: string
  title: string
  description: string
  image_url: string
  color?: string
  modules?: Module[]
  progress?: {
    completed: number
    total: number
  }
}

export type Module = {
  id: number
  subject_id: number
  title: string
  position: number
  lessons: Lesson[]
}

export type Lesson = {
  id: number
  module_id: number
  title: string
  slug: string
  description: string
  category: string
  level: string
  duration: number
  position: number
  content?: any
  completed?: boolean
  locked?: boolean
  videos?: Video[]
  resources?: Resource[]
}

export type Video = {
  id: number
  lesson_id: number
  title: string
  description: string
  embed_id: string
  position: number
}

export type Resource = {
  id: number
  lesson_id: number
  title: string
  type: string
  url?: string
  position: number
}

// Get a subject with all its modules and lessons
export async function getSubjectFromDB(slug: string): Promise<Subject | null> {
  const supabase = getClientServer()

  // Get the subject
  const { data: subject, error: subjectError } = await supabase.from("subjects").select("*").eq("slug", slug).single()

  if (subjectError || !subject) {
    console.error("Error fetching subject:", subjectError)
    return null
  }

  // Get the modules for this subject
  const { data: modules, error: modulesError } = await supabase
    .from("modules")
    .select("*")
    .eq("subject_id", subject.id)
    .order("position", { ascending: true })

  if (modulesError) {
    console.error("Error fetching modules:", modulesError)
    return { ...subject, modules: [] }
  }

  // Get all lessons for this subject's modules
  const moduleIds = modules.map((module) => module.id)

  if (moduleIds.length === 0) {
    return { ...subject, modules: [] }
  }

  const { data: lessons, error: lessonsError } = await supabase
    .from("lessons")
    .select("*")
    .in("module_id", moduleIds)
    .order("position", { ascending: true })

  if (lessonsError) {
    console.error("Error fetching lessons:", lessonsError)
    return {
      ...subject,
      modules: modules.map((module) => ({ ...module, lessons: [] })),
    }
  }

  // Group lessons by module
  const modulesWithLessons = modules.map((module) => {
    const moduleLessons = lessons.filter((lesson) => lesson.module_id === module.id)

    // Add default values for UI compatibility
    const formattedLessons = moduleLessons.map((lesson) => ({
      ...lesson,
      completed: false, // This would come from user progress in a real app
      locked: false, // This would be determined by prerequisites or other logic
    }))

    return {
      ...module,
      lessons: formattedLessons,
    }
  })

  // Calculate progress (placeholder logic)
  const totalLessons = lessons.length
  const completedLessons = 0 // This would come from user progress in a real app

  return {
    ...subject,
    modules: modulesWithLessons,
    progress: {
      completed: completedLessons,
      total: totalLessons,
    },
  }
}

// Get a specific lesson with its videos and resources
export async function getLessonFromDB(subjectSlug: string, lessonSlug: string): Promise<Lesson | null> {
  const supabase = getClientServer()

  // First get the subject to verify it exists
  const { data: subject, error: subjectError } = await supabase
    .from("subjects")
    .select("id")
    .eq("slug", subjectSlug)
    .single()

  if (subjectError || !subject) {
    console.error("Error fetching subject for lesson:", subjectError)
    return null
  }

  // Get modules for this subject
  const { data: modules, error: modulesError } = await supabase
    .from("modules")
    .select("id")
    .eq("subject_id", subject.id)

  if (modulesError || !modules.length) {
    console.error("Error fetching modules for lesson:", modulesError)
    return null
  }

  const moduleIds = modules.map((module) => module.id)

  // Get the lesson
  const { data: lesson, error: lessonError } = await supabase
    .from("lessons")
    .select("*")
    .in("module_id", moduleIds)
    .eq("slug", lessonSlug)
    .single()

  if (lessonError || !lesson) {
    console.error("Error fetching lesson:", lessonError)
    return null
  }

  // Get videos for this lesson
  const { data: videos, error: videosError } = await supabase
    .from("videos")
    .select("*")
    .eq("lesson_id", lesson.id)
    .order("position", { ascending: true })

  if (videosError) {
    console.error("Error fetching videos:", videosError)
  }

  // Get resources for this lesson
  const { data: resources, error: resourcesError } = await supabase
    .from("resources")
    .select("*")
    .eq("lesson_id", lesson.id)
    .order("position", { ascending: true })

  if (resourcesError) {
    console.error("Error fetching resources:", resourcesError)
  }

  return {
    ...lesson,
    videos: videos || [],
    resources: resources || [],
  }
}
