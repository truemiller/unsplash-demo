"use client"
import { createContext, PropsWithChildren, useState } from "react"

export const SearchContext = createContext({
  query: "",
  debouncedQuery: "",
  setQuery: (query: string) => {},
})

const DEBOUNCE_DELAY = 300

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState("")

  // TODO: debounce the query
  const debouncedQuery = query

  return (
    <SearchContext.Provider value={{ query, setQuery, debouncedQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
