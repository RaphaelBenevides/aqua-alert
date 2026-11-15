import { LIMITES } from "../../utils/risco";
import BadgeStatus from "../badgestatus/BadgeStatus";

function TabelaNiveis() {
    return (
        <div className="bg-zinc-900/80 border border-cyan-400/10 rounded-2xl p-6 overflow-x-auto">
            <h2 className="text-2xl font-black mb-4">Como o risco é classificado</h2>
            <table className="w-full text-left">
                <thead>
                    <tr className="text-zinc-400 border-b border-zinc-700">
                        <th className="py-3 pr-4">Nível detectado</th>
                        <th className="py-3 pr-4">Estado</th>
                        <th className="py-3">Resposta</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-zinc-800">
                        <td className="py-3 pr-4">Abaixo de {LIMITES.atencao.nivelAgua} cm e {LIMITES.atencao.chuva} mm/h</td>
                        <td className="py-3 pr-4"><BadgeStatus status='Normal' /></td>
                        <td className="py-3">Monitoramento</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                        <td className="py-3 pr-4">A partir de {LIMITES.atencao.nivelAgua} cm ou {LIMITES.atencao.chuva} mm/h</td>
                        <td className="py-3 pr-4"><BadgeStatus status='Atenção' /></td>
                        <td className="py-3">Aviso preventivo</td>
                    </tr>
                    <tr>
                        <td className="py-3 pr-4">A partir de {LIMITES.perigo.nivelAgua} cm ou {LIMITES.perigo.chuva} mm/h</td>
                        <td className="py-3 pr-4"><BadgeStatus status='Perigo' /></td>
                        <td className="py-3">Alerta de risco</td>
                    </tr>
                </tbody>
            </table>
            <p className="text-zinc-500 text-sm mt-4">
                Limites definidos pelo grupo para o protótipo. Não são limites oficiais da Defesa Civil.
            </p>
        </div>
    )
}

export default TabelaNiveis
