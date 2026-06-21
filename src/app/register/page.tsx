"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Music, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    instrument: "",
    experience: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    console.log("Signing up with:", formData);
    alert("Registration feature will be fully active once Supabase keys are configured!");
  };

  return (
    <div className="bg-[#0F172A] min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background aesthetics */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E293B]/50 rounded-full blur-3xl"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0a0f1d] border border-[#1E293B] py-10 px-8 shadow-2xl sm:rounded-2xl">
          
          <div className="text-center mb-8">
            <Music className="h-10 w-10 text-[#D4AF37] mx-auto mb-4" />
            <h2 className="text-3xl font-serif font-bold text-white mb-2">Join Soundwave</h2>
            <p className="text-[#94A3B8] text-sm">Create your student account to book classes.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#E2E8F0] mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="block w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-[#4A5568] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-[#E2E8F0] mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-[#4A5568] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#E2E8F0] mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-4 py-3 text-white placeholder-[#4A5568] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#94A3B8] hover:text-[#D4AF37]"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Instrument of Choice */}
              <div>
                <label className="block text-sm font-medium text-[#E2E8F0] mb-2" htmlFor="instrument">
                  Instrument
                </label>
                <select
                  id="instrument"
                  name="instrument"
                  required
                  className="block w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all appearance-none"
                  value={formData.instrument}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select...</option>
                  <option value="Guitar">Guitar</option>
                  <option value="Piano">Piano</option>
                </select>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-[#E2E8F0] mb-2" htmlFor="experience">
                  Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  className="block w-full bg-[#0F172A] border border-[#1E293B] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:border-[#D4AF37] transition-all appearance-none"
                  value={formData.experience}
                  onChange={handleChange}
                >
                  <option value="" disabled>Select...</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-[#0F172A] bg-[#D4AF37] hover:bg-[#B89600] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] focus:ring-offset-[#0a0f1d] transition-all transform hover:-translate-y-0.5"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="mt-8 text-center border-t border-[#1E293B] pt-6">
            <p className="text-sm text-[#94A3B8]">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-[#D4AF37] hover:text-[#B89600] transition-colors">
                Log in here
              </Link>
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
