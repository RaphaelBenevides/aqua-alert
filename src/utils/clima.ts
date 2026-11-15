export const BAIRROS = [
    { nome: 'Centro', latitude: -23.5505, longitude: -46.6333 },
    { nome: 'Ipiranga', latitude: -23.5890, longitude: -46.6060 },
    { nome: 'Aricanduva', latitude: -23.5780, longitude: -46.5110 },
    { nome: 'Cambuci', latitude: -23.5660, longitude: -46.6210 },
    { nome: 'Mooca', latitude: -23.5500, longitude: -46.5990 },
    { nome: 'Lapa', latitude: -23.5270, longitude: -46.7040 },
    { nome: 'Santo Amaro', latitude: -23.6530, longitude: -46.7090 },
    { nome: 'Itaquera', latitude: -23.5360, longitude: -46.4560 }
]

export function encontrarBairro(nome: string) {
    let bairroEncontrado = BAIRROS[0]

    BAIRROS.forEach(bairro => {
        if (bairro.nome === nome) {
            bairroEncontrado = bairro
        }
    })

    return bairroEncontrado
}

export function converterParaMmPorHora(precipitacao: number) {
    return Math.round(precipitacao * 4 * 10) / 10
}

export function descreverTempo(codigo: number) {
    if (codigo === 0) {
        return 'Céu limpo'
    }
    if (codigo <= 3) {
        return 'Parcialmente nublado'
    }
    if (codigo === 45 || codigo === 48) {
        return 'Neblina'
    }
    if (codigo >= 51 && codigo <= 57) {
        return 'Garoa'
    }
    if (codigo >= 61 && codigo <= 67) {
        return 'Chuva'
    }
    if (codigo >= 80 && codigo <= 82) {
        return 'Pancadas de chuva'
    }
    if (codigo >= 95) {
        return 'Tempestade'
    }
    return 'Tempo instável'
}

export function orientacaoChuva(status: string) {
    if (status === 'Perigo') {
        return 'Chuva muito forte: evite sair, fique longe de córregos e ligue 199 (Defesa Civil) em caso de emergência.'
    }
    if (status === 'Atenção') {
        return 'Chuva forte: evite áreas baixas e acompanhe o nível da água nos sensores.'
    }
    return 'Chuva fraca ou sem chuva no momento. Siga acompanhando.'
}
