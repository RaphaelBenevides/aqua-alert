import { useParams } from "react-router-dom";
import FormLeitura from "../../components/formleitura/FormLeitura";
import useClima from "../../hooks/useClima";
import useFormLeitura from "../../hooks/useFormLeitura";

function FormularioLeitura() {

    const { id } = useParams<{ id: string }>()
    const { leitura, isLoading, statusPrevisto, atualizarEstado, preencherChuva, salvarLeitura, retornar } = useFormLeitura(id)

    const clima = useClima(leitura.bairro)

    return (
        <>
            <main className="max-w-7xl mx-auto px-6 py-14">
                <header className="text-center mb-10">
                    <p className="text-cyan-400 uppercase tracking-[0.3rem] text-sm mb-5">
                        {id !== undefined ? 'Editar registro' : 'Novo registro'}
                    </p>
                    <h1 className="text-4xl md:text-5xl font-black">
                        {id !== undefined ? 'Editar leitura' : 'Registrar leitura'}
                    </h1>
                </header>

                <FormLeitura
                    leitura={leitura}
                    statusPrevisto={statusPrevisto}
                    isLoading={isLoading}
                    editando={id !== undefined}
                    atualizarEstado={atualizarEstado}
                    salvarLeitura={salvarLeitura}
                    retornar={retornar}
                    bairroClima={clima.bairro}
                    chuvaAtual={clima.chuvaMmH}
                    climaCarregando={clima.isLoading}
                    onUsarChuvaAtual={() => preencherChuva(clima.chuvaMmH)}
                />
            </main>
        </>
    )
}

export default FormularioLeitura
