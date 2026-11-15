import { useEffect, useState } from "react";
import type Clima from "../models/Clima";
import { buscarClima } from "../services/ClimaService";
import { converterParaMmPorHora, descreverTempo, encontrarBairro } from "../utils/clima";
import { classificarRisco } from "../utils/risco";

function useClima(nomeBairro: string) {

    const [clima, setClima] = useState<Clima | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [erro, setErro] = useState<string>('')

    const bairro = encontrarBairro(nomeBairro)

    async function carregarClima() {
        setIsLoading(true)
        setErro('')

        try {
            await buscarClima(bairro.latitude, bairro.longitude, setClima)
        } catch (error) {
            setErro('Não foi possível consultar a chuva agora.')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        carregarClima()
    }, [bairro.nome])

    let chuvaMmH = 0
    let temperatura = 0
    let descricao = ''
    let horario = ''

    if (clima !== null) {
        chuvaMmH = converterParaMmPorHora(clima.current.precipitation)
        temperatura = clima.current.temperature_2m
        descricao = descreverTempo(clima.current.weather_code)
        horario = clima.current.time
    }

    return {
        bairro: bairro.nome,
        chuvaMmH,
        temperatura,
        descricao,
        horario,
        status: classificarRisco(0, chuvaMmH),
        isLoading,
        erro,
        carregarClima
    }
}

export default useClima
