import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, step, accentColor = 'indigo', delay = 0 }) {
  const colorMap = {
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  };

  const iconClass = colorMap[accentColor] || colorMap.indigo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="card p-6 group hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
    >
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 group-hover:to-transparent transition-all duration-500 rounded-2xl" />

      {/* Step badge */}
      {step && (
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
          <span className="text-xs text-slate-500 font-semibold">{step}</span>
        </div>
      )}

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl border ${iconClass} mb-4`}>
        {Icon && <Icon size={20} />}
      </div>

      <h3 className="font-semibold text-slate-100 text-base mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
