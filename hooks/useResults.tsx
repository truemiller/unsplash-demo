import { useContext } from "react"

import { ResultsContext } from "@/context/ResultsProvider"

export const useResults = () => useContext(ResultsContext)
