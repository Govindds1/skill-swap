import React from 'react';
import { motion } from 'framer-motion';

export default function StatsCard({ label, value, icon: Icon, change, accentClass = 'text-indigo-400', bgClass = 'bg-indigo-500/10', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay }}
      className="card p-5"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-slate-500 font-medium mb-1">{label}</p>
          <p className={`text-3xl font-bold ${accentClass}`}>{value}</p>
          {change && (
            <p className="text-xs text-slate-500 mt-1">{change}</p>
          )}
        </div>
        <div className={`w-10 h-10 rounded-xl ${bgClass} flex items-center justify-center`}>
          {Icon && <Icon size={18} className={accentClass} />}
        </div>
      </div>
    </motion.div>
  );
}
