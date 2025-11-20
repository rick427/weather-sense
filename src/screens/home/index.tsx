import { useNavigation } from '@react-navigation/native';
import { View, ActivityIndicator, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from "./home-styles";
import Text from '@/components/text';
import Title from '@/components/title';
import Group from '@/components/group';
import Stack from '@/components/stack';
import Button from "@/components/button";
import SafeView from '@/components/safeview';
import LucideIcon from '@/components/lucideIcon';

import { colors } from '@/common/theme';
import { routes } from '@/common/routes';

import { useGetWeather } from '@/services';
import type { AppRoutesTypes } from '@/routes';
import type { WeatherApiResponse } from '@/services/weather-types';

export default function Home() {
    const { data, isLoading, error, refetch } = useGetWeather({city: "Nairobi"});
    const navigation = useNavigation<NativeStackNavigationProp<AppRoutesTypes>>();

    if (isLoading){
        return (
            <SafeView>
                <Stack flex={1} gap={10} justify='center' align='center'>
                    <ActivityIndicator size={30} color={colors.dark} />
                    <Text size="fs6" tt="uppercase" ls={1}>
                        Fetching Weather ...
                    </Text>
                </Stack>
            </SafeView>
        )
    }

    if(error || !data){
        return (
            <SafeView>
                <Stack flex={1} justify='center' align="center">
                    <LucideIcon size={30} name="ServerCrash" />

                    <Stack gap={10} align='center'>
                        <Title size="h6" tt="uppercase" ls={1}>
                            Voetsak! Server Broke
                        </Title>
                        <Text size="fs6" tt="uppercase" ls={1}>
                            Failed to load weather data. Please try again
                        </Text>
                    </Stack>

                    <Button 
                        onPress={refetch} 
                        title="Try again" 
                        style={{alignSelf: "stretch"}} 
                    />
                </Stack>
            </SafeView>
        )
    }

    const { location, current, forecast } = data as WeatherApiResponse;

    const getWeatherIcon = (text: string) => {
        const condition = text.toLowerCase();
        if (condition.includes('sun')) return 'Sun';
        if (condition.includes('cloud')) return 'Cloud';
        if (condition.includes('rain')) return 'CloudRain';
        if (condition.includes('snow')) return 'CloudSnow';
        if (condition.includes('storm') || condition.includes('thunder')) return 'CloudLightning';
        return 'Sun';
    }
    return (
        <SafeView>
            <Stack gap={10} align='center'>
                <View style={styles.badge}>
                    <LucideIcon name="Earth" size={20} strokeWidth={1.5} />

                    <Text style={styles.badgeLabel}>
                        {location.name} | {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </Text>
                </View>
                <Title style={styles.cityLabel}>
                    {current.condition.text}
                </Title>
            </Stack>

            <Stack align='center'>
                <Title style={styles.title}>
                    {Math.round(current.temp_c)}°
                </Title>
                <Text style={styles.subtitle}>
                    H:{forecast.forecastday[0].day.maxtemp_c}° •
                    L:{forecast.forecastday[0].day.mintemp_c}°
                </Text>

                <View style={styles.box}>
                    <Text style={styles.boxLabel}>
                        Today has temperatures from {forecast.forecastday[0].day.mintemp_c}° 
                        - {forecast.forecastday[0].day.maxtemp_c}°, 
                        feels like {current.feelslike_c}°. 
                        Chance of rain are {forecast.forecastday[0].day.daily_chance_of_rain ?? 0}%. 
                        UV index is at {current.uv}. Sunrise at {forecast.forecastday[0].astro.sunrise}, 
                        Sunset at {forecast.forecastday[0].astro.sunset}.
                    </Text>
                </View>

                <View style={styles.card}>
                    <Stack gap={10} align='center'>
                        <LucideIcon name="Droplets" size={30} color={colors.light} />
                        <Stack gap={5} align='center'>
                            <Title style={styles.cardTitle}>{current.humidity}%</Title>
                            <Text style={styles.cardSubtitle}>Humiditiy</Text>
                        </Stack>
                    </Stack>

                    <Stack gap={10} align='center'>
                        <LucideIcon name="Wind" size={30} color={colors.light} />
                        <Stack gap={5} align='center'>
                            <Title style={styles.cardTitle}>{current.wind_kph} km/h</Title>
                            <Text style={styles.cardSubtitle}>Wind</Text>
                        </Stack>
                    </Stack>

                    <Stack gap={10} align='center'>
                        <LucideIcon name="DraftingCompass" size={30} color={colors.light} />
                        <Stack gap={5} align='center'>
                            <Title style={styles.cardTitle}>{current.vis_km} km</Title>
                            <Text style={styles.cardSubtitle}>Visibility</Text>
                        </Stack>
                    </Stack>
                </View>

                <Stack style={{alignSelf: "stretch"}}>
                    <Group justify='space-between' align='center'>
                        <Title style={styles.pageLabel}>
                            Weekly Forecast 
                        </Title>
                        <TouchableOpacity style={styles.pageBtn} onPress={() => navigation.navigate(routes.FORECAST)}>
                            <LucideIcon name="MoveRight" />
                        </TouchableOpacity>
                    </Group>

                    <Group justify="space-between" align='center'>
                        {forecast.forecastday.slice(0, 4).map(day => (
                            <View style={styles.paper} key={day.date}>
                                <Title style={styles.paperTitle}>
                                    A:{Math.round(day.day.avgtemp_c)}°
                                </Title>

                                <LucideIcon name={getWeatherIcon(day.day.condition.text)} />
                                <Text style={styles.paperSubtitle}>
                                    {new Date(day.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                </Text>
                            </View>
                        ))}
                    </Group>
                </Stack>
            </Stack>
        </SafeView>
    )
}