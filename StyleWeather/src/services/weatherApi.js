// Conectando a API do OpenWeatherMap para buscar dados climáticos já fornecidos.
const API_KEY = "49010a1cb855d8f5c60c4af8c5f51d46";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function buscarClimaPorCidade(city) {
    const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=pt`);
    if (!response.ok) throw new Error("Erro ao buscar clima");
    return await response.json();
}