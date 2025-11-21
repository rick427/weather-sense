import { icons } from "lucide-react-native";

interface LucideIconProps {
    name: keyof typeof icons;
    color?: string;
    size?: number;
    strokeWidth?: number;
}

export default function LucideIcon({name, ...rest}:LucideIconProps) {
    const CustomIcon = icons[name];
    return (
        <CustomIcon {...rest} />
    )
}