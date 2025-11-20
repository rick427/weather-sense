import { icons } from 'lucide-react-native';
import type { ViewStyle, TextStyle } from 'react-native';
import { TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

import styles from "./button.styles";
import { colors } from '@/common/theme';

import Text from "@/components/text";
import LucideIcon from '@/components/lucideIcon';

type ButtonVariants = "filled" | "outlined" | "light" | "danger" | "dark";

interface ButtonProps {
    flex?: number;
    icon?: keyof typeof icons;
    title: string;
    style?: ViewStyle;
    loading?: boolean;
    disabled?: boolean;
    onPress: () => void;
    textStyle?: TextStyle;
    variant?: ButtonVariants;
}

export default function Button(props:ButtonProps) {
    const { 
        flex,
        icon,
        title,
        style,
        onPress,
        textStyle,
        loading = false,
        disabled = false,
        variant = "filled",
    } = props;

    function getButtonStyle():ViewStyle {
        const baseShadow = {
            shadowColor: colors.muted,
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity:  0.16,
            shadowRadius: 1.51,
            elevation: 1
        };
        switch(variant){
            case "outlined":
                return {
                    borderWidth: 1,
                    borderColor: colors.gray_sb,
                    backgroundColor: colors.light,
                    ...baseShadow

                }
            case "dark":
                return {
                    borderWidth: 1,
                    borderColor: colors.dark,
                    backgroundColor: colors.dark,
                }
            case "light":
                return {
                    borderWidth: 1,
                    borderColor: colors.gray,
                    backgroundColor: colors.gray,
                }
            case "danger":
                return {
                    borderWidth: 1,
                    borderColor: colors.danger,
                    backgroundColor: colors.danger,
                }
            case "filled":
            default:
                return {
                    borderWidth: 1,
                    borderColor: colors.dark,
                    backgroundColor: colors.dark,
                }
        }
    }

    function getTextStyle():TextStyle {
        switch(variant){
            case "outlined":
                return { color: colors.dark }
            case "light":
                return { color: colors.dark }
            case "danger":
                return { color: colors.light }
            case "filled":
            case "dark":
            default:
                return { color: colors.light }
        }
    }

    function getActivityColor() {
        switch(variant){
            case "outlined":
                return colors.dark;
            case "light":
                return colors.dark;
            case "filled":
            case "danger":
            case "dark":
                return colors.light;
            default:
                return colors.dark;
        }
    }

    return (
        <TouchableOpacity
            style={[
                styles.button,
                getButtonStyle(),
                style,
                disabled && styles.disabledButton,
                { flex }
            ]}
            activeOpacity={0.7}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {icon && (
                <LucideIcon strokeWidth={1.5} name={icon} size={18} color={getActivityColor()} />
            )}

            {loading ? (
                <ActivityIndicator size={22} color={getActivityColor()} />
            ) : (
                <Text style={StyleSheet.flatten([
                    styles.text, 
                    getTextStyle(), 
                    disabled && {color: colors.dark}, 
                    textStyle]
                )}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}