import { useRef } from 'react'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import Photo from '../assets/BRUNO.png'
import { AboutPage } from './about-page'
import { ProjectsPage } from './projects-page'
import { SkillsPage } from './skills-page'


export default function HomePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <>
      <section
        id="top"
        ref={heroRef}
        className="relative mx-auto mt-24 grid min-h-[calc(100vh-92px)] max-w-[1480px] items-center gap-12 px-6 pb-16 pt-8 md:grid-cols-[1.05fr_.95fr] md:px-12 md:pt-0"
      >
        <motion.div
          style={{ y: blobY }}
          className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-[#c9ff4a]/10 blur-[120px]"
        />

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[.22em] text-white/45"
          >
            <span className="h-2 w-2 rounded-full bg-[#c9ff4a]" /> Desenvolvedor / FrontEnd
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-[850px] text-[clamp(4.4rem,10vw,10.4rem)] font-black leading-[.82] tracking-[-.1em]"
          >
            Eu transformo<br /><span className="text-[#c9ff4a]">design</span> em<br />experiências.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col gap-8 border-t border-white/15 pt-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-[370px] text-base leading-relaxed text-white/55">
              Sou Matias Armando. Construo interfaces e experiências digitais que fazem marcas serem lembradas.
            </p>
            <motion.a
              href="#projects"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group flex w-fit items-center gap-3 text-[11px] font-bold uppercase tracking-[.16em]"
            >
              Explorar trabalho{' '}
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c9ff4a] text-[#0d0d0e] transition-transform group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex w-full max-w-[520px] items-center justify-center md:justify-end"
        >
          <div className="absolute right-0 top-1/2 h-[min(75vw,480px)] w-[min(75vw,480px)] -translate-y-1/2 rounded-full bg-[#c9ff4a]/80 blur-[1px]" />
          <div className="relative z-10 aspect-[4/5] w-[min(70vw,380px)] overflow-hidden rounded-[46%_46%_10%_10%] bg-[#27272a] shadow-[24px_28px_80px_rgba(0,0,0,.45)]">
            <img src={Photo} alt="Retrato de Rafael Lima, designer digital" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0e]/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[.18em] text-white/70">Luanda · 2026</p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -12 }}
            transition={{ duration: 0.6, delay: 0.6, type: 'spring' }}
            className="absolute -bottom-4 -left-2 z-20 flex h-24 w-24 items-center justify-center rounded-full bg-[#ff765d] text-center text-[10px] font-bold uppercase leading-tight tracking-[.08em] text-[#0d0d0e] shadow-xl md:-left-6"
          >
            Disponível<br />para criar
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-4 left-6 flex items-center gap-3 text-[10px] uppercase tracking-[.18em] text-white/40 md:left-12"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20"><ArrowDown /></span> Role para descobrir
        </motion.a>
      </section>

      <AboutPage id='about' />

      <div className="relative mx-auto grid min-h-[calc(100vh-92px)] max-w-[1480px] p-4">
        <ProjectsPage id='projects' />
        <SkillsPage  id ='skills'/>
      </div>
    </>
  )
}