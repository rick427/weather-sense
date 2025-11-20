import { TouchableOpacity } from 'react-native';
import { icons } from "lucide-react-native";

import styles from "./backbutton.styles";
import LucideIcon from "@/components/lucideIcon";

interface BackButtonProps {
    onPress: () => void;
    icon?: keyof typeof icons;
}

export default function BackButton({onPress, icon="ChevronLeft"}:BackButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <LucideIcon name={icon} />
        </TouchableOpacity>
    )
}