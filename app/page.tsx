import { Search } from "@/components/Search"

export default function HomePage() {
  return (
    <main>
      <Search />
      <div id="toolbar" />
      <section className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3"></section>
      <div id="#pagination" />
    </main>
  )
}
