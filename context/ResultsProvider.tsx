"use client"
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"
import { Basic as BasicPhoto } from "unsplash-js/dist/methods/photos/types"

import { searchPhotos } from "@/actions/unsplash"

import { SearchContext } from "./SearchProvider"

export const ResultsContext = createContext({
  photos: [] as BasicPhoto[],
})

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const { debouncedQuery: query } = useContext(SearchContext)
  const [photos, setPhotos] = useState<BasicPhoto[]>([])

  useEffect(() => {
    searchPhotos(query).then((photos) => {
      setPhotos(photos)
    })
  }, [query])

  return (
    <ResultsContext.Provider value={{ photos }}>
      {children}
    </ResultsContext.Provider>
  )
}
