import { View } from 'react-native';
import type { ViewStyle, StyleProp } from 'react-native';

import styles from "./stack.styles";
import { sizes, moderateScale } from '@/common/theme';

interface StackProps {
    flex?: number;
    gap?: number;
    w?: ViewStyle["width"];
    p?: number;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    align?: ViewStyle["alignItems"];
    justify?: ViewStyle["justifyContent"];
}

export default function Stack(props:StackProps) {
    const { 
        w,
        flex,
        p, 
        align, 
        justify, 
        gap = sizes.base * 2, 
        style, 
        children 
    } = props;

    const resolvedGap = moderateScale(gap) || sizes.base;
    const resolvedPadding = p ? moderateScale(p) : undefined;
    return (
        <View style={[
            styles.stack, 
            { 
                flex,
                width: w,
                gap: resolvedGap, 
                padding: resolvedPadding,
                alignItems: align,
                justifyContent: justify,
            },  
            style
        ]}>
            {children}
        </View>
    )
}