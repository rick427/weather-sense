import { useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, ActivityIndicator, TouchableOpacity, RefreshControl, TextInput, useColorScheme } from 'react-native';

import styles from "./home-styles";
import Text from '@/components/text';
import Title from '@/components/title';
import Group from '@/components/group';
import Stack from '@/components/stack';
import Button from "@/components/button";
import SafeView from '@/components/safeview';
import LucideIcon from '@/components/lucide-Icon';
import CountyList from '@/components/county-list';
import BackdropComponent from '@/components/backdrop';

import { colors } from '@/common/theme';
import { routes } from '@/common/routes';

import { useGetWeather } from '@/services';
import type { AppRoutesTypes } from '@/routes';
import { useFilterStore } from '@/store/filter.store';
import type { WeatherApiResponse } from '@/services/weather-types';

export default function Home() {
    const { city, setCity } = useFilterStore(state => state);
    const { data, isLoading, error, isFetching, refetch } = useGetWeather({city});

    const colorScheme = useColorScheme();
    const [value, setValue] = useState<string>("");
    const sheetRef = useRef<BottomSheetModal>(null);
    const navigation = useNavigation<NativeStackNavigationProp<AppRoutesTypes>>();

    const badgeColor = colorScheme === "dark" ? "#444444" : colors.gray_4;
    const badgeBorderColor = colorScheme === "dark" ? "#4444444" : colors.gray;
    const iconColor = colorScheme === "dark" ? colors.light : colors.dark;
    const tColor = colorScheme === "dark" ? colors.light : colors.dark;
    const boxBorderColor = colorScheme === "dark" ? "#444444" : colors.muted;
    const cardBgColor = colorScheme === "dark" ? "#444444" : colors.dark;
    const pageBtnColor = colorScheme === "dark" ? "#444444" : colors.gray_4;
    const paperBorderColor = colorScheme === "dark" ? "#444444" : colors.muted;
    const listBtnColor = colorScheme === "dark" ? "#2d2d2dff" : colors.dark;
    const listInputColor = colorScheme === "dark" ? "#2d2d2dff" : colors.gray_4;
    const listInputBorder = colorScheme === "dark" ? "#2d2d2dff" : colors.gray_2;

    if (isLoading){
        return (
            <SafeView>
                <Stack flex={1} gap={10} justify='center' align='center'>
                    <ActivityIndicator size={30} color={tColor} />
                    <Text size="fs6" tt="uppercase" ls={1} c={tColor}>
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
                        <Title size="h6" tt="uppercase" ls={1} c={tColor}>
                            Voetsak! Server Broke!
                        </Title>
                        <Text size="fs6" tt="uppercase" ls={1} c={tColor}>
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

    function getWeatherIcon (text: string){
        const condition = text.toLowerCase();
        if (condition.includes('sun')) return 'Sun';
        if (condition.includes('cloud')) return 'Cloud';
        if (condition.includes('rain')) return 'CloudRain';
        if (condition.includes('snow')) return 'CloudSnow';
        if (condition.includes('storm') || condition.includes('thunder')) return 'CloudLightning';
        return 'Sun';
    }

    function reset(){
        sheetRef.current?.dismiss();
    }

    function onSearch(){
        if(!value) return;

        setCity(value);
        setValue("");
    }

    const refreshControl = (
        <RefreshControl
            onRefresh={refetch} 
            refreshing={isFetching}
            tintColor={colors.dark}
        />
    );
    return (
        <SafeView refreshControl={refreshControl}>
            <Stack gap={10} align='center'>
                <TouchableOpacity 
                    style={[styles.badge, {backgroundColor: badgeColor, borderColor: badgeBorderColor}]} 
                    onPress={() => sheetRef.current?.present()}
                >
                    <LucideIcon name="MapPin" size={20} strokeWidth={1.5} color={iconColor} />

                    <Text style={styles.badgeLabel} c={tColor}>
                        {location.name} | {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
                    </Text>
                </TouchableOpacity>
                <Title style={styles.cityLabel} c={tColor}>
                    {current.condition.text}
                </Title>
            </Stack>

            <Stack align='center'>
                <Title style={styles.title} c={tColor}>
                    {Math.round(current.temp_c)}°
                </Title>
                <Text style={styles.subtitle} c={tColor}>
                    H:{forecast.forecastday[0].day.maxtemp_c}° •
                    L:{forecast.forecastday[0].day.mintemp_c}°
                </Text>

                <View style={[styles.box, {borderColor: boxBorderColor}]}>
                    <Text style={styles.boxLabel} c={tColor}>
                        {city} has temperatures from {forecast.forecastday[0].day.mintemp_c}° 
                        - {forecast.forecastday[0].day.maxtemp_c}°, 
                        feels like {current.feelslike_c}°. 
                        Chance of rain are {forecast.forecastday[0].day.daily_chance_of_rain ?? 0}%. 
                        UV index is at {current.uv}. Sunrise at {forecast.forecastday[0].astro.sunrise}, 
                        Sunset at {forecast.forecastday[0].astro.sunset}.
                    </Text>
                </View>

                <View style={[styles.card, {backgroundColor: cardBgColor}]}>
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
                        <Title style={styles.pageLabel} c={tColor}>
                            Weekly Forecast 
                        </Title>
                        <TouchableOpacity 
                            style={[styles.pageBtn, {backgroundColor: pageBtnColor, borderColor: pageBtnColor}]} 
                            onPress={() => navigation.navigate(routes.FORECAST)}
                        >
                            <LucideIcon name="MoveRight" color={iconColor} />
                        </TouchableOpacity>
                    </Group>

                    <Group justify="space-between" align='center'>
                        {forecast.forecastday.slice(0, 4).map(day => (
                            <View style={[styles.paper, {borderColor: paperBorderColor}]} key={day.date}>
                                <Title style={styles.paperTitle} c={tColor}>
                                    A:{Math.round(day.day.avgtemp_c)}°
                                </Title>

                                <LucideIcon name={getWeatherIcon(day.day.condition.text)} color={iconColor} />
                                <Text style={styles.paperSubtitle} c={tColor}>
                                    {new Date(day.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                                </Text>
                            </View>
                        ))}
                    </Group>
                </Stack>
            </Stack>

            <BottomSheetModal              
                ref={sheetRef}
                snapPoints={["70%"]}
                enableDynamicSizing={false}
                enablePanDownToClose={true}
                backdropComponent={BackdropComponent}
                containerStyle={{ backgroundColor: "rgba(0,0,0,0.25)",}}
                backgroundStyle={{ backgroundColor: colorScheme === "dark" ? "#444444" : colors.light }}
                handleIndicatorStyle={{ backgroundColor: colorScheme === "dark" ? colors.light : colors.dark }}
            >
                <Stack style={styles.listWrapper}>
                    <Group align='center'>
                        <TextInput 
                            value={value}
                            style={[styles.listInput, {backgroundColor: listInputColor, borderColor: listInputBorder}]} 
                            onChangeText={t => setValue(t)}
                            placeholderTextColor={colors.gray_sb}
                            placeholder="Search by: Town | City | State | Country" 
                        />
                        <TouchableOpacity style={[styles.listBtn, {backgroundColor: listBtnColor}]} onPress={onSearch}>
                            <LucideIcon 
                                name="Search" 
                                size={22} 
                                strokeWidth={1.5} 
                                color={colors.light} 
                            />
                        </TouchableOpacity>
                    </Group>
                    <CountyList reset={reset} />
                </Stack>
            </BottomSheetModal>
        </SafeView>
    )
}