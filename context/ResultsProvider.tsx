import { createContext, PropsWithChildren, useEffect, useState } from "react"

type Photo = any

export const ResultsContext = createContext({
  photos: [] as Photo[],
  setPhotos: (photos: Photo[]) => {},
  query: "",
  setQuery: (query: string) => {},
})

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const [photos, setPhotos] = useState<Photo[]>([])
  const [query, setQuery] = useState("")

  useEffect(() => {}, [query])

  return (
    <ResultsContext.Provider value={{ photos, setPhotos, query, setQuery }}>
      {children}
    </ResultsContext.Provider>
  )
}
