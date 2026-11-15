import { DropIcon } from "@phosphor-icons/react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

    const linkAtivo = 'text-cyan-400 font-bold border-b-2 border-cyan-400 pb-1'
    const linkNormal = 'hover:text-cyan-400 transition pb-1'

    return (
        <>
            <header className="w-full bg-zinc-900 border-b border-cyan-400/20 text-zinc-100">
                <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-4 md:justify-between items-center">
                    <Link to='/' className="flex items-center gap-2 text-2xl font-black text-cyan-400">
                        <DropIcon size={32} weight='fill' />
                        AQUA ALERT
                    </Link>
                    <div className="flex flex-wrap justify-center gap-6 text-lg">
                        <NavLink to='/' end className={({ isActive }) => isActive ? linkAtivo : linkNormal}>Início</NavLink>
                        <NavLink to='/leituras' end className={({ isActive }) => isActive ? linkAtivo : linkNormal}>Leituras</NavLink>
                        <NavLink to='/leituras/nova' className={({ isActive }) => isActive ? linkAtivo : linkNormal}>Nova leitura</NavLink>
                        <NavLink to='/sobre' className={({ isActive }) => isActive ? linkAtivo : linkNormal}>Sobre</NavLink>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
