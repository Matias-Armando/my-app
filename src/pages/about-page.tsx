import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"



const cardVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function AboutPage({id}: {id?: string}) {
  return (
    <>
      <section
        id={id}
        className="relative overflow-hidden border-t border-white/10 bg-[#101b2d] px-6 py-20 text-[#f4f7fb] md:px-12 md:py-32"
      >
        <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-[#7c5cff]/20 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#b8ff3d]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1480px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex items-start justify-between gap-8"
          >
            <p className="text-[11px] font-bold uppercase tracking-[.2em] text-[#b8ff3d]">01 / Sobre - me</p>
            <span className="hidden rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[.18em] text-white/50 md:block">
              Matias Armando — 2026
            </span>
          </motion.div>

          <div className="grid gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="max-w-[1050px] text-[clamp(3.2rem,7.4vw,9.2rem)] font-black leading-[.82] tracking-[-.1em]">
                Eu crio <span className="text-[#b8ff3d]">presença</span><br />para ideias<br /><span className="text-white/35">ambiciosas.</span>
              </p>
              <motion.a
                href="#footer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group mt-12 inline-flex items-center gap-4 rounded-full bg-[#b8ff3d] px-5 py-3 text-[11px] font-bold uppercase tracking-[.14em] text-[#101b2d]"
              >
                Conheça meu processo
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#101b2d] text-[#b8ff3d]">
                  <ArrowUpRight />
                </span>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8 lg:pb-2"
            >
              <p className="max-w-[390px] text-lg leading-relaxed text-white/60">
                Sou um frontend developer obcecado por transformar design em experiências que as pessoas sentem.
              </p>
              <div className="flex gap-3 text-[10px] font-bold uppercase tracking-[.14em] text-white/45">
                <span className="rounded-full border border-white/15 px-3 py-2">luanda</span>
                <span className="rounded-full border border-white/15 px-3 py-2">Softsystems - labs / remoto</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-20 grid gap-3 md:grid-cols-3"
          >
            <motion.div
              variants={cardItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group min-h-56 rounded-[2rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-sm transition-colors hover:border-[#b8ff3d]/60"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black tracking-[-.08em] text-[#b8ff3d]">01</span>
                <ArrowUpRight />
              </div>
              <h3 className="mt-16 text-xl font-bold tracking-[-.04em]">Código com propósito</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">Transformo ideias e designs em interfaces funcionais, rápidas e impossíveis de ignorar.</p>
            </motion.div>

            <motion.div
              variants={cardItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group min-h-56 rounded-[2rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-sm transition-colors hover:border-[#7c5cff]/70"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black tracking-[-.08em] text-[#7c5cff]">02</span>
                <ArrowUpRight />
              </div>
              <h3 className="mt-16 text-xl font-bold tracking-[-.04em]">Interface com intenção</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">Cada componente tem um papel: guiar o utilizador, facilitar decisões e deixar marca.</p>
            </motion.div>

            <motion.div
              variants={cardItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="group min-h-56 rounded-[2rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur-sm transition-colors hover:border-[#ff765d]/70"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black tracking-[-.08em] text-[#ff765d]">03</span>
                <ArrowUpRight />
              </div>
              <h3 className="mt-16 text-xl font-bold tracking-[-.04em]">Feito para durar</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/45">Código limpo e escalável que continua relevante mesmo quando o produto cresce.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}