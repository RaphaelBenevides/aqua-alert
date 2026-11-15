interface MensagemVaziaProps {
    texto: string;
}

function MensagemVazia({ texto }: MensagemVaziaProps) {
    return (
        <div className="bg-zinc-900/80 border border-dashed border-cyan-400/30 rounded-2xl p-10 text-center text-zinc-400 text-lg">
            {texto}
        </div>
    )
}

export default MensagemVazia
