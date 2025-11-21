import { TouchableOpacity, useColorScheme } from 'react-native';
import { icons } from "lucide-react-native";

import { colors } from '@/common/theme';
import styles from "./backbutton.styles";
import LucideIcon from "@/components/lucide-Icon";

interface BackButtonProps {
    onPress: () => void;
    icon?: keyof typeof icons;
}

export default function BackButton({onPress, icon="ChevronLeft"}:BackButtonProps) {
    const colorScheme = useColorScheme();

    const buttonBgColor = colorScheme === "dark" ? "#444444" : colors.gray_4;
    const iconColor = colorScheme === "dark" ? colors.light : colors.dark;
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: buttonBgColor}]} onPress={onPress}>
            <LucideIcon name={icon} color={iconColor} />
        </TouchableOpacity>
    )
}