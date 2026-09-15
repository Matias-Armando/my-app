
const projects = [
  { title: 'Noma Studio', type: 'Branding · Digital', image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=85', number: '01' },
  { title: 'Alma Journal', type: 'Editorial · Web design', image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=85', number: '02' },
  { title: 'Lumen Objects', type: 'E-commerce · Art direction', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85', number: '03' },
]
const eyebrow = `mb-6 text-[11px] uppercase tracking-[.13em] text-[#8f8d87]`

export function ProjectsPage( {id}: {id?: string}) {
    return (
         <section
       className="border-t border-[#30302c] py-[70px] sm:py-[100px]" id={id}>
        <div 
        className="mb-6 flex items-start justify-between">
            <p className={eyebrow}>02 / Projetos selecionados</p>
            <span className="text-xs text-[#8f8d87]">({projects.length})</span></div>
            <div className="grid gap-[55px] sm:grid-cols-3 sm:gap-6">{projects.map((project) =>
             <article key={project.title}><div className="group relative aspect-[1/1.15] overflow-hidden bg-[#282824]">
                <img className="size-full object-cover saturate-[.7] transition-transform duration-500 group-hover:scale-[1.04]" src={project.image} alt={`Imagem demonstrativa do projeto ${project.title}`} />
                <span className="absolute left-[18px] top-[18px] text-xs">{project.number}</span>
                <span className="absolute right-[18px] top-[18px] text-2xl">↗</span></div>
                <div className="mt-[14px] flex justify-between border-t border-[#53514c] pt-4">
                    <h3 className="font-serif text-[21px] font-normal">{project.title}</h3>
                    <p className="text-right text-[11px] uppercase tracking-[.08em] text-[#8f8d87]">{project.type}</p></div></article>)}</div>
             </section>
    )
}