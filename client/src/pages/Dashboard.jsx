import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Zap, Coins, Users, BookOpen, TrendingUp,
  Search, Bell, LogOut, Settings, ChevronDown,
  Plus, Filter
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import StatsCard from '../components/StatsCard';
import MentorCard from '../components/MentorCard';

// ─── Mock mentor data ─────────────────────────────────────────────────────────
const MOCK_MENTORS = [
  {
    _id: '1', name: 'Arjun Sharma', department: 'CSE — 3rd Year', rating: 4.9,
    skillsCanTeach: [{ name: 'React', proficiency: 'Expert' }, { name: 'Node.js', proficiency: 'Advanced' }, { name: 'MongoDB', proficiency: 'Intermediate' }],
    skillsToLearn: ['UI/UX Design', 'Figma'],
    sessionCost: 2,
  },
  {
    _id: '2', name: 'Priya Nair', department: 'ECE — 2nd Year', rating: 4.8,
    skillsCanTeach: [{ name: 'Python', proficiency: 'Advanced' }, { name: 'ML Basics', proficiency: 'Intermediate' }],
    skillsToLearn: ['Web Dev', 'React'],
    sessionCost: 1,
  },
  {
    _id: '3', name: 'Rohan Verma', department: 'MECH — 4th Year', rating: 5.0,
    skillsCanTeach: [{ name: 'AutoCAD', proficiency: 'Expert' }, { name: 'SolidWorks', proficiency: 'Advanced' }],
    skillsToLearn: ['Python', 'Data Analysis'],
    sessionCost: 2,
  },
  {
    _id: '4', name: 'Kavya Reddy', department: 'CSE — 3rd Year', rating: 4.7,
    skillsCanTeach: [{ name: 'DSA', proficiency: 'Expert' }, { name: 'Java', proficiency: 'Advanced' }, { name: 'C++', proficiency: 'Expert' }],
    skillsToLearn: ['DevOps', 'Docker'],
    sessionCost: 3,
  },
  {
    _id: '5', name: 'Aditya Kumar', department: 'IT — 2nd Year', rating: 4.6,
    skillsCanTeach: [{ name: 'UI/UX', proficiency: 'Advanced' }, { name: 'Figma', proficiency: 'Expert' }],
    skillsToLearn: ['React', 'JavaScript'],
    sessionCost: 2,
  },
  {
    _id: '6', name: 'Divya Menon', department: 'CSE — 4th Year', rating: 4.9,
    skillsCanTeach: [{ name: 'DevOps', proficiency: 'Advanced' }, { name: 'Docker', proficiency: 'Intermediate' }, { name: 'AWS', proficiency: 'Intermediate' }],
    skillsToLearn: ['Mobile Dev', 'Flutter'],
    sessionCost: 3,
  },
];

const TRENDING_SKILLS = ['React', 'DSA', 'Python', 'ML', 'UI/UX', 'Java', 'DevOps'];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const filteredMentors = MOCK_MENTORS.filter(m => {
    const matchesSearch = search === '' ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.skillsCanTeach.some(s => s.name.toLowerCase().includes(search.toLowerCase()));
    const matchesFilter = activeFilter === 'All' ||
      m.skillsCanTeach.some(s => s.name === activeFilter);
    return matchesSearch && matchesFilter;
  });

  const initials = user?.name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U';

  return (
    <div className="min-h-screen bg-slate-950">
      {/* ── Sidebar (simple top nav for this version) ─────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Zap size={13} className="text-white" fill="white" />
            </div>
            <span className="font-bold text-slate-100 hidden sm:block">
              Skill<span className="text-indigo-400">Swap</span>
            </span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-lg relative">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search mentors or skills..."
              className="input-field pl-9 py-2 text-sm h-9"
            />
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors relative">
              <Bell size={16} />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500" />
            </button>

            <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">{initials}</span>
              </div>
              <div className="hidden sm:block">
                <p className="text-xs font-medium text-slate-200 leading-none">{user?.name}</p>
                <p className="text-xs text-slate-500 leading-none mt-0.5 truncate max-w-[120px]">{user?.email}</p>
              </div>
              <button onClick={handleLogout} className="p-1.5 rounded-lg text-slate-500 hover:text-red-400 hover:bg-red-500/10 transition-colors ml-1" title="Logout">
                <LogOut size={14} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* ── Welcome ──────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-slate-100 mb-1">
            Good morning, {user?.name?.split(' ')[0]} 👋
          </h1>
          <p className="text-sm text-slate-400">
            You have <span className="text-indigo-400 font-semibold">{user?.knowledgeCredits || 5} Knowledge Credits</span> ready to spend.
          </p>
        </motion.div>

        {/* ── Stats Row ────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            label="Knowledge Credits"
            value={user?.knowledgeCredits || 5}
            icon={Coins}
            accentClass="text-indigo-400"
            bgClass="bg-indigo-500/10"
            change="Earn by teaching"
            delay={0}
          />
          <StatsCard
            label="Skills Teaching"
            value={user?.skillsCanTeach?.length || 0}
            icon={TrendingUp}
            accentClass="text-emerald-400"
            bgClass="bg-emerald-500/10"
            change="Active skills"
            delay={0.05}
          />
          <StatsCard
            label="Skills Learning"
            value={user?.skillsToLearn?.length || 0}
            icon={BookOpen}
            accentClass="text-violet-400"
            bgClass="bg-violet-500/10"
            change="In your list"
            delay={0.1}
          />
          <StatsCard
            label="Available Mentors"
            value={MOCK_MENTORS.length}
            icon={Users}
            accentClass="text-blue-400"
            bgClass="bg-blue-500/10"
            change="On campus"
            delay={0.15}
          />
        </div>

        {/* ── Trending Skills ───────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-semibold text-slate-300">Trending Skills</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {['All', ...TRENDING_SKILLS].map((skill) => (
              <button
                key={skill}
                onClick={() => setActiveFilter(skill)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                  activeFilter === skill
                    ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                    : 'border-slate-700 text-slate-400 hover:border-indigo-500/50 hover:text-indigo-400 hover:bg-indigo-500/5'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Available Mentors ─────────────────────────────────────────────── */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-100">Available Mentors</h2>
              <p className="text-xs text-slate-500 mt-0.5">{filteredMentors.length} mentors found</p>
            </div>
            <button className="btn-secondary text-xs py-2 px-4">
              <Filter size={13} />
              Filter
            </button>
          </div>

          {filteredMentors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMentors.map((mentor, i) => (
                <MentorCard key={mentor._id} mentor={mentor} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 card">
              <Search size={32} className="text-slate-700 mx-auto mb-3" />
              <p className="text-slate-400 text-sm font-medium">No mentors found</p>
              <p className="text-slate-600 text-xs mt-1">Try a different search or filter</p>
              <button onClick={() => { setSearch(''); setActiveFilter('All'); }} className="mt-4 text-xs text-indigo-400 hover:underline">
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* ── CTA: Complete Profile ─────────────────────────────────────────── */}
        {!user?.bio && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 card p-6 border-indigo-500/20 bg-indigo-950/30 flex items-center justify-between gap-4 flex-wrap"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
                <Settings size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-200">Complete your profile</p>
                <p className="text-xs text-slate-500">Add your skills to attract mentors and earn bonus credits</p>
              </div>
            </div>
            <button className="btn-primary text-xs py-2 px-5 flex-shrink-0">
              <Plus size={13} /> Add Skills
            </button>
          </motion.div>
        )}
      </main>
    </div>
  );
}
