import { useState } from 'react'
import { ArrowUpRight, MenuIcon, X } from 'lucide-react'
const navigation = [
  { name: 'SOBRE', href: '#about' },
  { name: 'PROJETOS', href: '#projects' },
  { name: 'CONTACTO', href: '#footer' }
]

export function Menu (){
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
         <header className="fixed inset-x-0 top-0 z-50 bg-[#0d0d0e] ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.03em] text-[#c9ff4a]" aria-label="MATIAS início">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c9ff4a] text-[11px] font-bold text-[#181916]">M</span>
          MATIAS
        </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 font-medium text-[13px]">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className=" transition-colors hover:text-[#c9ff4a]  text-[#aaa8a2]">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end text-[13px] font-medium tracking-[.08em] ">
             <a href="#footer" 
             className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-[11px] uppercase tracking-[.12em] transition-all hover:border-[#c9ff4a] hover:bg-[#c9ff4a] hover:text-[#0d0d0e]">Disponível para projetos <ArrowUpRight /></a>
          </div>
        </nav>
        {mobileMenuOpen && <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#10100f] p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">

              <div className="flex lg:flex-1">
            <a href="#" className="flex items-center gap-2 text-[15px] font-semibold tracking-[-0.03em] text-[#c9ff4a]" aria-label="MATIAS início">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c9ff4a] text-[11px] font-bold text-[#181916]">M</span>
          MATIAS
        </a>
          </div>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 text-[13px] font-medium tracking-[.08em]">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-lg px-3 py-2 transition-colors hover:text-[#c9ff4a] text-[#aaa8a2] hover:bg-black/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6 text-[13px] font-medium tracking-[.08em]">
                  <a
                    href="#footer"
                    className="-mx-3 block rounded-lg px-3 py-2.5  font-semibold  text-[#c9ff4a] transition-colors hover:bg-black/10">
                  
                    DISPONIVEL PARA PROJETOS
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>}
      </header>
    )
}