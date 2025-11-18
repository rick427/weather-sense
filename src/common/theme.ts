//import { DefaultTheme } from '@react-navigation/native';
import { Dimensions, PixelRatio } from "react-native";

//@: Colors
export const colors = Object.freeze({
    sunny: "#FFE142",
    cloudy: "#42C6FF",
    rainy: "#FF64D4",

    gray: "#EBEBEB",
    gray_1: "#DADADA",
    gray_2: "#F5F5F5",
    gray_3: "#fafafa",
    gray_4: "#F5F6F8",

    checkbox: "#cccccc",
    secondary_tint: "#e6f5ff",
    secondary_tint_1: "#cceaf9",
    secondary_tint_2: "#c0e3f4ff",

    tertiary_tint: "#eaf0fdff",
    tertiary_tint_1: "#d9e0f5ff",
    tertiary_tint_2: "#ced5f4ff",

    primary_tint: "#f1f1fc",
    primary_tint_1: "#D3D3EF",
    primary_tint_2: "#e4e4f7",
    
    pincode: "#d4d4d4",
    muted: "#666666",
    dialog: "#f7f8ff",
    gray_sb: "#e6e6e6",
    gray_label: "#3d3d3d",

    dark: "#0A0A0A",
    light: "#FFFFFF",
    
    danger: "#c41224",
    danger_light: "#fcbbc1",
    danger_light_1: "#f5d3d6",

    danger_tint: "#fcf2f4",
    danger_tint_1: "#f5e1e4",
    danger_tint_2: "#fcebee",

    blue_tint: "#E3EBFF",
    blue_tint_1: "#CCD9FF",
    blue_tint_2: "#B3C8FF",

    orange: "#FF9F00",
    orange_tint: "#fff5e6ff",
    orange_tint_1: "#ffefccff",
    orange_tint_2: "#fbe2acff",

    yellow_tint: "#fbfad6ff",
    yellow_tint_1: "#fdf0c6ff",

    dark_blue_tint: "#D6DBE9",
    dark_blue_tint_1: "#c2d0fbff",
    dark_blue_tint_2: "#A5AECF",

    success: "#58b81cff", 
    success_tint: "#f1ffd6",
    success_tint_1: "#dff0bd",

    transparent: "transparent",
});

//@: Sizes
const { width, height } = Dimensions.get("window");
const guidelineBaseWidth = 360; // Base width for design
const guidelineBaseHeight = 640; // Base height for design

// Scale based on width and pixel density
export const scale = (size:number) => {
    const scaledSize = (width / guidelineBaseWidth) * size;
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};
  
// Scale based on height and pixel density
export const verticalScale = (size:number) => {
    const scaledSize = (height / guidelineBaseHeight) * size;
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};

// Moderated scaling for better fine-tuning
export const moderateScale = (size:number, factor = 0.5) => {
    const scaledSize = size + (scale(size) - size) * factor;
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};

export const sizes = Object.freeze({
    base: scale(8),
    radius: moderateScale(30),

    h1: moderateScale(32),
    h2: moderateScale(28),
    h3: moderateScale(24),
    h4: moderateScale(20),
    h5: moderateScale(18),
    h6: moderateScale(16),

    fs1: moderateScale(24),
    fs2: moderateScale(22),
    fs3: moderateScale(18),
    fs4: moderateScale(14),
    fs5: moderateScale(12),
    fs6: moderateScale(10),

    width,
    height,
});

//@: Fonts
export const fonts = Object.freeze({
    light1: {fontFamily: 'Manrope-Light', fontSize: sizes.fs1},
    light2: {fontFamily: 'Manrope-Light', fontSize: sizes.fs2},
    light3: {fontFamily: 'Manrope-Light', fontSize: sizes.fs3},
    light4: {fontFamily: 'Manrope-Light', fontSize: sizes.fs4},
    light5: {fontFamily: 'Manrope-Light', fontSize: sizes.fs5},
    light6: {fontFamily: 'Manrope-Light', fontSize: sizes.fs6},

    medium1: {fontFamily: 'Manrope-Medium', fontSize: sizes.fs1},
    medium2: {fontFamily: 'Manrope-Medium', fontSize: sizes.fs2},
    medium3: {fontFamily: 'Manrope-Medium', fontSize: sizes.fs3},
    medium4: {fontFamily: 'Manrope-Medium', fontSize: sizes.fs4},
    medium5: {fontFamily: 'Manrope-Medium', fontSize: sizes.fs5},
    medium6: {fontFamily: 'Manrope-Medium', fontSize: sizes.fs6},

    regular1: {fontFamily: 'Manrope-Regular', fontSize: sizes.fs1},
    regular2: {fontFamily: 'Manrope-Regular', fontSize: sizes.fs2},
    regular3: {fontFamily: 'Manrope-Regular', fontSize: sizes.fs3},
    regular4: {fontFamily: 'Manrope-Regular', fontSize: sizes.fs4},
    regular5: {fontFamily: 'Manrope-Regular', fontSize: sizes.fs5},
    regular6: {fontFamily: 'Manrope-Regular', fontSize: sizes.fs6},

    semibold1: {fontFamily: 'Manrope-SemiBold', fontSize: sizes.fs1},
    semibold2: {fontFamily: 'Manrope-SemiBold', fontSize: sizes.fs2},
    semibold3: {fontFamily: 'Manrope-SemiBold', fontSize: sizes.fs3},
    semibold4: {fontFamily: 'Manrope-SemiBold', fontSize: sizes.fs4},
    semibold5: {fontFamily: 'Manrope-SemiBold', fontSize: sizes.fs5},
    semibold6: {fontFamily: 'Manrope-SemiBold', fontSize: sizes.fs6},

    bold1: {fontFamily: 'Manrope-Bold', fontSize: sizes.fs1},
    bold2: {fontFamily: 'Manrope-Bold', fontSize: sizes.fs2},
    bold3: {fontFamily: 'Manrope-Bold', fontSize: sizes.fs3},
    bold4: {fontFamily: 'Manrope-Bold', fontSize: sizes.fs4},
    bold5: {fontFamily: 'Manrope-Bold', fontSize: sizes.fs5},
    bold6: {fontFamily: 'Manrope-Bold', fontSize: sizes.fs6},

    extrabold1: {fontFamily: 'Manrope-ExtraBold', fontSize: sizes.fs1},
    extrabold2: {fontFamily: 'Manrope-ExtraBold', fontSize: sizes.fs2},
    extrabold3: {fontFamily: 'Manrope-ExtraBold', fontSize: sizes.fs3},
    extrabold4: {fontFamily: 'Manrope-ExtraBold', fontSize: sizes.fs4},
    extrabold5: {fontFamily: 'Manrope-ExtraBold', fontSize: sizes.fs5},
    extrabold6: {fontFamily: 'Manrope-ExtraBold', fontSize: sizes.fs6},
});
