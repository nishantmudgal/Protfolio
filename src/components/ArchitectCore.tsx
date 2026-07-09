import React, { useState, useEffect, useRef } from "react";
import { SKILLS_DATA } from "../types";
import { 
  Terminal, ShieldCheck, Cpu, Layers, Sparkles, Code, CheckCircle, ArrowRight, Lightbulb,
  Briefcase, GraduationCap, MapPin, Calendar, Building2
} from "lucide-react";
import { motion } from "motion/react";

import { AnimatePresence } from "motion/react";

const journeyData = [
  {
    id: "mckinsey",
    type: "experience",
    role: "Software Engineer (Full-time)",
    organization: "McKinsey & Company",
    location: "Gurugram, India",
    period: "June 2022 – Present",
    details: [
      "Architecting responsive, high-performance web applications and internal portals for global enterprise clients using React, TypeScript, and optimized asset pipelines.",
      "Spearheading UI optimization initiatives, reducing First Contentful Paint (FCP) and initial bundle sizes by applying code-splitting, lazy hydration, and strict caching strategies.",
      "Fostering standard modular component hierarchies and contributing to complex design systems with complete WCAG accessibility compliance."
    ],
    tags: ["React 18", "TypeScript", "Next.js", "Performance Tuning", "Design Systems"],
    color: "primary"
  },
  {
    id: "nsut",
    type: "education",
    role: "Master’s of Technology",
    specialization: "Machine Intelligence and Data Analytics",
    organization: "Netaji Subhash University of Technology (NSUT)",
    location: "Delhi, India",
    period: "Sept 2020 - June 2022",
    details: [
      "Specialized in deep learning architectures, cognitive machine intelligence models, and high-dimensional analytics systems.",
      "Conducted intensive statistical computing, telemetry modeling, and research on deploying optimized data-driven frameworks.",
      "Developed smart analytical visualization applications translating high-frequency datasets into actionable insights."
    ],
    tags: ["Machine Learning", "Data Analytics", "Deep Learning", "Python", "Algorithms"],
    color: "tertiary"
  },
  {
    id: "idemia",
    type: "experience",
    role: "Software Engineer (Full-time)",
    organization: "IDEMIA",
    location: "Noida, India",
    period: "Jan 2018 – Sept 2019",
    details: [
      "Engineered cryptographic security integrations and high-throughput biometrics verification client modules.",
      "Developed robust software solutions with strict security directives to safeguard identity management systems.",
      "Optimized critical runtime routines and transactional operations, ensuring minimum frame latency and clean state updates."
    ],
    tags: ["Systems Engineering", "C++", "Java", "Security Protocols", "Cryptography"],
    color: "secondary"
  },
  {
    id: "chitkara",
    type: "education",
    role: "Bachelor’s of Technology",
    specialization: "Computer Science Engineering",
    organization: "Chitkara University",
    location: "Punjab, India",
    period: "August 2014 - June 2018",
    details: [
      "Acquired core foundations in data structures, compiler design, and software engineering methodologies.",
      "Engineered multi-tier full-stack academic projects, prioritizing performant UI layers and clean modular logic separation.",
      "Completed graduation with honors, with final capstone research centering on reactive micro-controller interfaces."
    ],
    tags: ["Computer Science", "Data Structures", "Algorithms", "OOP", "Software Design"],
    color: "primary"
  }
];

export default function ArchitectCore() {
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>("All");
  const [activeSpecialization, setActiveSpecialization] = useState<string | null>(null);



  const categories = ["All", "Frameworks", "Languages", "Performance", "Systems"];

  const filteredSkills = selectedSkillCategory === "All" 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === selectedSkillCategory);

  const specializations = [
    {
      id: "components",
      title: "Component Systems",
      icon: <Layers className="text-primary" size={20} />,
      tagline: "Atomic layout modules conforming strictly to WCAG guidelines.",
      description: "My component systems feature strict accessibility (ARIA attributes), headless structural controllers, fluid modular padding spacing, and type-safe CSS custom parameter hydration.",
      achievement: "Built system supporting 40+ dynamic pages with consistent 100% lighthouse compliance score."
    },
    {
      id: "performance",
      title: "Performance Tuning",
      icon: <Cpu className="text-tertiary" size={20} />,
      tagline: "Reducing Largest Contentful Paint (LCP) down to absolute thresholds.",
      description: "My optimization stack applies dynamic route-splitting chunks, synchronous preload assets, image asset pipeline optimizations, and elimination of rendering recalculation states.",
      achievement: "Restructured legacy corporate portals to decrease average client initial render speeds by 42%."
    },
    {
      id: "state",
      title: "State Architecture",
      icon: <ShieldCheck className="text-secondary" size={20} />,
      tagline: "Predictable, multi-layer reactive data coordination.",
      description: "I construct transactional event cycles using atomic models (Zustand, Redux Toolkit) to coordinate web sockets, client persistence tables, and secure local cache schemas.",
    }
  ];

  return (
    <div className="space-y-12">
      {/* Intro section with premium styling */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
        {/* Bio text column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <Sparkles size={12} className="text-primary animate-pulse" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold">Architectural Core Node</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-headline font-semibold tracking-tight text-on-surface leading-tight">
            Engineering High-Contrast <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              Kinetic Web Platforms
            </span>
          </h1>

          <p className="text-base text-on-surface-variant leading-relaxed font-sans max-w-xl">
            I am a Frontend Architect & UI Engineer with 5+ years of experience sculpting type-safe, resilient single-page portals. My work centers on performance pipelines, accessible components, and modular client-side state managers.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-low border border-outline-variant/40 rounded-lg text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
              <span>5+ Years Industry Experience</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 bg-surface-container-low border border-outline-variant/40 rounded-lg text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Bengaluru, India (UTC +5:30)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Vector Avatar Visual Column */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-72 rounded-2xl border border-outline-variant/60 bg-surface-container-low flex items-center justify-center overflow-hidden p-6 shadow-xl group">
            {/* Background glowing grid effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d_1px,transparent_1px),linear-gradient(to_bottom,#1f293d_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
            
            {/* Ambient dynamic accent circles */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 blur-3xl group-hover:scale-125 transition-transform duration-700" />
            <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-3xl group-hover:scale-125 transition-transform duration-700" />

            {/* Stylized Avatar Frame with Code Vectors */}
            <div className="relative z-10 w-44 h-44 rounded-full border border-primary/30 bg-surface-container-lowest/80 p-1 flex items-center justify-center shadow-lg">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-surface-bright to-surface-dim flex flex-col items-center justify-center relative overflow-hidden group-hover:border group-hover:border-primary/40 transition-all">
                {/* Visual Math Lattice */}
                <div className="absolute inset-0 flex items-center justify-center opacity-25">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" className="animate-spin" style={{ animationDuration: "40s" }}>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" className="text-secondary" />
                    <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 2" className="text-tertiary" />
                  </svg>
                </div>
                
                {/* Elegant initials */}
                <span className="text-3xl font-headline font-bold text-on-surface tracking-wider">
                  NM
                </span>
                <span className="text-[10px] font-mono text-primary font-medium tracking-wide uppercase mt-1">
                  {"<FRONTEND>"}
                </span>
              </div>
            </div>

            {/* Outer coordinate labels */}
            <div className="absolute top-3 left-4 text-[9px] font-mono text-outline">
              LATENCY_THRESHOLD: 100ms
            </div>
            <div className="absolute bottom-3 right-4 text-[9px] font-mono text-outline">
              COMPILER: VITE_ESBUILD
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Section (Staggered Layout exactly like screenshot) */}
      <section id="professional-journey" className="space-y-10 pt-10 border-t border-outline-variant/30 text-left">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface">
              Professional Journey
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant font-medium mt-1">
              A chronicle of technical evolution and academic foundations.
            </p>
          </div>
          <div className="text-xs font-mono uppercase tracking-widest text-on-surface-variant font-semibold self-start sm:self-auto pt-1">
            02 // CHRONICLE
          </div>
        </div>

        {/* Timeline container */}
        <div className="relative space-y-12 py-6">
          {/* Timeline center line (desktop) or left line (mobile) */}
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[1px] bg-outline-variant/40 md:-translate-x-1/2" />

          {/* Row 1: McKinsey */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 md:gap-12 gap-6 items-center">
            {/* Timeline Bullet */}
            <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-[2.5px] border-tertiary z-10 flex items-center justify-center" style={{ boxShadow: "0 0 12px rgba(45, 212, 191, 0.6)" }} />

            {/* Left Column: Aligned Right (Desktop), Aligned Left (Mobile) */}
            <div className="pl-8 md:pl-0 md:col-span-5 md:text-right space-y-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-tertiary uppercase block">
                JUNE 2022 – PRESENT
              </span>
              <h3 className="text-lg font-headline font-bold text-on-surface leading-tight">
                Software Engineer (Full-time)
              </h3>
              <p className="text-sm font-semibold text-on-surface-variant">
                McKinsey & Company
              </p>
            </div>

            {/* Middle space */}
            <div className="hidden md:block md:col-span-2" />

            {/* Right Column: Card */}
            <div className="pl-8 md:pl-0 md:col-span-5">
              <div className="glass-card p-4 sm:p-5 rounded-xl border border-outline-variant/35 text-xs sm:text-sm text-on-surface-variant font-medium leading-relaxed shadow-sm hover:border-outline/45 hover:shadow-md transition-all duration-300">
                Leading frontend architecture for client-facing web applications serving 5M+ monthly users, focusing on React/Next.js modernization and design system implementation.
              </div>
            </div>
          </div>

          {/* Row 2: NSUT */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 md:gap-12 gap-6 items-center">
            {/* Timeline Bullet */}
            <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-[2.5px] border-secondary z-10 flex items-center justify-center" style={{ boxShadow: "0 0 12px rgba(168, 85, 247, 0.6)" }} />

            {/* Left Column: Card (Desktop), Date/Info (Mobile) */}
            <div className="pl-8 md:pl-0 md:col-span-5 order-last md:order-first">
              <div className="glass-card p-4 sm:p-5 rounded-xl border border-outline-variant/35 text-xs sm:text-sm text-on-surface-variant font-medium leading-relaxed shadow-sm hover:border-outline/45 hover:shadow-md transition-all duration-300">
                Specialized in Machine Intelligence and Data Analytics, bridging the gap between advanced algorithms and practical software implementation.
              </div>
            </div>

            {/* Middle space */}
            <div className="hidden md:block md:col-span-2" />

            {/* Right Column: Info (Desktop), Card (Mobile - reordered via order CSS) */}
            <div className="pl-8 md:pl-0 md:col-span-5 md:text-left space-y-1 order-first md:order-last">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-secondary uppercase block">
                SEPT 2020 - JUNE 2022
              </span>
              <h3 className="text-lg font-headline font-bold text-on-surface leading-tight">
                M.Tech - Machine Intelligence
              </h3>
              <p className="text-sm font-semibold text-on-surface-variant">
                Netaji Subhash University of Technology
              </p>
            </div>
          </div>

          {/* Row 3: IDEMIA */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 md:gap-12 gap-6 items-center">
            {/* Timeline Bullet */}
            <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-[2.5px] border-tertiary z-10 flex items-center justify-center" style={{ boxShadow: "0 0 12px rgba(45, 212, 191, 0.6)" }} />

            {/* Left Column: Info */}
            <div className="pl-8 md:pl-0 md:col-span-5 md:text-right space-y-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-tertiary uppercase block">
                JAN 2018 – SEPT 2019
              </span>
              <h3 className="text-lg font-headline font-bold text-on-surface leading-tight">
                Software Engineer (Full-time)
              </h3>
              <p className="text-sm font-semibold text-on-surface-variant">
                IDEMIA
              </p>
            </div>

            {/* Middle space */}
            <div className="hidden md:block md:col-span-2" />

            {/* Right Column: Card */}
            <div className="pl-8 md:pl-0 md:col-span-5">
              <div className="glass-card p-4 sm:p-5 rounded-xl border border-outline-variant/35 text-xs sm:text-sm text-on-surface-variant font-medium leading-relaxed shadow-sm hover:border-outline/45 hover:shadow-md transition-all duration-300">
                Developed production-grade firmware for biometric access-control systems using C++, Linux, and embedded systems.
              </div>
            </div>
          </div>

          {/* Row 4: Chitkara */}
          <div className="relative grid grid-cols-1 md:grid-cols-12 md:gap-12 gap-6 items-center">
            {/* Timeline Bullet */}
            <div className="absolute left-[16px] md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-background border-[2.5px] border-secondary z-10 flex items-center justify-center" style={{ boxShadow: "0 0 12px rgba(168, 85, 247, 0.6)" }} />

            {/* Left Column: Card (Desktop) */}
            <div className="pl-8 md:pl-0 md:col-span-5 order-last md:order-first">
              <div className="glass-card p-4 sm:p-5 rounded-xl border border-outline-variant/35 text-xs sm:text-sm text-on-surface-variant font-medium leading-relaxed shadow-sm hover:border-outline/45 hover:shadow-md transition-all duration-300">
                Foundational studies in Computer Science Engineering, focusing on core software principles and systems architecture.
              </div>
            </div>

            {/* Middle space */}
            <div className="hidden md:block md:col-span-2" />

            {/* Right Column: Info */}
            <div className="pl-8 md:pl-0 md:col-span-5 md:text-left space-y-1 order-first md:order-last">
              <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-secondary uppercase block">
                AUG 2014 - JUNE 2018
              </span>
              <h3 className="text-lg font-headline font-bold text-on-surface leading-tight">
                B.Tech - Computer Science
              </h3>
              <p className="text-sm font-semibold text-on-surface-variant">
                Chitkara University
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Bento Section */}
      <section className="space-y-6">
        <div className="text-left">
          <span className="text-xs font-mono uppercase tracking-wider text-secondary font-semibold">Specialization Areas</span>
          <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface mt-1">
            Structural Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specializations.map((spec) => (
            <div 
              key={spec.id}
              onClick={() => setActiveSpecialization(activeSpecialization === spec.id ? null : spec.id)}
              className={`bg-surface-container border p-5 rounded-xl text-left transition-all duration-300 cursor-pointer relative overflow-hidden ${
                activeSpecialization === spec.id 
                  ? "border-primary ring-1 ring-primary/40 shadow-lg translate-y-[-2px]" 
                  : "border-outline-variant/60 hover:border-outline hover:translate-y-[-1px] shadow"
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-surface-container-high border border-outline-variant/60 rounded-lg">
                  {spec.icon}
                </div>
                <span className="text-[9px] font-mono text-outline uppercase tracking-wider">
                  {activeSpecialization === spec.id ? "EXPANDED" : "TAP TO READ"}
                </span>
              </div>

              <h3 className="text-base font-headline font-medium text-on-surface mb-1">
                {spec.title}
              </h3>
              <p className="text-xs text-on-surface-variant font-sans leading-relaxed mb-3">
                {spec.tagline}
              </p>

              {/* Collapsible deep dive details */}
              <div className={`transition-all duration-300 overflow-hidden ${
                activeSpecialization === spec.id ? "max-h-48 opacity-100 mt-4 pt-4 border-t border-outline-variant/30" : "max-h-0 opacity-0"
              }`}>
                <p className="text-xs text-on-surface-variant leading-relaxed font-sans mb-3">
                  {spec.description}
                </p>
                <div className="bg-surface-container-low p-2 rounded border border-outline-variant/20 flex gap-1.5 items-start">
                  <Lightbulb size={12} className="text-tertiary shrink-0 mt-0.5" />
                  <p className="text-[10px] font-mono text-on-surface leading-normal">
                    <span className="font-semibold text-tertiary">Outcome:</span> {spec.achievement}
                  </p>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className={`absolute top-0 bottom-0 left-0 w-1 transition-all ${
                spec.id === "components" ? "bg-primary" : spec.id === "performance" ? "bg-tertiary" : "bg-secondary"
              }`} />
            </div>
          ))}
        </div>
      </section>

      {/* Syntactic Stack Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-outline-variant/30 pb-4 text-left">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-tertiary font-semibold">Engine Components</span>
            <h2 className="text-2xl sm:text-3xl font-headline font-semibold text-on-surface mt-1">
              Syntactic Stack
            </h2>
          </div>
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedSkillCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-lg border transition-all cursor-pointer ${
                  selectedSkillCategory === cat 
                    ? "bg-primary/20 text-primary border-primary/40 font-semibold" 
                    : "bg-surface-container-high border-outline-variant/55 hover:border-outline text-on-surface-variant"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-surface-container p-4 border border-outline-variant/40 rounded-xl flex flex-col justify-between hover:border-outline-variant transition-colors text-left"
            >
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-headline font-medium text-on-surface flex items-center gap-1.5">
                    <Code size={14} className="text-primary" />
                    {skill.name}
                  </h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 bg-surface-container-high text-on-surface-variant border border-outline-variant/30 rounded">
                    {skill.category.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant font-sans leading-relaxed">
                  {skill.details}
                </p>
              </div>

              {/* Progress visual indicator */}
              <div className="mt-3.5 space-y-1">
                <div className="flex justify-between text-[9px] font-mono text-outline">
                  <span>SYSTEM_PROB_LEVEL</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-surface-container-lowest h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
