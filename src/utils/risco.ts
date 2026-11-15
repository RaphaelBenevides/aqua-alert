import type Leitura from "../models/Leitura";

export const LIMITES = {
    atencao: { nivelAgua: 50, chuva: 20 },
    perigo: { nivelAgua: 100, chuva: 50 }
}

export function classificarRisco(nivelAgua: number, chuva: number) {
    if (nivelAgua >= LIMITES.perigo.nivelAgua || chuva >= LIMITES.perigo.chuva) {
        return 'Perigo'
    }
    if (nivelAgua >= LIMITES.atencao.nivelAgua || chuva >= LIMITES.atencao.chuva) {
        return 'Atenção'
    }
    return 'Normal'
}

export function respostaDoSistema(status: string) {
    if (status === 'Perigo') {
        return 'Alerta de risco'
    }
    if (status === 'Atenção') {
        return 'Aviso preventivo'
    }
    return 'Monitoramento'
}

export function orientacao(status: string) {
    if (status === 'Perigo') {
        return 'Saia de áreas baixas, não atravesse ruas alagadas e ligue 199 (Defesa Civil) em caso de emergência.'
    }
    if (status === 'Atenção') {
        return 'Fique atento: tire objetos do chão, evite a região e acompanhe as próximas leituras.'
    }
    return 'Nível da água dentro do normal. Siga acompanhando.'
}

export function validarLeitura(leitura: Leitura) {
    if (leitura.local.length < 3) {
        return 'Informe o local monitorado (mínimo 3 letras).'
    }
    if (leitura.bairro.length < 3) {
        return 'Informe o bairro (mínimo 3 letras).'
    }
    if (leitura.nivelAgua < 0 || leitura.nivelAgua > 500) {
        return 'O nível da água deve estar entre 0 e 500 cm.'
    }
    if (leitura.chuva < 0 || leitura.chuva > 300) {
        return 'A chuva deve estar entre 0 e 300 mm/h.'
    }
    return ''
}

export function formatarData(dataHora: string) {
    if (dataHora === '') {
        return '-'
    }
    return new Date(dataHora).toLocaleString('pt-BR')
}
