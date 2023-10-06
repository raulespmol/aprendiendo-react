import './App.css'

export function App () {
  return (
    <section className="follow-card">
      <header className="follow-card-header">
        <img src="https://unavatar.io/raulespmol" alt="Avatar" className="follow-card-avatar"/>
        <div className="follow-card-info">
          <strong className="user-name">Raúl Espinoza</strong>
          <span className="user">@raulespmol</span>
        </div>
      </header>

      <aside>
        <button className="follow-button">
          Seguir
        </button>
      </aside>
    </section>
  )
}