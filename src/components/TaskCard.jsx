import { X, GripVertical, Tag } from 'lucide-react'
import { motion } from 'framer-motion'

export default function TaskCard({ id, title, desc, tag, onRemove }) {
  return (
    <motion.div layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
      className="p-3 rounded-xl bg-slate-800/60 border border-white/10 text-slate-200">
      <div className="flex items-start gap-2">
        <GripVertical className="w-4 h-4 text-slate-400 mt-1" />
        <div className="flex-1">
          <div className="font-medium">{title}</div>
          <div className="text-xs text-slate-400 mt-1">{desc}</div>
          <div className="mt-2 inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10">
            <Tag className="w-3 h-3 text-slate-300" />
            <span className="uppercase tracking-wide text-slate-300">{tag}</span>
          </div>
        </div>
        <button onClick={onRemove} className="p-1.5 rounded-md hover:bg-white/5">
          <X className="w-4 h-4 text-slate-300" />
        </button>
      </div>
    </motion.div>
  )
}
