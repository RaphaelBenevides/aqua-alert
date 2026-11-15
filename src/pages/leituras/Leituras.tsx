import { PlusIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import CardLeitura from "../../components/cardleitura/CardLeitura";
import Carregando from "../../components/carregando/Carregando";
import FiltroStatus from "../../components/filtrostatus/FiltroStatus";
import MensagemVazia from "../../components/mensagemvazia/MensagemVazia";
import useLeituras from "../../hooks/useLeituras";

function Leituras() {

    const { leiturasFiltradas, filtro, setFiltro, isLoading, erro, carregarLeituras, excluirLeitura } = useLeituras()

    return (
        <>
            <main className="max-w-7xl mx-auto px-6 py-14">
                <header className="text-center mb-10">
                    <p className="text-cyan-400 uppercase tracking-[0.3rem] text-sm mb-5">
                        Histórico de ocorrências
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black mb-6">Leituras dos sensores</h1>
                    <Link to='/leituras/nova'
                        className="inline-flex items-center gap-2 rounded-md bg-cyan-400 text-zinc-950 font-bold px-6 py-3 hover:bg-cyan-300 transition">
                        <PlusIcon size={20} weight='bold' /> Nova leitura
                    </Link>
                </header>

                <FiltroStatus filtroAtual={filtro} onFiltrar={setFiltro} />

                {isLoading && <Carregando />}

                {erro !== '' && (
                    <div className="text-center">
                        <MensagemVazia texto={erro} />
                        <button type="button" onClick={carregarLeituras}
                            className="mt-6 rounded-md border-2 border-cyan-400 text-cyan-300 px-6 py-2 hover:bg-cyan-400/10 cursor-pointer">
                            Tentar de novo
                        </button>
                    </div>
                )}

                {!isLoading && erro === '' && leiturasFiltradas.length === 0 && (
                    <MensagemVazia texto="Nenhuma leitura encontrada para este filtro." />
                )}

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {!isLoading && leiturasFiltradas.map(leitura => (
                        <CardLeitura key={leitura.id} leitura={leitura} onExcluir={excluirLeitura} />
                    ))}
                </section>
            </main>
        </>
    )
}

export default Leituras
