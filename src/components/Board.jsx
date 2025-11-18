import { useState } from 'react'
import Column from './Column'
import { motion, AnimatePresence } from 'framer-motion'

export default function Board() {
  const [columns, setColumns] = useState([
    { id: 'c1', title: 'To Do', color: 'from-sky-500 to-blue-600' },
    { id: 'c2', title: 'In Progress', color: 'from-violet-500 to-purple-600' },
    { id: 'c3', title: 'Done', color: 'from-emerald-500 to-green-600' },
  ])

  const addColumn = () => {
    const id = Math.random().toString(36).slice(2, 7)
    setColumns((prev) => [
      ...prev,
      { id, title: `List ${prev.length + 1}`, color: 'from-rose-500 to-pink-600' },
    ])
  }

  const removeColumn = (id) => {
    setColumns((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_90%_10%,rgba(168,85,247,0.15),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.15),transparent_25%)]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid md:grid-cols-3 gap-4">
            {columns.map((col) => (
              <Column key={col.id} id={col.id} title={col.title} color={col.color} onRemove={() => removeColumn(col.id)} />
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="mt-6 text-center">
          <button onClick={addColumn} className="px-4 py-2 rounded-lg border border-white/10 text-slate-200 hover:bg-white/5">Add another list</button>
        </div>
      </div>
    </div>
  )
}
