import { useContext } from "react"

import { SearchContext } from "@/context/SearchProvider"

import { useDebounce } from "./useDebounce"

export const useSearch = () => {
  const { query, setQuery } = useContext(SearchContext)

  //   TODO: Implement useDebounce, and call API with debounced query
  const debouncedQuery = useDebounce(query, 500)

  return { query, setQuery }
}
