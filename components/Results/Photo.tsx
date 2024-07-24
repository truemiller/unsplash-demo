import Image from "next/image"
import { Basic as BasicPhoto } from "unsplash-js/dist/methods/photos/types"

export const Photo = (photoData: BasicPhoto) => {
  const altFallback =
    photoData.alt_description ?? photoData.description ?? "Unsplash Photo"

  const maxDimension = Math.max(photoData.width, photoData.height)

  return (
    <figure className="aspect-square w-full overflow-hidden rounded-xl border">
      <Image
        src={photoData.urls.regular}
        alt={altFallback}
        width={maxDimension}
        height={maxDimension}
        placeholder="blur"
        blurDataURL={photoData.urls.small}
        className="relative h-full w-full object-cover"
      />
    </figure>
  )
}
