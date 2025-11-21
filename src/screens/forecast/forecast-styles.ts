import { StyleSheet } from "react-native";
import { sizes, fonts, colors } from "@/common/theme";

export default StyleSheet.create({
    tips: {
        borderWidth: 1,
        borderColor: colors.gray,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: sizes.base * 2,
        backgroundColor: colors.gray_2,
        borderRadius: sizes.radius  / 2,
    },
    tipsTitle: {
        ...fonts.semibold4,
        fontSize: sizes.fs4 - 3,
        textTransform: "uppercase",
        letterSpacing: 0.85,
    },
    tipsText: {
        ...fonts.regular5,
        letterSpacing: 0.5,
        color: colors.muted,
    },
    card: {
        borderWidth: 1,
        borderColor: colors.muted,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: sizes.base * 2,
        borderRadius: sizes.radius / 2,
    },
    cardTitle: {
        ...fonts.semibold4,
        fontSize: sizes.fs4 - 2,
        color: colors.dark,
    },
    cardLabel: {
        ...fonts.bold6,
        fontSize: sizes.fs6 - 1,
        letterSpacing: 0.8,
        textTransform: "uppercase",
        paddingVertical: sizes.base / 6,
        paddingHorizontal: sizes.base,
        backgroundColor: colors.gray_2,
        borderRadius: sizes.radius * 2,
    },
    cardText: {
        ...fonts.medium4,
        fontSize: sizes.fs4 - 2,
        letterSpacing: 0.5,
        textTransform: "uppercase",
    },
});