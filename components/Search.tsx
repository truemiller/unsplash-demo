import { useSearch } from "@/hooks/useSearch"

export const Search = () => {
  const { query, setQuery } = useSearch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return <input type="text" value={query} onChange={handleChange} />
}
