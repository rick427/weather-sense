import { useColorScheme } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from "@/screens/home";

import { routes } from "@/common/routes";
import { colors } from "@/common/theme";

export type AppRoutesTypes = {
    [routes.HOME]: undefined;
};

const AppStack = createNativeStackNavigator<AppRoutesTypes>();

export default function AppRoutes() {
    const { Navigator, Screen } = AppStack;
    const theme = useColorScheme();

    const defaultTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: colors.dark,
            background: colors.light,
            border: colors.transparent
        }
    }

    const navigationTheme = {
        ...defaultTheme,
        colors: {
            ...defaultTheme.colors, 
            background: theme === "dark" ? colors.dark : colors.light 
        }
    }
    return (
        <NavigationContainer theme={navigationTheme}>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name={routes.HOME} component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}
