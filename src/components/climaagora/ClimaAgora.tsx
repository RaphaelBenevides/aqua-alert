import { ArrowClockwiseIcon, CloudRainIcon, ThermometerIcon } from "@phosphor-icons/react";
import type { ChangeEvent } from "react";
import { ClipLoader } from "react-spinners";
import { BAIRROS, orientacaoChuva } from "../../utils/clima";
import { formatarData, respostaDoSistema } from "../../utils/risco";
import BadgeStatus from "../badgestatus/BadgeStatus";

interface ClimaAgoraProps {
    bairro: string;
    chuvaMmH: number;
    temperatura: number;
    descricao: string;
    horario: string;
    status: string;
    isLoading: boolean;
    erro: string;
    onTrocarBairro: Function;
    onAtualizar: Function;
}

function ClimaAgora({ bairro, chuvaMmH, temperatura, descricao, horario, status, isLoading, erro, onTrocarBairro, onAtualizar }: ClimaAgoraProps) {
    return (
        <div className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                <div>
                    <p className="text-cyan-400 uppercase tracking-widest text-sm mb-1">Chuva agora · dados reais</p>
                    <h2 className="text-2xl font-black">Tempo agora · {bairro}</h2>
                </div>
                <div className="flex gap-3">
                    <select id="bairroClima" value={bairro}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => onTrocarBairro(e.target.value)}
                        className="bg-zinc-950 border-2 border-zinc-700 rounded p-2 focus:border-cyan-400 outline-none">
                        {BAIRROS.map(item => (
                            <option key={item.nome} value={item.nome}>{item.nome}</option>
                        ))}
                    </select>
                    <button type="button" onClick={() => onAtualizar()} title="Atualizar"
                        className="rounded border-2 border-cyan-400 text-cyan-300 px-3 hover:bg-cyan-400/10 cursor-pointer">
                        <ArrowClockwiseIcon size={20} weight="bold" />
                    </button>
                </div>
            </div>

            {isLoading && (
                <div className="flex justify-center py-6">
                    <ClipLoader color="#22d3ee" size={40} />
                </div>
            )}

            {!isLoading && erro !== '' && <p className="text-red-300">{erro}</p>}

            {!isLoading && erro === '' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="flex items-center gap-4">
                        <CloudRainIcon size={56} className="text-cyan-400" />
                        <div>
                            <p className="text-4xl font-black">{chuvaMmH} <span className="text-xl text-zinc-400">mm/h</span></p>
                            <p className="text-zinc-400">{descricao}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThermometerIcon size={56} className="text-fuchsia-300" />
                        <div>
                            <p className="text-4xl font-black">{temperatura} <span className="text-xl text-zinc-400">°C</span></p>
                            <p className="text-zinc-400">Atualizado: {formatarData(horario)}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <BadgeStatus status={status} />
                            <span className="font-bold">{respostaDoSistema(status)}</span>
                        </div>
                        <p className="text-zinc-300">{orientacaoChuva(status)}</p>
                    </div>
                </div>
            )}

            <p className="text-zinc-500 text-sm mt-6">
                Fonte: Open-Meteo. Clique em atualizar para buscar a chuva de novo. O nível da água vem dos sensores.
            </p>
        </div>
    )
}

export default ClimaAgora
