"use server"

import { SearchParams } from "unsplash-js/dist/methods/search"

import { unsplash } from "@/utils/unsplash"

export const searchPhotos = async ({ query = "" }: SearchParams) => {
  try {
    const { response } = await unsplash.search.getPhotos({
      query,
    })
    return response?.results ?? []
  } catch (error) {
    console.error(error)
  }
  return []
}

export const listPhotos = async ({ perPage = 12, page = 1 }) => {
  try {
    const { response } = await unsplash.photos.list({ perPage, page })
    return response ?? []
  } catch (error) {
    console.error(error)
  }
  return []
}
