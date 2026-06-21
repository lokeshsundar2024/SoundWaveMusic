"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Music } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Classes & Timetable", path: "/classes" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-[#D4AF37] group-hover:border-[#B89600] transition-colors">
                <Image src="/logo.png" alt="Soundwave Logo" fill className="object-cover p-1" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-wider text-white hidden sm:block">
                SOUNDWAVE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-[#D4AF37]"
                    : "text-[#E2E8F0] hover:text-[#D4AF37]"
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 border-l border-[#1E293B] pl-6">
              <Link
                href="/login"
                className="text-[#E2E8F0] hover:text-white text-sm font-medium transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-[#D4AF37] hover:bg-[#B89600] text-[#0F172A] px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book a Trial
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#E2E8F0] hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F172A] border-b border-[#1E293B]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`${
                    pathname === link.path
                      ? "text-[#D4AF37] bg-[#1E293B]"
                      : "text-[#E2E8F0] hover:text-[#D4AF37] hover:bg-[#1E293B]"
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#E2E8F0] hover:text-white hover:bg-[#1E293B]"
              >
                Log In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="block mt-4 mx-3 px-3 py-2 rounded-md text-base font-medium text-center bg-[#D4AF37] text-[#0F172A] hover:bg-[#B89600]"
              >
                Book a Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
