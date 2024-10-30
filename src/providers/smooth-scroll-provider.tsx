"use client"

import * as React from "react"

interface SmoothScrollContextType {
  // Add any smooth scroll context properties here
}

const SmoothScrollContext = React.createContext<SmoothScrollContextType | undefined>(undefined)

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollContext.Provider value={{}}>
      {children}
    </SmoothScrollContext.Provider>
  )
}
