import { createContext, PropsWithChildren, useEffect, useState } from "react"

import { useDebounce } from "@/hooks/useDebounce"

export const SearchContext = createContext({
  query: "",
  setQuery: (query: string) => {},
})

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState("")

  //   TODO: Implement useDebounce, and call API with debounced query
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    setQuery(debouncedQuery)
  }, [debouncedQuery, setQuery])

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
