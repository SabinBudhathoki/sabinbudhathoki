import { useState } from "react"
import { Button } from "@/components/ui/button"

interface LessonContentProps {
  content: {
    introduction: string
    sections: {
      title: string
      content: string
      examples?: {
        problem: string
        solution: string
      }[]
    }[]
    summary: string
  }
}

export default function LessonContent({ content }: LessonContentProps) {
  const [showSolutions, setShowSolutions] = useState<Record<string, boolean>>({})

  const toggleSolution = (sectionIndex: number, exampleIndex: number) => {
    const key = `${sectionIndex}-${exampleIndex}`
    setShowSolutions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="lesson-content prose max-w-none">
      <h2 className="text-2xl font-bold mb-4">Introduction</h2>
      <div className="mb-8" dangerouslySetInnerHTML={{ __html: content.introduction }} />

      {content.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div className="mb-6" dangerouslySetInnerHTML={{ __html: section.content }} />

          {section.examples && section.examples.length > 0 && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">Examples</h3>
              <div className="space-y-6">
                {section.examples.map((example, exampleIndex) => {
                  const key = `${sectionIndex}-${exampleIndex}`
                  return (
                    <div key={exampleIndex} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-bold mb-2">Example {exampleIndex + 1}</h4>
                      <div className="mb-4" dangerouslySetInnerHTML={{ __html: example.problem }} />

                      {!showSolutions[key] ? (
                        <Button variant="outline" size="sm" onClick={() => toggleSolution(sectionIndex, exampleIndex)}>
                          Show Solution
                        </Button>
                      ) : (
                        <div>
                          <div className="p-4 bg-white rounded-md mb-2">
                            <h5 className="font-bold mb-2">Solution:</h5>
                            <div dangerouslySetInnerHTML={{ __html: example.solution }} />
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleSolution(sectionIndex, exampleIndex)}
                          >
                            Hide Solution
                          </Button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      ))}

      <h2 className="text-2xl font-bold mb-4">Summary</h2>
      <div dangerouslySetInnerHTML={{ __html: content.summary }} />

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Practice Questions</h3>
        <p className="mb-4">Test your understanding of the concepts covered in this lesson.</p>
        <Button>Start Practice Quiz</Button>
      </div>
    </div>
  )
}
