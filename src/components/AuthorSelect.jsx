function AuthorSelect({ authors, onChange }) {
  return (
    <select className="form-select mb-3" onChange={onChange}>
      <option value="">Seleciona um autor</option>
      {authors.map((a, i) => (
        <option key={i} value={a}>
          {a}
        </option>
      ))}
    </select>
  )
}

export default AuthorSelect
