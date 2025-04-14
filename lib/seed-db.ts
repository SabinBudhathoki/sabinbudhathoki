import { createClientServer } from "./supabase"

export async function seedDatabase() {
  const supabase = createClientServer()

  // Sample data for subjects
  const subjects = [
    {
      slug: "mathematics",
      title: "Mathematics",
      description: "Explore the world of numbers, patterns, and mathematical concepts",
      image_url: "/placeholder.svg?height=300&width=400",
      color: "blue",
    },
    {
      slug: "physics",
      title: "Physics",
      description: "Understand the fundamental laws that govern the universe",
      image_url: "/placeholder.svg?height=300&width=400",
      color: "green",
    },
    // Add more subjects as needed
  ]

  // Insert subjects
  for (const subject of subjects) {
    const { data, error } = await supabase.from("subjects").upsert(subject, { onConflict: "slug" }).select()

    if (error) {
      console.error(`Error inserting subject ${subject.slug}:`, error)
      continue
    }

    const subjectId = data[0].id

    // Sample modules for this subject
    let modules = []
    if (subject.slug === "mathematics") {
      modules = [
        { title: "Calculus Fundamentals", position: 1 },
        { title: "Algebra and Functions", position: 2 },
        { title: "Statistics and Probability", position: 3 },
      ]
    } else if (subject.slug === "physics") {
      modules = [
        { title: "Classical Mechanics", position: 1 },
        { title: "Waves and Optics", position: 2 },
        { title: "Electricity and Magnetism", position: 3 },
      ]
    }

    // Insert modules for this subject
    for (const module of modules) {
      const { data: moduleData, error: moduleError } = await supabase
        .from("modules")
        .upsert({ ...module, subject_id: subjectId }, { onConflict: "subject_id, title" })
        .select()

      if (moduleError) {
        console.error(`Error inserting module ${module.title}:`, moduleError)
        continue
      }

      const moduleId = moduleData[0].id

      // Sample lessons for this module
      let lessons = []
      if (subject.slug === "mathematics" && module.title === "Calculus Fundamentals") {
        lessons = [
          {
            title: "Introduction to Limits",
            slug: "introduction-to-limits",
            description: "Understand the concept of limits and their importance in calculus",
            category: "Calculus",
            level: "Beginner",
            duration: 20,
            position: 1,
            content: JSON.stringify({
              introduction: "<p>Limits are the foundation of calculus...</p>",
              sections: [],
              summary: "<p>In this lesson, we've covered the fundamental concept of limits...</p>",
            }),
          },
          {
            title: "Derivatives and Differentiation",
            slug: "derivatives",
            description: "Learn the fundamental concepts of derivatives and differentiation techniques",
            category: "Calculus",
            level: "Intermediate",
            duration: 25,
            position: 2,
            content: JSON.stringify({
              introduction: "<p>Derivatives are a fundamental concept in calculus...</p>",
              sections: [],
              summary: "<p>In this lesson, we've covered the fundamental concept of derivatives...</p>",
            }),
          },
        ]
      } else if (subject.slug === "physics" && module.title === "Classical Mechanics") {
        lessons = [
          {
            title: "Newton's Laws of Motion",
            slug: "newtons-laws",
            description: "Understand the fundamental principles that govern the motion of objects",
            category: "Classical Mechanics",
            level: "Beginner",
            duration: 25,
            position: 1,
            content: JSON.stringify({
              introduction: "<p>Newton's Laws of Motion, formulated by Sir Isaac Newton...</p>",
              sections: [],
              summary: "<p>In this lesson, we've covered Newton's three laws of motion...</p>",
            }),
          },
        ]
      }

      // Insert lessons for this module
      for (const lesson of lessons) {
        const { data: lessonData, error: lessonError } = await supabase
          .from("lessons")
          .upsert({ ...lesson, module_id: moduleId }, { onConflict: "module_id, slug" })
          .select()

        if (lessonError) {
          console.error(`Error inserting lesson ${lesson.title}:`, lessonError)
          continue
        }

        const lessonId = lessonData[0].id

        // Add videos for this lesson
        const videos = [
          {
            lesson_id: lessonId,
            title: `Introduction to ${lesson.title}`,
            description: "A comprehensive overview of the topic",
            embed_id: "dQw4w9WgXcQ", // Sample YouTube ID
            position: 1,
          },
        ]

        for (const video of videos) {
          const { error: videoError } = await supabase.from("videos").upsert(video, { onConflict: "lesson_id, title" })

          if (videoError) {
            console.error(`Error inserting video for ${lesson.title}:`, videoError)
          }
        }

        // Add resources for this lesson
        const resources = [
          {
            lesson_id: lessonId,
            title: `${lesson.title} Cheat Sheet`,
            type: "pdf",
            url: "#",
            position: 1,
          },
          {
            lesson_id: lessonId,
            title: "Practice Problems",
            type: "pdf",
            url: "#",
            position: 2,
          },
        ]

        for (const resource of resources) {
          const { error: resourceError } = await supabase
            .from("resources")
            .upsert(resource, { onConflict: "lesson_id, title" })

          if (resourceError) {
            console.error(`Error inserting resource for ${lesson.title}:`, resourceError)
          }
        }
      }
    }
  }

  console.log("Database seeding completed")
  return { success: true }
}
