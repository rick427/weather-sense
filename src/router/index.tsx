import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "@/screens/home";

import { routes } from "@/common/routes";

export type AppRoutesTypes = {
    [routes.HOME]: undefined;
};

const AppStack = createNativeStackNavigator<AppRoutesTypes>();

export default function AppRoutes() {
    const { Navigator, Screen } = AppStack;

    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name={routes.HOME} component={Home} />
            </Navigator>
        </NavigationContainer>
    )
}
