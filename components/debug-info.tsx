"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function DebugInfo({ data }: { data: any }) {
  const [showDebug, setShowDebug] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button variant="outline" size="sm" onClick={() => setShowDebug(!showDebug)} className="bg-white shadow-md">
        {showDebug ? "Hide Debug" : "Show Debug"}
      </Button>

      {showDebug && (
        <div className="mt-2 p-4 bg-white border rounded shadow-lg max-w-lg max-h-96 overflow-auto">
          <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}
