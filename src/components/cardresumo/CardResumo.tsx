interface CardResumoProps {
    titulo: string;
    valor: number;
    descricao: string;
    cor: string;
}

function CardResumo({ titulo, valor, descricao, cor }: CardResumoProps) {
    return (
        <article className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6">
            <p className="text-zinc-400 uppercase tracking-widest text-sm mb-2">{titulo}</p>
            <p className={`text-4xl md:text-5xl font-black mb-2 ${cor}`}>{valor}</p>
            <p className="text-zinc-400">{descricao}</p>
        </article>
    )
}

export default CardResumo
