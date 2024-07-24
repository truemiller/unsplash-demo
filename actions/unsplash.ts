"use server"

import { unsplash } from "@/utils/unsplash"

export const searchPhotos = async (query: string) => {
  const { response } = await unsplash.search.getPhotos({ query })
  return response?.results ?? []
}
