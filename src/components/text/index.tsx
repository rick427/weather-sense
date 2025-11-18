import { Text as RNText } from 'react-native';
import type { TextProps, TextStyle, StyleProp } from 'react-native';

import styles from "./text.styles";
import { colors, fonts, sizes } from '@/common/theme';

type TextSizes = "fs1" | "fs2" | "fs3" | "fs4" | "fs5" | "fs6";

interface RNTextProps extends TextProps {
    bg?: TextStyle["backgroundColor"];
    tt?: TextStyle["textTransform"];
    c?: string;
    p?: TextStyle["padding"];
    px?: TextStyle["paddingHorizontal"];
    py?: TextStyle["paddingVertical"];
    opacity?: number;
    italic?: boolean;
    size?: TextSizes;
    style?: StyleProp<TextStyle>
    fs?: number;
    underline?: boolean;
    lh?: number;
    ls?: number;
    w?: TextStyle["width"];
    children: React.ReactNode;
    ff?: keyof typeof fonts;
    ta?: TextStyle["textAlign"];
}

export default function Text(props:RNTextProps) {
    const { 
        w,
        p,
        px,
        py,
        fs,
        lh,
        tt,
        ls,
        bg,
        style,
        italic,
        opacity,
        children,
        ta = "left",  
        size = "fs4",
        ff = "regular4",
        underline = false, 
        c = colors.dark,  
        ...rest
    } = props;

    // Resolve font size based on preset or fallback to custom size
    const resolvedFontSize = fs || (sizes[size] as number) || sizes.fs4;

    return (
        <RNText
            style={[
                styles.text,
                {   width:w,
                    color:c,
                    opacity,
                    padding:p,
                    textAlign:ta,
                    lineHeight:lh,
                    letterSpacing:ls,
                    textTransform: tt,
                    backgroundColor: bg,
                    paddingVertical: py,
                    paddingHorizontal: px,
                    fontSize: resolvedFontSize,
                    fontStyle: italic ? "italic" : "normal",
                    textDecorationLine: underline ? "underline" : "none",
                    fontFamily: fonts[ff]?.fontFamily || fonts.regular4.fontFamily,
                },
                style
            ]}
            {...rest}
        >
            {children}
        </RNText>
    )
}