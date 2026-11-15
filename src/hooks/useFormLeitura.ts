import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type Leitura from "../models/Leitura";
import { atualizar, buscar, cadastrar } from "../services/Service";
import { classificarRisco, validarLeitura } from "../utils/risco";

function useFormLeitura(id: string | undefined) {

    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [leitura, setLeitura] = useState<Leitura>({
        id: '',
        local: '',
        bairro: '',
        nivelAgua: 0,
        chuva: 0,
        dataHora: '',
        observacao: ''
    })

    function retornar() {
        navigate('/leituras')
    }

    async function buscarLeituraPorId(id: string) {
        setIsLoading(true)

        try {
            await buscar(`/leituras/${id}`, setLeitura)
        } catch (error) {
            alert('Leitura não encontrada!')
            retornar()
        }
        setIsLoading(false)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarLeituraPorId(id)
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.type === 'number') {
            setLeitura({
                ...leitura,
                [e.target.name]: Number(e.target.value)
            })
        } else {
            setLeitura({
                ...leitura,
                [e.target.name]: e.target.value
            })
        }
    }

    function preencherChuva(chuvaReal: number) {
        setLeitura({
            ...leitura,
            chuva: chuvaReal
        })
    }

    async function salvarLeitura(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const mensagemErro = validarLeitura(leitura)

        if (mensagemErro !== '') {
            alert(mensagemErro)
        } else {
            setIsLoading(true)

            let dataHora = leitura.dataHora
            if (dataHora === '') {
                dataHora = new Date().toISOString()
            }

            const dados = {
                local: leitura.local,
                bairro: leitura.bairro,
                nivelAgua: leitura.nivelAgua,
                chuva: leitura.chuva,
                dataHora: dataHora,
                observacao: leitura.observacao
            }

            try {
                if (id !== undefined) {
                    await atualizar(`/leituras/${id}`, dados, setLeitura)
                    alert('Leitura atualizada com sucesso!')
                } else {
                    await cadastrar('/leituras', dados, setLeitura)
                    alert('Leitura cadastrada com sucesso!')
                }
                retornar()
            } catch (error) {
                alert('Erro ao salvar a leitura!')
            }
            setIsLoading(false)
        }
    }

    const statusPrevisto = classificarRisco(leitura.nivelAgua, leitura.chuva)

    return {
        leitura,
        isLoading,
        statusPrevisto,
        atualizarEstado,
        preencherChuva,
        salvarLeitura,
        retornar
    }
}

export default useFormLeitura
