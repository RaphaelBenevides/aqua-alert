interface BadgeStatusProps {
    status: string;
}

function BadgeStatus({ status }: BadgeStatusProps) {

    let cor = 'bg-emerald-500/15 border-emerald-400 text-emerald-300'

    if (status === 'Atenção') {
        cor = 'bg-amber-500/15 border-amber-400 text-amber-300'
    }
    if (status === 'Perigo') {
        cor = 'bg-red-500/15 border-red-400 text-red-300'
    }

    return (
        <span className={`inline-block border ${cor} px-3 py-1 rounded-md text-sm font-bold uppercase`}>
            {status}
        </span>
    )
}

export default BadgeStatus
