"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star, Music, Award, Users } from "lucide-react";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).adsbygoogle) {
      try {
        (window as any).adsbygoogle.push({});
      } catch (error) {
        console.warn("Adsense push failed", error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero_background.png"
            alt="Piano and Guitar"
            fill
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight tracking-wider"
          >
            Soundwave
            <br />
            <span className="text-[#D4AF37] italic text-4xl md:text-6xl font-light tracking-normal">
              School of Music
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-[#E2E8F0] mb-10 max-w-3xl mx-auto font-light tracking-wide"
          >
            An elite conservatory offering world-class instruction in
            fingerstyle guitar and classical piano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/register"
              className="bg-[#D4AF37] hover:bg-[#B89600] text-[#0F172A] px-8 py-4 rounded-md text-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book a Trial <ChevronRight className="h-5 w-5" />
            </Link>
            <Link
              href="/classes"
              className="bg-transparent border border-[#E2E8F0] hover:border-[#D4AF37] hover:text-[#D4AF37] text-white px-8 py-4 rounded-md text-lg font-semibold transition-all"
            >
              View Timetable
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-[#0a0f1d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Music className="h-10 w-10 text-[#D4AF37]" />,
                title: "Artistry First",
                desc: "We believe in nurturing the unique voice of every student. Technique is essential, but true artistry is the ultimate goal.",
              },
              {
                icon: <Award className="h-10 w-10 text-[#D4AF37]" />,
                title: "Elite Standards",
                desc: "Our curriculum is designed to challenge and elevate. We prepare our students for professional performance and deep musical understanding.",
              },
              {
                icon: <Users className="h-10 w-10 text-[#D4AF37]" />,
                title: "Personalized Focus",
                desc: "With small class sizes and one-on-one attention, we ensure that every student's individual learning style and pace is respected.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-[#0F172A] p-8 rounded-xl border border-[#1E293B] hover:border-[#D4AF37]/50 transition-colors group"
              >
                <div className="bg-[#1E293B] w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-[#E2E8F0] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Adsense Ad Section */}
      <section className="py-12 bg-[#0a0f1d] flex justify-center">
        <div className="max-w-5xl w-full px-4">
          <div className="bg-[#111827] border border-[#1E293B] rounded-3xl p-6 text-center">
            <ins
              className="adsbygoogle"
              style={{ display: "block", textAlign: "center" }}
              data-ad-client="ca-pub-4335657461405909"
              data-ad-slot="6500282550"
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Student Voices
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                text: "The piano instruction here is unparalleled. I went from struggling with basic sonatas to performing Chopin with confidence. The environment is inspiring and deeply professional.",
                author: "Sarah Jenkins",
                role: "Advanced Piano Student",
              },
              {
                text: "Learning fingerstyle guitar under Murali Bhat has been a revelation. The attention to detail and focus on musicality rather than just rote learning makes this conservatory stand out.",
                author: "Michael Chen",
                role: "Intermediate Guitar Student",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-10 rounded-2xl border border-[#1E293B] relative"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-5 w-5 text-[#D4AF37] fill-[#D4AF37]"
                    />
                  ))}
                </div>
                <p className="text-lg text-[#E2E8F0] italic mb-8 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-serif font-bold text-white text-xl">
                    {testimonial.author}
                  </h4>
                  <p className="text-[#D4AF37] text-sm mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
