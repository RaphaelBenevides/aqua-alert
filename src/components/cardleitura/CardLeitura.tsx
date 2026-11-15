import { ClockIcon, CloudRainIcon, DropIcon, MapPinIcon, PencilSimpleIcon, TrashIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import type Leitura from "../../models/Leitura";
import { classificarRisco, formatarData, respostaDoSistema } from "../../utils/risco";
import BadgeStatus from "../badgestatus/BadgeStatus";

interface CardLeituraProps {
    leitura: Leitura;
    onExcluir: Function;
}

function CardLeitura({ leitura, onExcluir }: CardLeituraProps) {

    const status = classificarRisco(leitura.nivelAgua, leitura.chuva)

    return (
        <article className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6 flex flex-col hover:border-cyan-400/40 transition duration-300">
            <div className="flex justify-between items-start gap-3 mb-4">
                <h2 className="text-cyan-400 font-black text-2xl">{leitura.local}</h2>
                <BadgeStatus status={status} />
            </div>

            <p className="mb-3 flex items-center gap-2">
                <MapPinIcon size={20} className="text-zinc-500" />
                <span className="text-zinc-500">Bairro:</span> {leitura.bairro}
            </p>
            <p className="mb-3 flex items-center gap-2">
                <DropIcon size={20} className="text-zinc-500" />
                <span className="text-zinc-500">Nível da água:</span> {leitura.nivelAgua} cm
            </p>
            <p className="mb-3 flex items-center gap-2">
                <CloudRainIcon size={20} className="text-zinc-500" />
                <span className="text-zinc-500">Chuva:</span> {leitura.chuva} mm/h
            </p>
            <p className="mb-3 flex items-center gap-2">
                <ClockIcon size={20} className="text-zinc-500" />
                <span className="text-zinc-500">Data:</span> {formatarData(leitura.dataHora)}
            </p>
            <p className="mb-3">
                <span className="text-zinc-500">Resposta:</span> {respostaDoSistema(status)}
            </p>
            {leitura.observacao !== '' && (
                <p className="mb-3 text-zinc-400 italic">"{leitura.observacao}"</p>
            )}

            <div className="flex gap-3 mt-auto pt-4">
                <Link to={`/leituras/editar/${leitura.id}`}
                    className="flex-1 flex justify-center items-center gap-2 rounded-md border border-cyan-400 text-cyan-300 py-2 hover:bg-cyan-400/10 transition">
                    <PencilSimpleIcon size={18} /> Editar
                </Link>
                <button type="button" onClick={() => onExcluir(leitura.id)}
                    className="flex-1 flex justify-center items-center gap-2 rounded-md border border-red-400 text-red-300 py-2 hover:bg-red-400/10 transition cursor-pointer">
                    <TrashIcon size={18} /> Apagar
                </button>
            </div>
        </article>
    )
}

export default CardLeitura
