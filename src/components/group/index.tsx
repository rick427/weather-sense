import { View } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

import styles from "./group.styles";
import { sizes, moderateScale } from '@/common/theme';

interface GroupProps {
    flex?: number;
    flexWrap?: ViewStyle["flexWrap"];
    gap?: number;
    style?: StyleProp<ViewStyle>;
    p?: number;
    justify?: ViewStyle["justifyContent"];
    align?: ViewStyle["alignItems"];
    children: React.ReactNode;
}

export default function Group(props:GroupProps) {
    const { 
        flex,
        flexWrap="wrap",
        justify, 
        align, 
        p, 
        gap = sizes.base, 
        style, 
        children 
    } = props;

    const resolvedGap = moderateScale(gap) || sizes.base;
    const resolvedPadding = p ? moderateScale(p) : undefined;
    return (
        <View style={[
            styles.group, 
            {   flex,
                flexWrap,
                gap: resolvedGap, 
                padding: resolvedPadding,
                justifyContent: justify,
                alignItems: align,
            },  
            style
        ]}>
            {children}
        </View>
    )
}