'use client'

import * as React from 'react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { SmoothScrollProvider } from './smooth-scroll-provider'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </NextThemeProvider>
  )
} 