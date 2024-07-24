import { createApi } from "unsplash-js"

export const unsplashServerApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY ?? "",
})
