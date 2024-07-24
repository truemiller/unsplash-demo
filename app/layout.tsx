import "@/styles/globals.css"

import type { Metadata } from "next"

import { FilterProvider } from "@/context/FilterProvider"
import { ResultsProvider } from "@/context/ResultsProvider"
import { SearchProvider } from "@/context/SearchProvider"

export const metadata: Metadata = {
  title: "Unsplash Demo",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>
          <FilterProvider>
            <ResultsProvider>{children}</ResultsProvider>
          </FilterProvider>
        </SearchProvider>
      </body>
    </html>
  )
}
