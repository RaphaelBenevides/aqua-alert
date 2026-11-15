import { Link } from "react-router-dom";

function NaoEncontrada() {
    return (
        <>
            <main className="max-w-7xl mx-auto px-6 py-24 text-center">
                <p className="text-cyan-400 uppercase tracking-[0.3rem] text-sm mb-5">Erro 404</p>
                <h1 className="text-4xl md:text-5xl font-black mb-5">Página não encontrada</h1>
                <p className="text-zinc-400 max-w-xl mx-auto mb-8 text-lg">
                    O endereço que você acessou não existe no AQUA ALERT.
                </p>
                <Link to='/'
                    className="rounded-md bg-cyan-400 text-zinc-950 font-bold px-6 py-3 hover:bg-cyan-300 transition">
                    Voltar para o início
                </Link>
            </main>
        </>
    )
}

export default NaoEncontrada
