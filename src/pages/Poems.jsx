import { useEffect, useState } from "react"
import { getAuthors, getPoemsByAuthor } from "../services/poetryService"
import AuthorSelect from "../components/AuthorSelect"
import PoemCard from "../components/PoemCard"

function Poems() {
  const [authors, setAuthors] = useState([])
  const [poems, setPoems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadAuthors() {
      try {
        const data = await getAuthors()
        setAuthors(data.authors)
      } catch (e) {
        setError(e.message)
      }
    }
    loadAuthors()
  }, [])

  async function handleAuthorChange(e) {
    const author = e.target.value
    if (!author) return

    try {
      setLoading(true)
      setPoems([])
      const data = await getPoemsByAuthor(author)
      setPoems(data.slice(0, 5)) // limitar para não pesar
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (error) return <p className="text-danger">{error}</p>

  return (
    <>
      <AuthorSelect authors={authors} onChange={handleAuthorChange} />

      {loading && <p>⏳ A carregar poemas...</p>}

      {poems.map((p, i) => (
        <PoemCard key={i} poem={p} />
      ))}
    </>
  )
}

export default Poems
