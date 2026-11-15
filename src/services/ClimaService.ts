import axios from "axios";

const apiClima = axios.create({
    baseURL: 'https://api.open-meteo.com/v1'
})

export const buscarClima = async (latitude: number, longitude: number, setDados: Function) => {
    const resposta = await apiClima.get(`/forecast?latitude=${latitude}&longitude=${longitude}&current=precipitation,temperature_2m,weather_code&timezone=America/Sao_Paulo`)
    setDados(resposta.data)
}
