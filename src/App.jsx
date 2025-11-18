import Navbar from './components/Navbar'
import Board from './components/Board'

function App() {
  const handleAddColumn = () => {
    const event = new CustomEvent('addColumn')
    window.dispatchEvent(event)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="fixed inset-0 -z-10 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-violet-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-[28rem] h-[28rem] bg-emerald-500/20 blur-3xl rounded-full" />
      </div>

      <Navbar onAddColumn={handleAddColumn} />
      <main>
        <Board />
      </main>
    </div>
  )
}

export default App