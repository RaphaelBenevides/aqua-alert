export default interface Clima {
    current: {
        time: string;
        interval: number;
        precipitation: number;
        temperature_2m: number;
        weather_code: number;
    }
}
