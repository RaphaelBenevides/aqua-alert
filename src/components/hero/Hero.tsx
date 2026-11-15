import { Link } from "react-router-dom";

function Hero() {
    return (
        <>
            <section className="text-center mb-14">
                <p className="text-cyan-400 uppercase tracking-[0.3rem] text-sm mb-5">
                    Monitoramento inteligente de enchentes
                </p>
                <h1 className="text-4xl md:text-6xl font-black mb-5">
                    A água subiu? Você fica sabendo antes.
                </h1>
                <p className="text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
                    O AQUA ALERT acompanha o nível da água e a chuva em pontos de risco do bairro
                    e avisa moradores, motoristas e comerciantes quando é hora de se proteger.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to='/leituras'
                        className="rounded-md bg-cyan-400 text-zinc-950 font-bold px-6 py-3 hover:bg-cyan-300 transition">
                        Ver leituras
                    </Link>
                    <Link to='/leituras/nova'
                        className="rounded-md border-2 border-cyan-400 text-cyan-300 font-bold px-6 py-3 hover:bg-cyan-400/10 transition">
                        Registrar leitura
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Hero
