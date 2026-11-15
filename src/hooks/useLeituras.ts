import { useEffect, useState } from "react";
import type Leitura from "../models/Leitura";
import { buscar, deletar } from "../services/Service";
import { classificarRisco } from "../utils/risco";

function useLeituras() {

    const [leituras, setLeituras] = useState<Leitura[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [erro, setErro] = useState<string>('')
    const [filtro, setFiltro] = useState<string>('Todos')

    async function carregarLeituras() {
        setIsLoading(true)
        setErro('')

        try {
            await buscar('/leituras', setLeituras)
        } catch (error) {
            setErro('Não foi possível carregar as leituras. Verifique a conexão com a API.')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        carregarLeituras()
    }, [])

    async function excluirLeitura(id: string) {
        if (window.confirm('Deseja realmente apagar esta leitura?')) {
            try {
                await deletar(`/leituras/${id}`)
                alert('Leitura apagada com sucesso!')
                carregarLeituras()
            } catch (error) {
                alert('Erro ao apagar a leitura!')
            }
        }
    }

    let leiturasFiltradas: Leitura[] = []
    let normal = 0
    let atencao = 0
    let perigo = 0

    leituras.forEach(leitura => {
        const status = classificarRisco(leitura.nivelAgua, leitura.chuva)

        if (status === 'Normal') {
            normal++
        } else if (status === 'Atenção') {
            atencao++
        } else {
            perigo++
        }

        if (filtro === 'Todos' || filtro === status) {
            leiturasFiltradas.push(leitura)
        }
    })

    const resumo = {
        total: leituras.length,
        normal: normal,
        atencao: atencao,
        perigo: perigo
    }

    let ultimaLeitura: Leitura | null = null
    if (leituras.length > 0) {
        ultimaLeitura = leituras[leituras.length - 1]
    }

    return {
        leiturasFiltradas,
        resumo,
        ultimaLeitura,
        filtro,
        setFiltro,
        isLoading,
        erro,
        carregarLeituras,
        excluirLeitura
    }
}

export default useLeituras
