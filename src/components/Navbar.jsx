import { useState } from 'react'
import { Menu, Plus, LayoutGrid } from 'lucide-react'

export default function Navbar({ onAddColumn }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-white/5" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu className="w-5 h-5 text-slate-200" />
          </button>
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold tracking-tight">OnlyCards — Inspired</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onAddColumn} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition">
            <Plus className="w-4 h-4" /> New List
          </button>
        </div>
      </div>
      {open && (
        <div className="max-w-6xl mx-auto px-4 pb-4 text-sm text-slate-300">
          Create boards, lists, and cards. Drag to reorder. This is an original recreation, not an exact clone.
        </div>
      )}
    </header>
  )
}
