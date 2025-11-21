import { useMemo } from "react";
import { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from "react-native-reanimated";

export default function BackdropComponent({animatedIndex, style}:BottomSheetBackdropProps){
    const containerAnimatedStyle = useAnimatedStyle(() => ({
        opacity: interpolate(
            animatedIndex.value,
            [-1, 0],
            [0, 1],
            Extrapolation.CLAMP
        ),
    }));

    const containerStyle = useMemo(() => 
        [
            style, {backgroundColor: "rgba(0, 0, 0, 0.55)",},
            containerAnimatedStyle,
        ],
        [style, containerAnimatedStyle]
    );
    return <Animated.View style={containerStyle} />;
}