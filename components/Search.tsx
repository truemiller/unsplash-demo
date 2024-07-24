"use client"
import { useSearch } from "@/hooks/useSearch"

export const Search = () => {
  const { query, setQuery } = useSearch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      onSubmit={handleChange}
      className="rounded-md border border-gray-300 p-2"
      placeholder="Search ..."
    />
  )
}
