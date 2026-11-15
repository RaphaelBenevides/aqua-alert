import { CloudRainIcon } from "@phosphor-icons/react";
import { ClipLoader } from "react-spinners";
import type Leitura from "../../models/Leitura";
import { BAIRROS } from "../../utils/clima";
import BadgeStatus from "../badgestatus/BadgeStatus";

interface FormLeituraProps {
    leitura: Leitura;
    statusPrevisto: string;
    isLoading: boolean;
    editando: boolean;
    atualizarEstado: Function;
    salvarLeitura: Function;
    retornar: Function;
    bairroClima: string;
    chuvaAtual: number;
    climaCarregando: boolean;
    onUsarChuvaAtual: Function;
}

function FormLeitura({ leitura, statusPrevisto, isLoading, editando, atualizarEstado, salvarLeitura, retornar, bairroClima, chuvaAtual, climaCarregando, onUsarChuvaAtual }: FormLeituraProps) {
    return (
        <form onSubmit={(e) => salvarLeitura(e)}
            className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6 md:p-10 flex flex-col gap-4 max-w-2xl mx-auto">

            <div className="flex flex-col">
                <label htmlFor="local" className="mb-1 font-bold">Local monitorado</label>
                <input type="text" id="local" name="local" placeholder="Ex.: Córrego Ipiranga - Ponte da Rua A"
                    value={leitura.local} onChange={(e) => atualizarEstado(e)} required
                    className="bg-zinc-950 border-2 border-zinc-700 rounded p-3 focus:border-cyan-400 outline-none" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="bairro" className="mb-1 font-bold">Bairro</label>
                <input type="text" id="bairro" name="bairro" placeholder="Ex.: Ipiranga" list="lista-bairros"
                    value={leitura.bairro} onChange={(e) => atualizarEstado(e)} required
                    className="bg-zinc-950 border-2 border-zinc-700 rounded p-3 focus:border-cyan-400 outline-none" />
                <datalist id="lista-bairros">
                    {BAIRROS.map(bairro => (
                        <option key={bairro.nome} value={bairro.nome} />
                    ))}
                </datalist>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="nivelAgua" className="mb-1 font-bold">Nível da água (cm)</label>
                    <input type="number" id="nivelAgua" name="nivelAgua" min={0} max={500}
                        value={leitura.nivelAgua} onChange={(e) => atualizarEstado(e)}
                        className="bg-zinc-950 border-2 border-zinc-700 rounded p-3 focus:border-cyan-400 outline-none" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="chuva" className="mb-1 font-bold">Chuva (mm/h)</label>
                    <input type="number" id="chuva" name="chuva" min={0} max={300} step={0.1}
                        value={leitura.chuva} onChange={(e) => atualizarEstado(e)}
                        className="bg-zinc-950 border-2 border-zinc-700 rounded p-3 focus:border-cyan-400 outline-none" />
                </div>
            </div>

            <button type="button" onClick={() => onUsarChuvaAtual()} disabled={climaCarregando}
                className="flex items-center justify-center gap-2 rounded border-2 border-cyan-400/40 text-cyan-300 py-2 hover:bg-cyan-400/10 cursor-pointer">
                <CloudRainIcon size={20} />
                {climaCarregando
                    ? 'Consultando chuva real...'
                    : `Usar chuva real de agora em ${bairroClima}: ${chuvaAtual} mm/h`}
            </button>

            <div className="flex flex-col">
                <label htmlFor="observacao" className="mb-1 font-bold">Observação (opcional)</label>
                <input type="text" id="observacao" name="observacao" placeholder="Ex.: água chegando na calçada"
                    value={leitura.observacao} onChange={(e) => atualizarEstado(e)}
                    className="bg-zinc-950 border-2 border-zinc-700 rounded p-3 focus:border-cyan-400 outline-none" />
            </div>

            <div className="flex items-center gap-3 bg-zinc-950 rounded p-3">
                <span className="text-zinc-400">Estado desta leitura:</span>
                <BadgeStatus status={statusPrevisto} />
            </div>

            <div className="flex justify-around w-full gap-4 mt-2">
                <button type='button' onClick={() => retornar()}
                    className='rounded text-white bg-zinc-700 hover:bg-zinc-600 w-1/2 py-3 cursor-pointer'>
                    Cancelar
                </button>
                <button type='submit' disabled={isLoading}
                    className='rounded text-zinc-950 font-bold bg-cyan-400 hover:bg-cyan-300 w-1/2 py-3 flex justify-center cursor-pointer'>
                    {isLoading
                        ? <ClipLoader color="#09090b" size={24} />
                        : <span>{editando ? 'Atualizar' : 'Cadastrar'}</span>
                    }
                </button>
            </div>
        </form>
    )
}

export default FormLeitura
