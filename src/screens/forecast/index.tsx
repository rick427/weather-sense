import { View , useColorScheme} from 'react-native';
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

    const colorScheme = useColorScheme();
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

    const iconColor = colorScheme === "dark" ? colors.light : colors.dark;
    const tColor = colorScheme === "dark" ? colors.light : colors.dark;
    const tipsBgColor = colorScheme === "dark" ? "#444444" : colors.gray_2;
    const cardBorderColor = colorScheme === "dark" ? "#444444" : colors.muted;
    const cardLabelBgColor = colorScheme === "dark" ? "#444444" : colors.gray_2;
    return (
        <SafeView>
            <Stack flex={1} gap={sizes.base * 3}>
                <BackButton onPress={navigation.goBack} />

                <Stack gap={10}>
                    <Title size="h3" c={tColor}>
                        Weekly Forecast
                    </Title>

                    <View style={[styles.tips, {backgroundColor: tipsBgColor, borderColor: tipsBgColor}]}>
                        <Group flexWrap="nowrap" flex={0.95}>
                            <LucideIcon name="Info" size={18} strokeWidth={1.5} color={iconColor} />
                            <Stack flex={1} gap={5}>
                                <Title style={styles.tipsTitle} c={tColor}>
                                    Weather Tip
                                </Title>
                                <Text style={styles.tipsText} c={tColor}>
                                    Check the weekly forecast to plan outdoor activities 
                                    and stay prepared for sudden weather changes.
                                </Text>
                            </Stack>
                        </Group>

                        <LucideIcon name="X" size={18} strokeWidth={1.5} color={iconColor} />
                    </View>
                </Stack>

                <Stack>
                    {forecast.map(day => {
                        const dateObj = new Date(day.date);
                        const dayName = dateObj.toLocaleDateString('en-GB', { weekday: 'long' });
                        const dayMonth = dateObj.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
                        return (
                            <View style={[styles.card, {borderColor: cardBorderColor}]} key={day.date}>
                                <Group gap={10} align='center'>
                                    <LucideIcon name={getWeatherIcon(day.day.condition.text)} size={28} color={iconColor} />
                                    <Title size="h2" c={tColor}>
                                        {Math.round(day.day.avgtemp_c)}°C
                                    </Title>
                                </Group>

                                <Stack gap={10} align='flex-end'>
                                    <Text style={styles.cardTitle} c={tColor}>
                                        {dayName}, {dayMonth}
                                    </Text>
                                    <Text style={styles.cardText} c={tColor}>
                                        H:{Math.round(day.day.maxtemp_c)}° L:{Math.round(day.day.mintemp_c)}°
                                    </Text>
                                    <Text style={[styles.cardLabel, {backgroundColor: cardLabelBgColor}]} c={tColor}>
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