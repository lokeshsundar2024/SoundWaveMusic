"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Filter, Music, PlayCircle, PlusCircle, User, X } from "lucide-react";
import Link from "next/link";

// Mock Data
const classesData = [
  { id: 1, title: "Foundations of Fingerstyle", instrument: "Guitar", level: "Beginner", day: "Monday", time: "17:00 - 18:00", instructor: "Murali Bhat" },
  { id: 2, title: "Classical Sonata Mastery", instrument: "Piano", level: "Advanced", day: "Monday", time: "18:30 - 20:00", instructor: "Murali Bhat" },
  { id: 3, title: "Rhythm & Harmony", instrument: "Guitar", level: "Intermediate", day: "Tuesday", time: "16:00 - 17:30", instructor: "Murali Bhat" },
  { id: 4, title: "Piano for Beginners", instrument: "Piano", level: "Beginner", day: "Wednesday", time: "17:00 - 18:00", instructor: "Murali Bhat" },
  { id: 5, title: "Advanced Polyphony", instrument: "Guitar", level: "Advanced", day: "Thursday", time: "18:00 - 19:30", instructor: "Murali Bhat" },
  { id: 6, title: "Chopin Etudes Focus", instrument: "Piano", level: "Intermediate", day: "Friday", time: "16:30 - 18:00", instructor: "Murali Bhat" },
];

const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const instruments = ["All", "Guitar", "Piano"];

export default function Classes() {
  const [filterLevel, setFilterLevel] = useState("All");
  const [filterInstrument, setFilterInstrument] = useState("All");
  const [selectedClass, setSelectedClass] = useState<any>(null);

  // In a real app, this would check Supabase auth state
  const isLoggedIn = false; 

  const filteredClasses = classesData.filter((c) => {
    if (filterLevel !== "All" && c.level !== filterLevel) return false;
    if (filterInstrument !== "All" && c.instrument !== filterInstrument) return false;
    return true;
  });

  return (
    <div className="bg-[#0F172A] min-h-screen pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Curriculum & <span className="text-[#D4AF37] italic">Timetable</span>
          </motion.h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-12"></div>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
            <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-[#1E293B] shadow-2xl group">
              <Image src="/guitar_class.png" alt="Guitar Class" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80" />
              <h3 className="absolute bottom-4 left-6 text-2xl font-serif text-white font-bold tracking-wide">Guitar Programs</h3>
            </div>
            <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden border border-[#1E293B] shadow-2xl group">
              <Image src="/piano_class.png" alt="Piano Class" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80" />
              <h3 className="absolute bottom-4 left-6 text-2xl font-serif text-white font-bold tracking-wide">Piano Programs</h3>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1E293B]/50 p-6 rounded-2xl border border-[#1E293B] mb-12 flex flex-col md:flex-row gap-8 items-center justify-between backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-white font-medium">Refine Search:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {instruments.map(inst => (
                <button
                  key={inst}
                  onClick={() => setFilterInstrument(inst)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filterInstrument === inst 
                    ? "bg-[#D4AF37] text-[#0F172A]" 
                    : "bg-[#0F172A] border border-[#1E293B] text-[#E2E8F0] hover:border-[#D4AF37]"
                  }`}
                >
                  {inst}
                </button>
              ))}
            </div>
            
            <div className="h-px w-full sm:w-px sm:h-auto bg-[#1E293B]"></div>
            
            <div className="flex flex-wrap gap-2">
              {levels.map(level => (
                <button
                  key={level}
                  onClick={() => setFilterLevel(level)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filterLevel === level 
                    ? "bg-[#E2E8F0] text-[#0F172A]" 
                    : "bg-[#0F172A] border border-[#1E293B] text-[#E2E8F0] hover:border-[#E2E8F0]"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Timetable Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((c) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-[#0a0f1d] border border-[#1E293B] rounded-xl overflow-hidden hover:border-[#D4AF37]/50 transition-colors group cursor-pointer"
                onClick={() => setSelectedClass(c)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      c.level === 'Beginner' ? 'bg-green-900/30 text-green-400 border border-green-800' :
                      c.level === 'Intermediate' ? 'bg-yellow-900/30 text-yellow-400 border border-yellow-800' :
                      'bg-red-900/30 text-red-400 border border-red-800'
                    }`}>
                      {c.level}
                    </span>
                    <span className="text-[#D4AF37] font-serif italic text-sm">{c.instrument}</span>
                  </div>
                  
                  <h4 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors">{c.title}</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-[#94A3B8] text-sm">
                      <Calendar className="h-4 w-4 mr-3 text-[#E2E8F0]" /> {c.day}
                    </div>
                    <div className="flex items-center text-[#94A3B8] text-sm">
                      <Clock className="h-4 w-4 mr-3 text-[#E2E8F0]" /> {c.time}
                    </div>
                    <div className="flex items-center text-[#94A3B8] text-sm">
                      <User className="h-4 w-4 mr-3 text-[#E2E8F0]" /> {c.instructor}
                    </div>
                  </div>
                </div>
                <div className="bg-[#1E293B]/30 px-6 py-4 flex justify-between items-center border-t border-[#1E293B]">
                  <span className="text-sm font-medium text-white">Book Slot</span>
                  <PlusCircle className="h-5 w-5 text-[#D4AF37]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredClasses.length === 0 && (
          <div className="text-center py-20">
            <Music className="h-16 w-16 text-[#1E293B] mx-auto mb-4" />
            <h3 className="text-xl text-[#E2E8F0] font-serif">No classes found for these filters.</h3>
          </div>
        )}

        {/* Booking Modal */}
        <AnimatePresence>
          {selectedClass && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm"
                onClick={() => setSelectedClass(null)}
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-[#0a0f1d] border border-[#1E293B] p-8 rounded-2xl shadow-2xl relative z-10 w-full max-w-lg"
              >
                <button 
                  onClick={() => setSelectedClass(null)}
                  className="absolute top-4 right-4 text-[#94A3B8] hover:text-white"
                >
                  <X className="h-6 w-6" />
                </button>
                
                <h3 className="text-3xl font-serif font-bold text-white mb-2">Book a Session</h3>
                <p className="text-[#94A3B8] mb-8">Request a spot for this class. The instructor will confirm your booking shortly.</p>
                
                <div className="bg-[#0F172A] border border-[#1E293B] rounded-xl p-6 mb-8">
                  <h4 className="text-xl font-bold text-[#D4AF37] mb-4">{selectedClass.title}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="block text-[#94A3B8] mb-1">Instrument</span>
                      <span className="text-white font-medium">{selectedClass.instrument}</span>
                    </div>
                    <div>
                      <span className="block text-[#94A3B8] mb-1">Level</span>
                      <span className="text-white font-medium">{selectedClass.level}</span>
                    </div>
                    <div>
                      <span className="block text-[#94A3B8] mb-1">Day</span>
                      <span className="text-white font-medium">{selectedClass.day}</span>
                    </div>
                    <div>
                      <span className="block text-[#94A3B8] mb-1">Time</span>
                      <span className="text-white font-medium">{selectedClass.time}</span>
                    </div>
                  </div>
                </div>

                {isLoggedIn ? (
                  <button className="w-full bg-[#D4AF37] hover:bg-[#B89600] text-[#0F172A] font-bold py-4 rounded-lg transition-colors flex justify-center items-center gap-2">
                    <PlayCircle className="h-5 w-5" />
                    Confirm Booking Request
                  </button>
                ) : (
                  <div className="text-center">
                    <p className="text-[#E2E8F0] mb-4">You must be logged in to book a session.</p>
                    <div className="flex gap-4">
                      <Link href="/login" className="flex-1 bg-[#1E293B] hover:bg-[#2D3748] text-white font-semibold py-3 rounded-lg transition-colors text-center border border-[#4A5568]">
                        Log In
                      </Link>
                      <Link href="/register" className="flex-1 bg-[#D4AF37] hover:bg-[#B89600] text-[#0F172A] font-bold py-3 rounded-lg transition-colors text-center">
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
