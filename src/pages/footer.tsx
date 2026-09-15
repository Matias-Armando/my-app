import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function Footer({id}: {id?: string}) {
  return (
    <>
      <footer
        id={id}
        className="relative overflow-hidden border-t border-white/10 bg-[#c9ff4a] px-6 py-16 text-[#0d0d0e] md:px-12 md:py-24"
      >
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="pointer-events-none absolute -right-24 -top-36 h-[420px] w-[420px] rounded-full border-[1px] border-black/10"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="pointer-events-none absolute -right-8 -top-20 h-[280px] w-[280px] rounded-full border-[1px] border-black/10"
        />

        <div className="relative mx-auto max-w-[1480px]">
          <div className="grid gap-12 md:grid-cols-[1fr_.38fr] md:gap-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="mb-8 text-[11px] font-bold uppercase tracking-[.2em] text-black/50"
              >
                03 / Vamos conversar
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-[950px] text-[clamp(3.6rem,8vw,9rem)] font-black leading-[.82] tracking-[-.1em]"
              >
                Tem um projeto<br />
                <span className="text-[#ff765d]">na cabeça?</span>
              </motion.h2>

              <motion.a
                href="mailto:matiasarmando925@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ x: 4 }}
                className="group mt-12 inline-flex items-center gap-4 border-b-2 border-black pb-3 text-sm font-bold uppercase tracking-[.14em] transition-colors hover:border-[#ff765d] hover:text-[#ff765d]"
              >
                Me chama{' '}
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#0d0d0e] text-[#c9ff4a] transition-transform group-hover:translate-x-1">
                  <ArrowUpRight />
                </span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between gap-10 md:py-8"
            >
              <p className="max-w-[260px] text-lg leading-snug">
                Estou aberto para identidades, produtos digitais e colaborações que tenham algo a dizer.
              </p>
              <div className="space-y-3 text-[11px] font-bold uppercase tracking-[.16em]">
                <a className="block w-fit border-b border-black/25 pb-1 transition-colors hover:text-[#ff765d]" href="mailto:matiasarmando925@gmail.com">
                  matiasarmando925@gmail.com
                </a>
                <a className="block w-fit border-b border-black/25 pb-1 transition-colors hover:text-[#ff765d]" 
                href="https://github.com/Matias-Armando"
                target="_blank"
                rel="noopener noreferrer"
                 
                >
                  Github ↗
                </a>
                <a className="block w-fit border-b border-black/25 pb-1 transition-colors hover:text-[#ff765d]"
                 href="https://www.linkedin.com/in/matias-armando"
                 target="_blank"
                 rel="noopener noreferrer"
                
                >
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 flex flex-col gap-4 border-t border-black/15 pt-5 text-[10px] font-bold uppercase tracking-[.16em] sm:flex-row sm:items-center sm:justify-between"
          >
            <span>Matias Armando — Desenvolvedor Frontend</span>
            <span>Luanda, Angola · 2026</span>
            <a href="#" className="transition-colors hover:text-[#ff765d]">Voltar ao topo ↑</a>
          </motion.div>
        </div>
      </footer>
    </>
  );
}