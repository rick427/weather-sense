import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { WeatherParams, WeatherApiResponse } from "./weather-types";

const API_KEY = "87187c278dda4e8080465952250711";
const BASE_URL = "https://api.weatherapi.com/v1";

export const GET_WEATHER_QKEY = "/weather";
async function getWeather({city}:WeatherParams):Promise<WeatherApiResponse>{
    try {
        const config = {
            params: { key: API_KEY, q: city, days: 7, aqi: "no", alerts: "no", }, 
            headers: {"Content-Type": "application/json"}
        };
        const res = await axios.get(`${BASE_URL}/forecast.json`, config);
        return res.data;

    } catch (error:unknown) {
        if(axios.isAxiosError(error)){
            const axiosError = error as AxiosError;
            if(axiosError.response){
                const errorRes = axiosError.response.status;
                const errorData = JSON.stringify(axiosError.response.data);
                throw new Error(`API Error (${errorRes}): ${errorData}`);
            }
        }
       throw new Error("Unknown error fetching weather data");
    }
}

export function useGetWeather({city}:WeatherParams){
    return useQuery({
        queryKey: [GET_WEATHER_QKEY],
        queryFn: () => getWeather({city}),
        refetchOnWindowFocus: false,
        enabled: !!city,
        staleTime: 5 * 60 * 1000, // 5 mins
    });
}