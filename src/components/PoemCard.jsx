function PoemCard({ poem }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{poem.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {poem.author}
        </h6>

        <pre style={{ whiteSpace: "pre-wrap" }}>
          {poem.lines.join("\n")}
        </pre>
      </div>
    </div>
  )
}

export default PoemCard
