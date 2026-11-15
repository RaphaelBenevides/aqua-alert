import { useState } from "react";
import Carregando from "../../components/carregando/Carregando";
import CardResumo from "../../components/cardresumo/CardResumo";
import ClimaAgora from "../../components/climaagora/ClimaAgora";
import Hero from "../../components/hero/Hero";
import PainelAlerta from "../../components/painelalerta/PainelAlerta";
import TabelaNiveis from "../../components/tabelaniveis/TabelaNiveis";
import useClima from "../../hooks/useClima";
import useLeituras from "../../hooks/useLeituras";

function Home() {

    const { resumo, ultimaLeitura, isLoading, erro } = useLeituras()

    const [bairroClima, setBairroClima] = useState<string>('Centro')
    const clima = useClima(bairroClima)

    return (
        <>
            <main className="max-w-7xl mx-auto px-6 py-14">
                <Hero />

                <section className="mb-10">
                    <ClimaAgora
                        bairro={clima.bairro}
                        chuvaMmH={clima.chuvaMmH}
                        temperatura={clima.temperatura}
                        descricao={clima.descricao}
                        horario={clima.horario}
                        status={clima.status}
                        isLoading={clima.isLoading}
                        erro={clima.erro}
                        onTrocarBairro={setBairroClima}
                        onAtualizar={clima.carregarClima}
                    />
                </section>

                {isLoading && <Carregando />}

                {erro !== '' && (
                    <p className="text-red-300 text-center mb-10">{erro}</p>
                )}

                {!isLoading && erro === '' && (
                    <>
                        <section className="mb-10">
                            <PainelAlerta leitura={ultimaLeitura} />
                        </section>

                        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14">
                            <CardResumo titulo="Leituras" valor={resumo.total}
                                descricao="registradas no histórico" cor="text-cyan-400" />
                            <CardResumo titulo="Normal" valor={resumo.normal}
                                descricao="em monitoramento" cor="text-emerald-400" />
                            <CardResumo titulo="Atenção" valor={resumo.atencao}
                                descricao="com aviso preventivo" cor="text-amber-400" />
                            <CardResumo titulo="Perigo" valor={resumo.perigo}
                                descricao="com alerta de risco" cor="text-red-400" />
                        </section>
                    </>
                )}

                <TabelaNiveis />
            </main>
        </>
    )
}

export default Home
