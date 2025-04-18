import { getSubjectFromDB, getLessonFromDB } from "./db"

// This file contains data access functions for subjects and lessons

export async function getSubjectData(subjectSlug: string) {
  console.log("Requested subject:", subjectSlug)

  try {
    // Try to get the subject from the database
    const subject = await getSubjectFromDB(subjectSlug)

    if (subject) {
      console.log("Found subject in database:", subject.title)
      return subject
    }

    // If not found in database, fall back to in-memory data (for development)
    console.log("Subject not found in database, using fallback data")
    return getFallbackSubjectData(subjectSlug)
  } catch (error) {
    console.error("Error getting subject data:", error)
    // Fall back to in-memory data in case of error
    return getFallbackSubjectData(subjectSlug)
  }
}

export async function getLessonData(subjectSlug: string, lessonSlug: string) {
  console.log("Requested lesson:", subjectSlug, lessonSlug)

  try {
    // Try to get the lesson from the database
    const lesson = await getLessonFromDB(subjectSlug, lessonSlug)

    if (lesson) {
      console.log("Found lesson in database:", lesson.title)
      return lesson
    }

    // If not found in database, fall back to in-memory data (for development)
    console.log("Lesson not found in database, using fallback data")
    return getFallbackLessonData(subjectSlug, lessonSlug)
  } catch (error) {
    console.error("Error getting lesson data:", error)
    // Fall back to in-memory data in case of error
    return getFallbackLessonData(subjectSlug, lessonSlug)
  }
}

// Fallback functions that use the original in-memory data
function getFallbackSubjectData(subjectSlug: string) {
  // For debugging
  console.log("Using fallback subject data for:", subjectSlug)

  const subjects = {
    mathematics: {
      title: "Mathematics",
      description: "Explore the world of numbers, patterns, and mathematical concepts",
      image: "/placeholder.svg?height=300&width=400",
      progress: {
        completed: 3,
        total: 12,
      },
      modules: [
        {
          title: "Calculus Fundamentals",
          lessons: [
            {
              title: "Introduction to Limits",
              slug: "introduction-to-limits",
              duration: 20,
              completed: true,
              locked: false,
            },
            {
              title: "Derivatives and Differentiation",
              slug: "derivatives",
              duration: 25,
              completed: true,
              locked: false,
            },
            {
              title: "Applications of Derivatives",
              slug: "applications-of-derivatives",
              duration: 30,
              completed: true,
              locked: false,
            },
            {
              title: "Integration Techniques",
              slug: "integration-techniques",
              duration: 35,
              completed: false,
              locked: false,
            },
          ],
        },
        {
          title: "Algebra and Functions",
          lessons: [
            {
              title: "Linear Equations",
              slug: "linear-equations",
              duration: 20,
              completed: false,
              locked: false,
            },
            {
              title: "Quadratic Functions",
              slug: "quadratic-functions",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Polynomial Functions",
              slug: "polynomial-functions",
              duration: 30,
              completed: false,
              locked: true,
            },
            {
              title: "Exponential and Logarithmic Functions",
              slug: "exponential-logarithmic-functions",
              duration: 35,
              completed: false,
              locked: true,
            },
          ],
        },
        {
          title: "Statistics and Probability",
          lessons: [
            {
              title: "Descriptive Statistics",
              slug: "descriptive-statistics",
              duration: 20,
              completed: false,
              locked: true,
            },
            {
              title: "Probability Concepts",
              slug: "probability-concepts",
              duration: 25,
              completed: false,
              locked: true,
            },
            {
              title: "Probability Distributions",
              slug: "probability-distributions",
              duration: 30,
              completed: false,
              locked: true,
            },
            {
              title: "Hypothesis Testing",
              slug: "hypothesis-testing",
              duration: 35,
              completed: false,
              locked: true,
            },
          ],
        },
      ],
    },
    physics: {
      title: "Physics",
      description: "Understand the fundamental laws that govern the universe",
      image: "/placeholder.svg?height=300&width=400",
      progress: {
        completed: 2,
        total: 16,
      },
      modules: [
        {
          title: "Classical Mechanics",
          lessons: [
            {
              title: "Newton's Laws of Motion",
              slug: "newtons-laws",
              duration: 25,
              completed: true,
              locked: false,
            },
            {
              title: "Work, Energy, and Power",
              slug: "work-energy-power",
              duration: 30,
              completed: true,
              locked: false,
            },
            {
              title: "Momentum and Collisions",
              slug: "momentum-collisions",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Rotational Motion",
              slug: "rotational-motion",
              duration: 35,
              completed: false,
              locked: false,
            },
          ],
        },
        {
          title: "Waves and Optics",
          lessons: [
            {
              title: "Wave Properties and Behavior",
              slug: "wave-properties",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Reflection and Refraction of Light",
              slug: "reflection-refraction",
              duration: 30,
              completed: false,
              locked: false,
            },
            {
              title: "Lenses and Optical Instruments",
              slug: "lenses-optical-instruments",
              duration: 25,
              completed: false,
              locked: true,
            },
            {
              title: "Interference and Diffraction",
              slug: "interference-diffraction",
              duration: 30,
              completed: false,
              locked: true,
            },
          ],
        },
        {
          title: "Electricity and Magnetism",
          lessons: [
            {
              title: "Electric Charge and Field",
              slug: "electric-charge-field",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Electric Potential and Capacitance",
              slug: "electric-potential",
              duration: 30,
              completed: false,
              locked: false,
            },
            {
              title: "Current and Resistance",
              slug: "current-resistance",
              duration: 25,
              completed: false,
              locked: true,
            },
            {
              title: "Magnetism and Magnetic Fields",
              slug: "magnetism",
              duration: 30,
              completed: false,
              locked: false,
            },
          ],
        },
      ],
    },
    "computer-science": {
      title: "Computer Science",
      description: "Learn programming, algorithms, and computational thinking",
      image: "/placeholder.svg?height=300&width=400",
      progress: {
        completed: 1,
        total: 12,
      },
      modules: [
        {
          title: "Programming Fundamentals",
          lessons: [
            {
              title: "Introduction to Programming",
              slug: "intro-programming",
              duration: 20,
              completed: true,
              locked: false,
            },
            {
              title: "Variables and Data Types",
              slug: "variables-data-types",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Control Structures",
              slug: "control-structures",
              duration: 30,
              completed: false,
              locked: false,
            },
            {
              title: "Functions and Methods",
              slug: "functions-methods",
              duration: 25,
              completed: false,
              locked: false,
            },
          ],
        },
        {
          title: "Data Structures and Algorithms",
          lessons: [
            {
              title: "Arrays and Lists",
              slug: "arrays-lists",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Stacks and Queues",
              slug: "stacks-queues",
              duration: 30,
              completed: false,
              locked: true,
            },
            {
              title: "Trees and Graphs",
              slug: "trees-graphs",
              duration: 35,
              completed: false,
              locked: true,
            },
            {
              title: "Sorting and Searching Algorithms",
              slug: "sorting-searching",
              duration: 40,
              completed: false,
              locked: true,
            },
          ],
        },
      ],
    },
    logic: {
      title: "Logic",
      description: "Develop critical thinking and logical reasoning skills",
      image: "/placeholder.svg?height=300&width=400",
      progress: {
        completed: 0,
        total: 8,
      },
      modules: [
        {
          title: "Foundations of Logic",
          lessons: [
            {
              title: "Critical Thinking and Logical Reasoning",
              slug: "critical-thinking",
              duration: 35,
              completed: false,
              locked: false,
            },
            {
              title: "Formal Logic Systems",
              slug: "formal-logic",
              duration: 30,
              completed: false,
              locked: false,
            },
            {
              title: "Logical Fallacies",
              slug: "logical-fallacies",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "Argument Analysis",
              slug: "argument-analysis",
              duration: 40,
              completed: false,
              locked: true,
            },
          ],
        },
        {
          title: "Advanced Logic",
          lessons: [
            {
              title: "Symbolic Logic",
              slug: "symbolic-logic",
              duration: 45,
              completed: false,
              locked: true,
            },
            {
              title: "Predicate Logic",
              slug: "predicate-logic",
              duration: 40,
              completed: false,
              locked: true,
            },
            {
              title: "Modal Logic",
              slug: "modal-logic",
              duration: 35,
              completed: false,
              locked: true,
            },
            {
              title: "Logic in Computer Science",
              slug: "logic-computer-science",
              duration: 50,
              completed: false,
              locked: true,
            },
          ],
        },
      ],
    },
    biology: {
      title: "Biology",
      description: "Discover the science of life and living organisms",
      image: "/placeholder.svg?height=300&width=400",
      progress: {
        completed: 0,
        total: 20,
      },
      modules: [
        {
          title: "Introduction to Biology",
          lessons: [
            {
              title: "What is Biology?",
              slug: "intro-biology",
              duration: 20,
              completed: false,
              locked: false,
            },
            {
              title: "Cell Structure and Function",
              slug: "cell-structure",
              duration: 30,
              completed: false,
              locked: false,
            },
            {
              title: "DNA and Genetics",
              slug: "dna-genetics",
              duration: 35,
              completed: false,
              locked: false,
            },
            {
              title: "Evolution and Natural Selection",
              slug: "evolution",
              duration: 40,
              completed: false,
              locked: false,
            },
          ],
        },
        {
          title: "Human Biology",
          lessons: [
            {
              title: "Anatomy and Physiology",
              slug: "anatomy-physiology",
              duration: 45,
              completed: false,
              locked: true,
            },
            {
              title: "The Nervous System",
              slug: "nervous-system",
              duration: 40,
              completed: false,
              locked: true,
            },
            {
              title: "The Circulatory System",
              slug: "circulatory-system",
              duration: 35,
              completed: false,
              locked: true,
            },
            {
              title: "The Immune System",
              slug: "immune-system",
              duration: 30,
              completed: false,
              locked: true,
            },
          ],
        },
      ],
    },
    chemistry: {
      title: "Chemistry",
      description: "Explore the composition, structure, and properties of matter",
      image: "/placeholder.svg?height=300&width=400",
      progress: {
        completed: 0,
        total: 15,
      },
      modules: [
        {
          title: "Basic Chemistry Concepts",
          lessons: [
            {
              title: "Atoms and Molecules",
              slug: "atoms-molecules",
              duration: 25,
              completed: false,
              locked: false,
            },
            {
              title: "The Periodic Table",
              slug: "periodic-table",
              duration: 30,
              completed: false,
              locked: false,
            },
            {
              title: "Chemical Bonds",
              slug: "chemical-bonds",
              duration: 35,
              completed: false,
              locked: false,
            },
            {
              title: "Chemical Reactions",
              slug: "chemical-reactions",
              duration: 40,
              completed: false,
              locked: false,
            },
          ],
        },
        {
          title: "Advanced Chemistry",
          lessons: [
            {
              title: "Organic Chemistry",
              slug: "organic-chemistry",
              duration: 45,
              completed: false,
              locked: true,
            },
            {
              title: "Thermodynamics",
              slug: "thermodynamics",
              duration: 40,
              completed: false,
              locked: true,
            },
            {
              title: "Electrochemistry",
              slug: "electrochemistry",
              duration: 35,
              completed: false,
              locked: true,
            },
            {
              title: "Nuclear Chemistry",
              slug: "nuclear-chemistry",
              duration: 30,
              completed: false,
              locked: true,
            },
          ],
        },
      ],
    },
  }

  // Check if the subject exists and return it
  const subject = subjects[subjectSlug as keyof typeof subjects]
  console.log("Found subject in fallback data:", subject ? "Yes" : "No")

  return subject || null
}

function getFallbackLessonData(subjectSlug: string, lessonSlug: string) {
  // For debugging
  console.log("Using fallback lesson data for:", subjectSlug, lessonSlug)

  const lessons = {
    mathematics: {
      derivatives: {
        title: "Derivatives and Differentiation",
        description: "Learn the fundamental concepts of derivatives and differentiation techniques",
        category: "Calculus",
        level: "Intermediate",
        content: {
          introduction: `
            <p>Derivatives are a fundamental concept in calculus that measure the rate at which a function changes. They have numerous applications in mathematics, physics, engineering, economics, and other fields.</p>
            <p>In this lesson, we'll explore what derivatives are, how to calculate them using various rules, and how they can be interpreted geometrically.</p>
          `,
          sections: [
            {
              title: "What is a Derivative?",
              content: `
                <p>The derivative of a function represents the rate of change of the function with respect to its variable. Geometrically, it represents the slope of the tangent line to the function's graph at a given point.</p>
                <p>The derivative of a function f(x) is denoted as f'(x) or df/dx.</p>
                <p>Formally, the derivative is defined as the limit:</p>
                <div class="bg-gray-100 p-4 my-4 rounded-md text-center">
                  f'(x) = lim<sub>h→0</sub> [f(x+h) - f(x)] / h
                </div>
                <p>This limit, if it exists, gives us the instantaneous rate of change of the function at the point x.</p>
              `,
              examples: [
                {
                  problem: `
                    <p>Find the derivative of f(x) = x² at x = 3 using the limit definition.</p>
                  `,
                  solution: `
                    <p>Using the limit definition:</p>
                    <p>f'(3) = lim<sub>h→0</sub> [f(3+h) - f(3)] / h</p>
                    <p>f'(3) = lim<sub>h→0</sub> [(3+h)² - 3²] / h</p>
                    <p>f'(3) = lim<sub>h→0</sub> [9 + 6h + h² - 9] / h</p>
                    <p>f'(3) = lim<sub>h→0</sub> [6h + h²] / h</p>
                    <p>f'(3) = lim<sub>h→0</sub> [6 + h]</p>
                    <p>f'(3) = 6</p>
                    <p>Therefore, the derivative of f(x) = x² at x = 3 is 6, which means the slope of the tangent line to the curve at x = 3 is 6.</p>
                  `,
                },
              ],
            },
            // Other sections...
          ],
          summary: `
            <p>In this lesson, we've covered the fundamental concept of derivatives and various differentiation techniques:</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>The definition of a derivative as a limit</li>
              <li>Basic differentiation rules (constant, power, sum, difference, product, quotient)</li>
              <li>The chain rule for composite functions</li>
            </ul>
            <p>These concepts form the foundation of differential calculus and have numerous applications in solving real-world problems involving rates of change, optimization, and more.</p>
          `,
        },
        videos: [
          {
            title: "Introduction to Derivatives",
            description:
              "A visual explanation of what derivatives represent and how they relate to the slope of a curve.",
            embedId: "rAof9Ld5sOg",
          },
          // Other videos...
        ],
        resources: [
          {
            title: "Derivatives Formula Sheet",
            type: "pdf",
          },
          // Other resources...
        ],
      },
      "introduction-to-limits": {
        title: "Introduction to Limits",
        description: "Understand the concept of limits and their importance in calculus",
        category: "Calculus",
        level: "Beginner",
        content: {
          introduction: `
            <p>Limits are the foundation of calculus. They allow us to understand how functions behave as their inputs approach certain values, even if the function is not defined at those values.</p>
            <p>In this lesson, we'll explore what limits are, how to evaluate them, and why they're so important in mathematics.</p>
          `,
          sections: [
            // Sections...
          ],
          summary: `
            <p>In this lesson, we've covered the fundamental concept of limits:</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>The definition and notation of limits</li>
              <li>Various techniques for evaluating limits</li>
              <li>One-sided limits and their relationship to two-sided limits</li>
            </ul>
            <p>Limits are essential for understanding continuity, derivatives, and integrals—the core concepts of calculus. They allow us to analyze functions at points where they're not defined and to understand their behavior as inputs approach certain values.</p>
          `,
        },
        videos: [
          {
            title: "Understanding Limits Intuitively",
            description: "A visual approach to understanding what limits represent and why they matter.",
            embedId: "kfF40MiS7zA",
          },
          {
            title: "Techniques for Evaluating Limits",
            description: "Learn various methods to solve limit problems with step-by-step examples.",
            embedId: "BnVoqfFA8iY",
          },
        ],
        resources: [
          {
            title: "Limits Cheat Sheet",
            type: "pdf",
          },
          {
            title: "Practice Problems with Solutions",
            type: "pdf",
          },
          {
            title: "Interactive Limit Explorer",
            type: "tool",
          },
        ],
      },
    },
    physics: {
      "newtons-laws": {
        title: "Newton's Laws of Motion",
        description: "Understand the fundamental principles that govern the motion of objects",
        category: "Classical Mechanics",
        level: "Beginner",
        content: {
          introduction: `
            <p>Newton's Laws of Motion, formulated by Sir Isaac Newton in the 17th century, are three fundamental laws that form the foundation of classical mechanics. These laws describe the relationship between the motion of an object and the forces acting on it.</p>
            <p>In this lesson, we'll explore each of Newton's three laws, understand their implications, and see how they apply to real-world situations.</p>
          `,
          sections: [
            {
              title: "Newton's First Law: Law of Inertia",
              content: `
                <p>Newton's First Law states that an object at rest will remain at rest, and an object in motion will remain in motion with the same speed and in the same direction, unless acted upon by an unbalanced force.</p>
                <p>This law is often referred to as the "Law of Inertia." Inertia is the resistance of any physical object to a change in its state of motion or rest.</p>
              `,
              examples: [
                {
                  problem: `
                    <p>A 2 kg book is sitting on a horizontal table. The coefficient of static friction between the book and table is 0.3. What minimum horizontal force is needed to start moving the book?</p>
                  `,
                  solution: `
                    <p>For the book to remain at rest, the forces must be balanced. The weight of the book is:</p>
                    <p>W = mg = 2 kg × 9.8 m/s² = 19.6 N</p>
                    <p>The normal force from the table equals the weight: N = 19.6 N</p>
                    <p>The maximum static friction force is:</p>
                    <p>f<sub>s,max</sub> = μ<sub>s</sub>N = 0.3 × 19.6 N = 5.88 N</p>
                    <p>Therefore, a horizontal force greater than 5.88 N is needed to overcome static friction and start moving the book.</p>
                  `,
                },
              ],
            },
            {
              title: "Newton's Second Law: Law of Acceleration",
              content: `
                <p>Newton's Second Law states that the acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.</p>
                <p>F = ma</p>
                <p>Where F is the net force (in Newtons), m is mass (in kilograms), and a is acceleration (in m/s²)</p>
              `,
              examples: [
                {
                  problem: `
                    <p>A 1500 kg car accelerates from rest to 20 m/s in 10 seconds. What is the net force acting on the car?</p>
                  `,
                  solution: `
                    <p>First, we need to find the acceleration of the car:</p>
                    <p>a = Δv/Δt = (20 m/s - 0 m/s)/10 s = 2 m/s²</p>
                    <p>Now we can use Newton's Second Law to find the net force:</p>
                    <p>F = ma = 1500 kg × 2 m/s² = 3000 N</p>
                    <p>Therefore, the net force acting on the car is 3000 N in the direction of motion.</p>
                  `,
                },
              ],
            },
            {
              title: "Newton's Third Law: Law of Action-Reaction",
              content: `
                <p>Newton's Third Law states that for every action, there is an equal and opposite reaction. In other words, when one object exerts a force on a second object, the second object exerts an equal force in the opposite direction on the first object.</p>
              `,
              examples: [
                {
                  problem: `
                    <p>A 70 kg person stands on a 5 kg skateboard and pushes against a wall with a force of 50 N. What is the acceleration of the person and skateboard?</p>
                  `,
                  solution: `
                    <p>When the person pushes against the wall with 50 N, the wall pushes back with 50 N (Newton's Third Law).</p>
                    <p>This 50 N force acts on the combined system of the person and skateboard, whose total mass is:</p>
                    <p>m<sub>total</sub> = 70 kg + 5 kg = 75 kg</p>
                    <p>Using Newton's Second Law:</p>
                    <p>a = F/m = 50 N/75 kg = 0.67 m/s²</p>
                    <p>Therefore, the person and skateboard will accelerate at 0.67 m/s² away from the wall.</p>
                  `,
                },
              ],
            },
          ],
          summary: `
            <p>In this lesson, we've covered Newton's three laws of motion:</p>
            <ol class="list-decimal pl-6 space-y-2">
              <li><strong>First Law (Law of Inertia):</strong> An object will remain at rest or in uniform motion unless acted upon by an external force.</li>
              <li><strong>Second Law (Law of Acceleration):</strong> The acceleration of an object is directly proportional to the net force and inversely proportional to its mass (F = ma).</li>
              <li><strong>Third Law (Law of Action-Reaction):</strong> For every action, there is an equal and opposite reaction.</li>
            </ol>
            <p>These laws form the foundation of classical mechanics and help us understand and predict the motion of objects in our everyday world.</p>
          `,
        },
        videos: [
          {
            title: "Newton's Laws of Motion Explained",
            description: "A clear explanation of all three laws with everyday examples and demonstrations.",
            embedId: "mn34mnnDnKU",
          },
          {
            title: "Applications of Newton's Laws",
            description: "See how Newton's laws apply to real-world situations and problem-solving.",
            embedId: "YiAAE1PCEOk",
          },
        ],
        resources: [
          {
            title: "Newton's Laws Summary Sheet",
            type: "pdf",
          },
          {
            title: "Practice Problems with Solutions",
            type: "pdf",
          },
          {
            title: "Interactive Forces Simulator",
            type: "tool",
          },
        ],
      },
      "reflection-refraction": {
        title: "Reflection and Refraction of Light",
        description: "Understand how light interacts with different media and surfaces",
        category: "Waves and Optics",
        level: "Intermediate",
        content: {
          introduction: `
            <p>Light is a form of electromagnetic radiation that exhibits both wave-like and particle-like properties. When light encounters a boundary between different media, it can undergo reflection, refraction, or both.</p>
            <p>In this lesson, we'll explore the principles of reflection and refraction, understand the laws that govern them, and examine their applications.</p>
          `,
          sections: [
            {
              title: "The Law of Reflection",
              content: `
                <p>When light reflects off a surface, the angle of incidence equals the angle of reflection. This is known as the Law of Reflection.</p>
                <p>θᵢ = θᵣ</p>
                <p>Where θᵢ is the angle of incidence and θᵣ is the angle of reflection, both measured from the normal to the surface.</p>
              `,
              examples: [
                {
                  problem: `
                    <p>A light ray strikes a plane mirror at an angle of 35° to the normal. What is the angle of reflection?</p>
                  `,
                  solution: `
                    <p>According to the Law of Reflection, the angle of reflection equals the angle of incidence:</p>
                    <p>θᵣ = θᵢ = 35°</p>
                    <p>Therefore, the angle of reflection is 35°.</p>
                  `,
                },
              ],
            },
            {
              title: "Snell's Law of Refraction",
              content: `
                <p>When light passes from one medium to another, it changes direction due to the change in speed. This bending of light is called refraction and is described by Snell's Law:</p>
                <p>n₁sin(θ₁) = n₂sin(θ₂)</p>
                <p>Where n₁ and n₂ are the refractive indices of the first and second media, and θ₁ and θ₂ are the angles of incidence and refraction, respectively.</p>
              `,
              examples: [
                {
                  problem: `
                    <p>A light ray travels from air (n = 1.0) into water (n = 1.33) at an angle of incidence of 45°. What is the angle of refraction?</p>
                  `,
                  solution: `
                    <p>Using Snell's Law:</p>
                    <p>n₁sin(θ₁) = n₂sin(θ₂)</p>
                    <p>1.0 × sin(45°) = 1.33 × sin(θ₂)</p>
                    <p>sin(θ₂) = (1.0 × sin(45°)) / 1.33</p>
                    <p>sin(θ₂) = 0.707 / 1.33 = 0.532</p>
                    <p>θ₂ = arcsin(0.532) = 32.0°</p>
                    <p>Therefore, the angle of refraction is 32.0°.</p>
                  `,
                },
              ],
            },
          ],
          summary: `
            <p>In this lesson, we've explored the fundamental principles of reflection and refraction of light:</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>The Law of Reflection: The angle of incidence equals the angle of reflection.</li>
              <li>Snell's Law of Refraction: n₁sin(θ₁) = n₂sin(θ₂), which describes how light bends when passing between different media.</li>
              <li>Applications of these principles in everyday phenomena and optical devices.</li>
            </ul>
            <p>Understanding these principles helps us explain many optical phenomena and design optical instruments like lenses, mirrors, and prisms.</p>
          `,
        },
        videos: [
          {
            title: "Reflection and Refraction Explained",
            description:
              "A clear explanation of the basic principles of reflection and refraction with demonstrations.",
            embedId: "gDA_nDXM-ck",
          },
          {
            title: "Snell's Law and Total Internal Reflection",
            description: "Learn how to apply Snell's Law and understand the conditions for total internal reflection.",
            embedId: "UXeR3iU35q4",
          },
        ],
        resources: [
          {
            title: "Reflection and Refraction Formula Sheet",
            type: "pdf",
          },
          {
            title: "Practice Problems with Solutions",
            type: "pdf",
          },
          {
            title: "Interactive Ray Diagram Simulator",
            type: "tool",
          },
        ],
      },
    },
    "computer-science": {
      "intro-programming": {
        title: "Introduction to Programming",
        description: "Learn the basics of programming concepts and computational thinking",
        category: "Computer Science",
        level: "Beginner",
        content: {
          introduction: `
            <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. These instructions can be written in various programming languages, each with its own syntax and features.</p>
            <p>In this lesson, we'll explore the fundamental concepts of programming, understand how computers execute code, and learn about the building blocks that make up all computer programs.</p>
          `,
          sections: [
            {
              title: "What is Programming?",
              content: `
                <p>Programming is essentially the process of communicating with computers. It involves:</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li>Analyzing problems and breaking them down into steps</li>
                  <li>Designing solutions using algorithms (step-by-step procedures)</li>
                  <li>Implementing these solutions in a programming language</li>
                  <li>Testing and debugging to ensure the program works correctly</li>
                </ul>
              `,
              examples: [
                {
                  problem: `
                    <p>Consider a simple problem: calculating the average of three numbers. How would we approach this programmatically?</p>
                  `,
                  solution: `
                    <p>Here's how we might solve this problem in Python:</p>
                    <pre class="bg-gray-100 p-4 rounded-md">
# Input three numbers
num1 = 10
num2 = 20
num3 = 30

# Calculate the sum
sum = num1 + num2 + num3

# Calculate the average
average = sum / 3

# Display the result
print("The average is:", average)
                    </pre>
                  `,
                },
              ],
            },
          ],
          summary: `
            <p>In this lesson, we've covered the fundamental concepts of programming:</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>What programming is and how it bridges human thinking with computer operations</li>
              <li>Basic programming concepts like variables, data types, operators, control structures, and functions</li>
              <li>Computational thinking as an approach to problem-solving</li>
            </ul>
            <p>These concepts form the foundation of programming in any language. As you continue your journey, you'll build on these fundamentals to create increasingly complex and powerful programs.</p>
          `,
        },
        videos: [
          {
            title: "Introduction to Programming Concepts",
            description: "A beginner-friendly overview of what programming is and how it works.",
            embedId: "zOjov-2OZ0E",
          },
          {
            title: "Computational Thinking Explained",
            description: "Learn how to approach problems like a programmer using computational thinking.",
            embedId: "qbnTZUmm1VQ",
          },
        ],
        resources: [
          {
            title: "Programming Concepts Cheat Sheet",
            type: "pdf",
          },
          {
            title: "Beginner Programming Exercises",
            type: "pdf",
          },
          {
            title: "Online Code Editor",
            type: "tool",
          },
        ],
      },
    },
    logic: {
      "critical-thinking": {
        title: "Critical Thinking and Logical Reasoning",
        description: "Develop skills to analyze arguments and make sound logical decisions",
        category: "Logic",
        level: "Beginner",
        content: {
          introduction: `
            <p>Critical thinking is the ability to think clearly and rationally, understanding the logical connection between ideas. It involves analyzing information objectively and making reasoned judgments.</p>
            <p>In this lesson, we'll explore the fundamentals of critical thinking and logical reasoning, learn how to identify and evaluate arguments, and develop skills to avoid common logical fallacies.</p>
          `,
          sections: [
            {
              title: "What is Critical Thinking?",
              content: `
                <p>Critical thinking involves several key components:</p>
                <ul class="list-disc pl-6 space-y-1">
                  <li><strong>Analysis:</strong> Breaking down complex information into parts</li>
                  <li><strong>Evaluation:</strong> Assessing the credibility and logical strength of arguments</li>
                  <li><strong>Inference:</strong> Drawing conclusions based on evidence</li>
                  <li><strong>Explanation:</strong> Clearly communicating reasoning</li>
                  <li><strong>Self-regulation:</strong> Reflecting on and improving one's own thinking</li>
                </ul>
              `,
              examples: [
                {
                  problem: `
                    <p>Consider the following statement: "Most successful entrepreneurs dropped out of college. Therefore, dropping out of college increases your chances of becoming a successful entrepreneur."</p>
                    <p>What critical thinking skills would you apply to evaluate this argument?</p>
                  `,
                  solution: `
                    <p>To evaluate this argument, we would:</p>
                    <ul class="list-disc pl-6">
                      <li><strong>Analyze:</strong> Identify the premise (most successful entrepreneurs dropped out of college) and the conclusion (dropping out increases chances of success).</li>
                      <li><strong>Evaluate:</strong> Check if the premise is true (is it actually the case that most successful entrepreneurs dropped out?) and if the conclusion logically follows (correlation vs. causation).</li>
                      <li><strong>Consider alternatives:</strong> Are there other factors that might explain both dropping out and success (e.g., certain personality traits or circumstances)?</li>
                      <li><strong>Look for missing information:</strong> What percentage of college dropouts become successful entrepreneurs compared to graduates?</li>
                    </ul>
                    <p>This argument commits the correlation-causation fallacy. Just because two things are correlated (dropout status and entrepreneurial success) doesn't mean one causes the other.</p>
                  `,
                },
              ],
            },
          ],
          summary: `
            <p>In this lesson, we've explored the fundamentals of critical thinking and logical reasoning:</p>
            <ul class="list-disc pl-6 space-y-1">
              <li>The components of critical thinking: analysis, evaluation, inference, explanation, and self-regulation</li>
              <li>The elements of logical reasoning, including premises and conclusions</li>
              <li>Deductive and inductive reasoning approaches</li>
              <li>Common logical fallacies and how to identify them</li>
            </ul>
            <p>Developing these skills takes practice, but they are invaluable for making sound decisions, evaluating information critically, and constructing persuasive arguments.</p>
          `,
        },
        videos: [
          {
            title: "Introduction to Critical Thinking",
            description: "Learn the basics of critical thinking and why it matters in everyday life.",
            embedId: "6OLPL5p0fMg",
          },
          {
            title: "Logical Fallacies Explained",
            description: "A guide to recognizing and avoiding common errors in reasoning.",
            embedId: "Qf03U04rqGQ",
          },
        ],
        resources: [
          {
            title: "Critical Thinking Framework",
            type: "pdf",
          },
          {
            title: "Logical Fallacies Cheat Sheet",
            type: "pdf",
          },
          {
            title: "Practice Exercises with Solutions",
            type: "pdf",
          },
        ],
      },
    },
  }

  // Check if the subject and lesson exist
  const subjectLessons = lessons[subjectSlug as keyof typeof lessons]
  if (!subjectLessons) {
    console.log("Subject not found in fallback lessons:", subjectSlug)
    return null
  }

  const lesson = subjectLessons[lessonSlug as keyof typeof subjectLessons]
  console.log("Found lesson in fallback data:", lesson ? "Yes" : "No")

  return lesson || null
}
