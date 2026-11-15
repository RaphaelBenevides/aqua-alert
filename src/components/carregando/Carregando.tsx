import { ClipLoader } from "react-spinners";

function Carregando() {
    return (
        <div className="flex flex-col items-center gap-4 py-20">
            <ClipLoader color="#22d3ee" size={56} />
            <p className="text-zinc-400">Carregando dados do sensor...</p>
        </div>
    )
}

export default Carregando
