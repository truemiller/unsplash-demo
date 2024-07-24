import { Results } from "@/components/Results"
import { Search } from "@/components/Search"

export default function HomePage() {
  return (
    <main>
      <Search />
      <div id="toolbar" />
      <Results />
      <div id="#pagination" />
    </main>
  )
}
