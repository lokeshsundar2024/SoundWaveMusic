import Link from "next/link";
import { Music, MapPin, Phone, Mail, Globe, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1d] border-t border-[#1E293B] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <Music className="h-6 w-6 text-[#D4AF37]" />
              <span className="font-serif text-xl font-bold tracking-wider text-white">
                SOUNDWAVE
              </span>
            </Link>
            <p className="text-[#E2E8F0] text-sm leading-relaxed mb-6">
              An elite conservatory for aspiring musicians. Master the art of guitar and piano with world-class instruction in a premium environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#E2E8F0] hover:text-[#D4AF37] transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#E2E8F0] hover:text-[#D4AF37] transition-colors">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/classes" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Fingerstyle Guitar
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Classical Piano
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Music Theory
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Advanced Composition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  About the Instructor
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Classes & Timetable
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Student Portal
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-[#E2E8F0] hover:text-[#D4AF37] text-sm transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#E2E8F0]">
                <MapPin className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span>123 Conservatory Lane,<br />Arts District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#E2E8F0]">
                <Phone className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#E2E8F0]">
                <Mail className="h-5 w-5 text-[#D4AF37] shrink-0" />
                <span>admissions@soundwave.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E293B] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#E2E8F0] text-sm">
            &copy; {new Date().getFullYear()} Soundwave School of Music. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-[#E2E8F0] hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#E2E8F0] hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
