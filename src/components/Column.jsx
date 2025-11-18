import { useState } from 'react'
import { Plus, X, GripVertical } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import TaskCard from './TaskCard'

export default function Column({ id, title, color, onRemove }) {
  const [name, setName] = useState(title)
  const [adding, setAdding] = useState(false)
  const [cards, setCards] = useState([
    { id: 't1', title: 'Design landing section', desc: 'Hero, features, CTA', tag: 'design' },
    { id: 't2', title: 'Hook up API', desc: 'Connect lists and cards', tag: 'backend' },
  ])

  const addCard = () => {
    const id = Math.random().toString(36).slice(2,7)
    setCards((c) => [...c, { id, title: 'New card', desc: 'Describe your task', tag: 'task' }])
    setAdding(false)
  }

  const removeCard = (id) => setCards((c) => c.filter((x) => x.id !== id))

  return (
    <motion.div layout className="bg-slate-900/40 border border-white/10 rounded-2xl p-3 backdrop-blur">
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-1.5 h-6 rounded-full bg-gradient-to-b ${color}`} />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 bg-transparent text-white font-semibold text-sm focus:outline-none"
        />
        <button onClick={onRemove} className="p-1.5 rounded-md hover:bg-white/5">
          <X className="w-4 h-4 text-slate-300" />
        </button>
      </div>

      <div className="space-y-3">
        <AnimatePresence>
          {cards.map((c) => (
            <TaskCard key={c.id} {...c} onRemove={() => removeCard(c.id)} />
          ))}
        </AnimatePresence>

        {adding ? (
          <div className="p-3 rounded-xl border border-dashed border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <GripVertical className="w-4 h-4 text-slate-400" />
              <input placeholder="Card title" className="flex-1 bg-transparent text-sm text-white focus:outline-none" />
            </div>
            <div className="mt-2 flex gap-2">
              <button onClick={addCard} className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-xs">Add</button>
              <button onClick={() => setAdding(false)} className="px-3 py-1.5 rounded-md bg-white/10 text-slate-200 text-xs">Cancel</button>
            </div>
          </div>
        ) : (
          <button onClick={() => setAdding(true)} className="w-full inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-slate-200 text-sm">
            <Plus className="w-4 h-4" /> Add a card
          </button>
        )}
      </div>
    </motion.div>
  )
}
