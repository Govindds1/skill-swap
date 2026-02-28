import React from 'react';
import { motion } from 'framer-motion';
import { Star, Coins, BookOpen } from 'lucide-react';

const proficiencyColor = {
  Beginner: 'bg-emerald-500/10 text-emerald-400',
  Intermediate: 'bg-blue-500/10 text-blue-400',
  Advanced: 'bg-violet-500/10 text-violet-400',
  Expert: 'bg-amber-500/10 text-amber-400',
};

export default function MentorCard({ mentor, index = 0 }) {
  const initials = mentor.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  const avatarColors = ['from-indigo-500 to-violet-500', 'from-blue-500 to-cyan-400', 'from-violet-500 to-pink-500', 'from-amber-400 to-orange-500'];
  const colorClass = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="card p-5 group hover:border-indigo-500/30 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center flex-shrink-0 shadow-lg`}>
          <span className="text-white font-bold text-sm">{initials}</span>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-slate-100 text-sm truncate">{mentor.name}</h3>
            <div className="flex items-center gap-1 flex-shrink-0">
              <Star size={11} className="text-amber-400 fill-amber-400" />
              <span className="text-xs text-slate-400">{mentor.rating}</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 truncate">{mentor.department}</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mt-4">
        <div className="flex items-center gap-1.5 mb-2">
          <BookOpen size={11} className="text-slate-500" />
          <span className="text-xs text-slate-500 font-medium">Can teach</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {mentor.skillsCanTeach.slice(0, 3).map((skill) => (
            <span
              key={skill.name}
              className={`badge ${proficiencyColor[skill.proficiency] || 'bg-slate-700 text-slate-300'}`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Coins size={13} className="text-indigo-400" />
          <span className="text-xs text-slate-400">
            <span className="text-indigo-400 font-semibold">{mentor.sessionCost}</span> credits/session
          </span>
        </div>
        <button className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold hover:underline transition-colors">
          Connect →
        </button>
      </div>
    </motion.div>
  );
}
