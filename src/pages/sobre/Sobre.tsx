import TabelaNiveis from "../../components/tabelaniveis/TabelaNiveis";

const partes = [
    { titulo: '1. Sensor', texto: 'Mede o nível da água e a chuva no ponto monitorado (Edge Computing).' },
    { titulo: '2. Sistema inteligente', texto: 'Interpreta os dados e classifica o risco em Normal, Atenção ou Perigo (Python).' },
    { titulo: '3. Aplicação web', texto: 'Mostra os níveis, os alertas e o histórico de ocorrências para o cidadão (esta página).' }
]

const ods = [
    { numero: 11, nome: 'Cidades e comunidades sustentáveis', texto: 'Reduz os danos das enchentes em áreas urbanas de risco.' },
    { numero: 13, nome: 'Ação contra a mudança global do clima', texto: 'Ajuda a população a se preparar para chuvas extremas.' },
    { numero: 9, nome: 'Indústria, inovação e infraestrutura', texto: 'Usa sensores e dados de baixo custo para monitorar a cidade.' }
]

function Sobre() {
    return (
        <>
            <main className="max-w-7xl mx-auto px-6 py-14">
                <header className="text-center mb-14">
                    <p className="text-cyan-400 uppercase tracking-[0.3rem] text-sm mb-5">CitizenTech da Minha Cidade</p>
                    <h1 className="text-4xl md:text-5xl font-black mb-5">Sobre o AQUA ALERT</h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg">
                        Enchentes e alagamentos colocam moradores, motoristas e comerciantes em risco.
                        Muitas vezes, as pessoas não sabem quando o nível da água está subindo em determinada região.
                        O AQUA ALERT monitora esses pontos e avisa antes que a situação fique perigosa.
                    </p>
                </header>

                <h2 className="text-3xl font-black mb-6">Como funciona</h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
                    {partes.map(parte => (
                        <article key={parte.titulo} className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6">
                            <h3 className="text-cyan-400 font-black text-2xl mb-3">{parte.titulo}</h3>
                            <p className="text-zinc-300">{parte.texto}</p>
                        </article>
                    ))}
                </section>

                <section className="mb-14">
                    <TabelaNiveis />
                </section>

                <h2 className="text-3xl font-black mb-6">ODS conectados</h2>
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ods.map(item => (
                        <article key={item.numero} className="bg-zinc-900/80 border border-fuchsia-400/20 rounded-2xl p-6">
                            <p className="text-fuchsia-300 font-black text-4xl mb-2">ODS {item.numero}</p>
                            <h3 className="font-bold text-xl mb-2">{item.nome}</h3>
                            <p className="text-zinc-400">{item.texto}</p>
                        </article>
                    ))}
                </section>
            </main>
        </>
    )
}

export default Sobre
