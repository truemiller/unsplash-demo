import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"

import { SearchContext } from "./SearchProvider"

type Photo = any

export const ResultsContext = createContext({
  photos: [] as Photo[],
})

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const { debouncedQuery: query } = useContext(SearchContext)

  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {}, [query])

  return (
    <ResultsContext.Provider value={{ photos }}>
      {children}
    </ResultsContext.Provider>
  )
}
