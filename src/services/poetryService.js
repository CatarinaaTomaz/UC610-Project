export async function getAuthors() {
  const res = await fetch("https://poetrydb.org/author")
  if (!res.ok) throw new Error("Erro ao obter autores")
  return await res.json()
}

export async function getPoemsByAuthor(author) {
  const res = await fetch(`https://poetrydb.org/author/${author}`)
  if (!res.ok) throw new Error("Erro ao obter poemas")
  return await res.json()
}
