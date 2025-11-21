import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from "./forecast-styles";
import Text from '@/components/text';
import Title from '@/components/title';
import Stack from '@/components/stack';
import Group from '@/components/group';
import SafeView from '@/components/safeview';
import BackButton from '@/components/back-button';
import LucideIcon from '@/components/lucide-Icon';

import { sizes, colors } from '@/common/theme';

import { useGetWeather } from '@/services';
import type { AppRoutesTypes } from '@/routes';
import type { WeatherApiResponse } from '@/services/weather-types';

export default function Forecast() {
    const { data } = useGetWeather({city: "Nairobi"});
    const navigation = useNavigation<NativeStackNavigationProp<AppRoutesTypes>>();

    const getWeatherIcon = (text: string) => {
        const name = text.toLowerCase();
        if (name.includes("sun")) return "Sun";
        if (name.includes("cloud")) return "Cloud";
        if (name.includes("rain")) return "CloudRain";
        if (name.includes("storm") || name.includes("thunder")) return "CloudLightning";
        if (name.includes("snow")) return "CloudSnow";
        return "Sun";
    };

    const forecast = (data as WeatherApiResponse)?.forecast?.forecastday ?? [];
    return (
        <SafeView>
            <Stack flex={1} gap={sizes.base * 3}>
                <BackButton onPress={navigation.goBack} />

                <Stack gap={10}>
                    <Title size="h3">
                        Weekly Forecast
                    </Title>

                    <View style={styles.tips}>
                        <Group flexWrap="nowrap" flex={0.95}>
                            <LucideIcon name="Info" size={18} strokeWidth={1.5} />
                            <Stack flex={1} gap={5}>
                                <Title style={styles.tipsTitle}>
                                    Weather Tip
                                </Title>
                                <Text style={styles.tipsText}>
                                    Check the weekly forecast to plan outdoor activities 
                                    and stay prepared for sudden weather changes.
                                </Text>
                            </Stack>
                        </Group>

                        <LucideIcon name="X" size={18} strokeWidth={1.5} />
                    </View>
                </Stack>

                <Stack>
                    {forecast.map(day => {
                        const dateObj = new Date(day.date);
                        const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'long' });
                        const dayMonth = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
                        return (
                            <View style={styles.card} key={day.date}>
                                <Group gap={10} align='center'>
                                    <LucideIcon name={getWeatherIcon(day.day.condition.text)} size={28} color={colors.dark} />
                                    <Title size="h2" c={colors.dark}>
                                        {Math.round(day.day.avgtemp_c)}°C
                                    </Title>
                                </Group>

                                <Stack gap={10} align='flex-end'>
                                    <Text style={styles.cardTitle}>
                                        {dayName}, {dayMonth}
                                    </Text>
                                    <Text style={styles.cardText}>
                                        H:{Math.round(day.day.maxtemp_c)}° L:{Math.round(day.day.mintemp_c)}°
                                    </Text>
                                    <Text style={styles.cardLabel}>
                                        {day.day.condition.text}
                                    </Text>
                                </Stack>
                            </View>
                        )
                    })}
                </Stack>
            </Stack>
        </SafeView>
    )
}