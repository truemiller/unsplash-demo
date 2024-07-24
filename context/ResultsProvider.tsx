"use client"
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"
import { Basic as BasicPhoto } from "unsplash-js/dist/methods/photos/types"

import { unsplashServerApi } from "@/utils/unsplash"

import { SearchContext } from "./SearchProvider"

export const ResultsContext = createContext({
  photos: [] as BasicPhoto[],
})

export const ResultsProvider = ({ children }: PropsWithChildren) => {
  const { debouncedQuery: query } = useContext(SearchContext)
  const [photos, setPhotos] = useState<BasicPhoto[]>([])

  useEffect(() => {
    unsplashServerApi.search.getPhotos({ query }).then(({ response }) => {
      setPhotos(response?.results ?? [])
    }),
      [query]
  })

  return (
    <ResultsContext.Provider value={{ photos }}>
      {children}
    </ResultsContext.Provider>
  )
}
