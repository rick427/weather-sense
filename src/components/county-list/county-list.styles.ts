import { StyleSheet } from "react-native";
import { sizes, colors, fonts } from "@/common/theme";

export default StyleSheet.create({
    list: {
        flexGrow: 1,
        gap: sizes.base * 2,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    itemIcon: {
        width: sizes.base * 5,
        height: sizes.base * 5,
        borderRadius: sizes.radius * 5,
        justifyContent: "center",
        alignItems: "center",
    },
    itemTitle: {
        ...fonts.semibold4,
        fontSize: sizes.fs4 - 2,
        letterSpacing: 0.5,
    },
    itemText: {
        ...fonts.regular4,
        fontSize: sizes.fs4 - 2,
        letterSpacing: 0.5,
        color: colors.muted,
    },
});