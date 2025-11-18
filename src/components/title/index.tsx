import { Text } from 'react-native';
import type { TextProps, TextStyle, StyleProp } from 'react-native';

import styles from "./title.styles";
import { colors, fonts, sizes } from '@/common/theme';

type TitleSizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps extends TextProps {
    w?: TextStyle["width"];
    c?: string;
    size?: TitleSizes;
    fs?: number;
    style?:  StyleProp<TextStyle>;
    ls?: number;
    tt?: TextStyle["textTransform"];
    children: React.ReactNode;
    ff?: keyof typeof fonts;
    ta?: TextStyle["textAlign"];
}

export default function Title(props:TitleProps) {
    const { 
        w,
        fs,
        ls,
        tt,
        style,
        children,
        ta = "left",  
        size = "h4",
        ff = "bold4",
        c = colors.dark, 
        ...rest
    } = props;

    // Resolve font size based on preset or fallback to custom size
    const resolvedFontSize = fs || (sizes[size] as number) || sizes.fs4;

    return (
        <Text
            style={[
                styles.title,
                {
                    width:w,
                    color:c,
                    textAlign:ta,
                    letterSpacing:ls,
                    fontSize: resolvedFontSize,
                    textTransform:tt,
                    fontFamily: fonts[ff]?.fontFamily || fonts.bold4.fontFamily,
                },
                style,
            ]}
            {...rest}
        >
            {children}
        </Text>
    )
}