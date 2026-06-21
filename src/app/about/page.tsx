"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BookOpen, Music, Star } from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#0F172A] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-4"
          >
            Meet the <span className="text-[#D4AF37] italic">Maestro</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "6rem" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent rounded-2xl blur-xl z-0" />
            <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden border border-[#1E293B] shadow-2xl">
              <Image
                src="/instructor_murali.png"
                alt="Murali Bhat - Lead Instructor"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-serif font-bold text-white">Murali Bhat</h3>
                <p className="text-[#D4AF37] font-medium tracking-wide">Lead Instructor & Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-invert prose-lg">
              <p className="text-[#E2E8F0] leading-relaxed">
                With over a decade of professional performance and teaching experience, 
                <strong className="text-white font-semibold"> Murali Bhat </strong> 
                has established himself as a premier music educator. His unique approach blends rigorous classical techniques with contemporary expression, allowing students to develop both technical mastery and profound musicality.
              </p>
              <p className="text-[#E2E8F0] leading-relaxed mt-4">
                Specializing in <span className="text-[#D4AF37]">advanced fingerstyle guitar</span> and <span className="text-[#D4AF37]">classical piano</span>, Murali Bhat's curriculum is tailored to unearth the raw talent in every student. Whether you are striking your first chord or preparing for a conservatory audition, his mentorship will guide you to excellence.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#1E293B]">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Music className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Fingerstyle Guitar</h4>
                  <p className="text-[#94A3B8] text-sm mt-1">Master complex polyphonic arrangements and rhythmic techniques.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <BookOpen className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Classical Piano</h4>
                  <p className="text-[#94A3B8] text-sm mt-1">From foundational repertoire to advanced virtuoso performance.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Music Theory</h4>
                  <p className="text-[#94A3B8] text-sm mt-1">Deep understanding of harmony, composition, and aural skills.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Star className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-serif font-semibold text-lg">Performance Prep</h4>
                  <p className="text-[#94A3B8] text-sm mt-1">Stage presence, anxiety management, and audition readiness.</p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
}
