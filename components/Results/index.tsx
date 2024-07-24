"use client"
import { Basic as BasicPhoto } from "unsplash-js/dist/methods/photos/types"

import { useResults } from "@/hooks/useResults"

import { Photo } from "./Photo"

export const Results = () => {
  const { photos } = useResults()

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {photos.map((photo: BasicPhoto) => (
        <Photo key={photo.id} {...photo} />
      ))}
    </section>
  )
}
