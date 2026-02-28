import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, Users, BookOpen, Award,
  RefreshCw, Shield, TrendingUp, Star, Github
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';

// ─── Data ─────────────────────────────────────────────────────────────────────
const HOW_IT_WORKS = [
  {
    step: '01',
    icon: Users,
    title: 'Create Your Profile',
    description: 'List the skills you can teach — from DSA to Figma — and tell us what you want to learn.',
    accentColor: 'indigo',
  },
  {
    step: '02',
    icon: RefreshCw,
    title: 'Exchange Skills',
    description: 'Match with a peer who complements your skill set. Teach what you know, learn what you need.',
    accentColor: 'violet',
  },
  {
    step: '03',
    icon: Award,
    title: 'Earn Credits',
    description: 'Each session earns you Knowledge Credits. Spend them to unlock more mentoring sessions.',
    accentColor: 'blue',
  },
];

const FEATURES = [
  { icon: Shield, title: 'SRM Verified', description: 'Only @srmist.edu.in addresses. Every user is a real SRM student.', accentColor: 'indigo' },
  { icon: TrendingUp, title: 'Gamified Learning', description: 'Knowledge Credits incentivize quality teaching and consistent learning.', accentColor: 'violet' },
  { icon: BookOpen, title: 'Skill Matching', description: 'Our algorithm pairs students with complementary skill sets automatically.', accentColor: 'blue' },
  { icon: Zap, title: 'Instant Connect', description: 'Built-in session booking and real-time chat. No friction, just learning.', accentColor: 'cyan' },
];

const TESTIMONIALS = [
  { name: 'Arjun Sharma', dept: 'CSE — 3rd Year', text: 'Traded my React skills for Graphic Design sessions. The credit system is genius.', avatar: 'AS', rating: 5 },
  { name: 'Priya Menon', dept: 'ECE — 2nd Year', text: 'Found a DSA mentor within minutes. Cleared my placements because of SkillSwap.', avatar: 'PM', rating: 5 },
  { name: 'Rohan Verma', dept: 'MECH — 4th Year', text: 'Taught CAD, learned Python. The peer-to-peer model genuinely works.', avatar: 'RV', rating: 5 },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function LandingPage() {
  return (
    <div className="min-h-screen gradient-mesh">
      <Navbar />

      {/* ── Hero Section ───────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-4 overflow-hidden">
        {/* Decorative orb */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-10 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-slow" />
            Now live for SRM students
            <ArrowRight size={11} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-50 leading-[1.08] tracking-tight mb-6"
          >
            Learn from peers.
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Teach what you know.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            SkillSwap is a peer-to-peer skill exchange platform for SRM students.
            Trade your expertise for Knowledge Credits and unlock mentorship from
            classmates who've mastered what you need next.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/register" className="btn-primary px-8 py-3.5 text-sm shadow-2xl shadow-indigo-500/25">
              Get Started Free
              <ArrowRight size={15} />
            </Link>
            <a href="#how-it-works" className="btn-secondary px-8 py-3.5 text-sm">
              How it works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2"
          >
            <div className="flex -space-x-2">
              {['AS', 'PM', 'RV', 'KL', 'DM'].map((initials, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-slate-900 bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center"
                >
                  <span className="text-white text-[9px] font-bold">{initials}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-400 ml-1">
              <Star size={11} className="text-amber-400 fill-amber-400" />
              <strong className="text-slate-200">200+</strong> SRM students already swapping
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">How SkillSwap works</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              Three simple steps. Zero cost. Infinite knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {HOW_IT_WORKS.map((item, i) => (
              <FeatureCard key={item.step} {...item} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ───────────────────────────────────────────────────────── */}
      <section id="features" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-3">Why SkillSwap</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Built for campus life</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-3">Loved by SRM students</h2>
            <p className="text-slate-400 text-sm">Real reviews from real students on campus.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-200">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.dept}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center card p-12 border-indigo-500/20 bg-gradient-to-br from-indigo-950/60 to-slate-900/60 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent pointer-events-none" />
          <Zap size={32} className="text-indigo-400 mx-auto mb-5" />
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
            Ready to start swapping?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            Join hundreds of SRM students who are accelerating their careers by
            teaching what they know and learning what they need.
          </p>
          <Link to="/register" className="btn-primary px-10 py-4 text-sm shadow-2xl shadow-indigo-500/30">
            Create Free Account
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-800/60 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <Zap size={12} className="text-white" fill="white" />
            </div>
            <span className="text-sm font-bold text-slate-400">
              Skill<span className="text-indigo-400">Swap</span>
            </span>
          </div>
          <p className="text-xs text-slate-600">
            Built for SRM Institute of Science & Technology · Minor Project 2024
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-600 hover:text-slate-400 transition-colors"><Github size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
