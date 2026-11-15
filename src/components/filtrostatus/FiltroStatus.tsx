interface FiltroStatusProps {
    filtroAtual: string;
    onFiltrar: Function;
}

const opcoes = ['Todos', 'Normal', 'Atenção', 'Perigo']

function FiltroStatus({ filtroAtual, onFiltrar }: FiltroStatusProps) {
    return (
        <div className="flex flex-wrap gap-3 justify-center mb-10">
            {opcoes.map(opcao => {

                const cor = opcao === filtroAtual
                    ? 'bg-cyan-400 text-zinc-950 border-cyan-400'
                    : 'bg-zinc-900 text-cyan-300 border-cyan-400/20';

                return (
                    <button key={opcao} type="button" onClick={() => onFiltrar(opcao)}
                        className={`border ${cor} px-4 py-2 text-sm uppercase font-bold rounded-md transition hover:scale-105 duration-300 cursor-pointer`}>
                        {opcao}
                    </button>
                )
            })}
        </div>
    )
}

export default FiltroStatus
