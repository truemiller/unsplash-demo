import { createContext, PropsWithChildren, useState } from "react"

export const SearchContext = createContext({
  query: "",
  setQuery: (query: string) => {},
})

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [query, setQuery] = useState("")

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
