import { CheckCircleIcon, SirenIcon, WarningIcon } from "@phosphor-icons/react";
import type Leitura from "../../models/Leitura";
import { classificarRisco, formatarData, orientacao } from "../../utils/risco";

interface PainelAlertaProps {
    leitura: Leitura | null;
}

function PainelAlerta({ leitura }: PainelAlertaProps) {

    if (leitura === null) {
        return (
            <div className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6 text-center text-zinc-400">
                Nenhuma leitura dos sensores registrada ainda.
            </div>
        )
    }

    const status = classificarRisco(leitura.nivelAgua, leitura.chuva)

    let cor = 'border-emerald-400 bg-emerald-500/10 text-emerald-300'

    if (status === 'Atenção') {
        cor = 'border-amber-400 bg-amber-500/10 text-amber-300'
    }
    if (status === 'Perigo') {
        cor = 'border-red-400 bg-red-500/10 text-red-300'
    }

    return (
        <div className={`border-2 ${cor} rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center`}>
            {status === 'Perigo' && <SirenIcon size={72} weight='fill' />}
            {status === 'Atenção' && <WarningIcon size={72} weight='fill' />}
            {status === 'Normal' && <CheckCircleIcon size={72} weight='fill' />}

            <div className="text-center md:text-left">
                <p className="uppercase tracking-widest text-sm mb-1">
                    Sensor no ponto de risco · última leitura · {formatarData(leitura.dataHora)}
                </p>
                <h2 className="text-3xl font-black mb-2">
                    {status} em {leitura.local}
                </h2>
                <p className="text-zinc-200 mb-1">
                    {leitura.bairro} · água a {leitura.nivelAgua} cm · chuva de {leitura.chuva} mm/h
                </p>
                <p className="text-zinc-300">{orientacao(status)}</p>
                <p className="text-zinc-400 text-sm mt-3">
                    Fonte: sensor instalado no local (mede o nível da água e a chuva no ponto).
                    O nível pode continuar alto mesmo depois que a chuva diminui.
                </p>
            </div>
        </div>
    )
}

export default PainelAlerta
