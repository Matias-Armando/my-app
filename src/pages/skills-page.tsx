
const skills = ['Direção de arte', 'UI / UX design', 'React.tsx', 'Node.js', 'Git & GitHub', 'Desenvolvimento web']

const eyebrow = `mb-6 text-[11px] uppercase tracking-[.13em] text-[#8f8d87]`

export function SkillsPage({id}: {id?: string}) {

    return (
          <section
           className="grid gap-[10%] border-t border-[#30302c] py-[70px] sm:grid-cols-[28%_1fr] sm:py-[100px]" id={id}>
            <p className={eyebrow}>03 / O que faço</p>
            <div className="border-t border-[#53514c]">{skills.map((skill, index) => <div className="grid grid-cols-[60px_1fr_30px] items-center border-b border-[#30302c] py-6" key={skill}><span className="text-[11px] text-[#8f8d87]">0{index + 1}</span><h3 className="font-serif text-[22px] font-normal sm:text-[28px]">{skill}</h3><span className="text-right text-[22px] text-blue-900">↗</span></div>)}</div></section>
    )
}