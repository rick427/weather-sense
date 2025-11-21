import { StyleSheet } from "react-native";
import { sizes, colors, fonts } from "@/common/theme";

export default StyleSheet.create({
    cityLabel: {
        ...fonts.medium3,
    },
    badge: {
        borderWidth: 1,
        paddingVertical: sizes.base,
        paddingHorizontal: sizes.base * 2,
        borderRadius: sizes.radius,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: sizes.base,
    },
    badgeLabel: {
        ...fonts.medium4,
        fontSize: sizes.fs4 - 3,
        letterSpacing: 0.5,
        textAlign: "center",
    },
    title: {
        ...fonts.semibold1,
        fontSize: sizes.fs1 * 5,
        textAlign: "center",
        lineHeight: sizes.base * 20,
    },
    subtitle: {
        width: "80%",
        ...fonts.medium3,
        textAlign: "center",
    },
    box: {
        borderWidth: 1,
        alignSelf: "stretch",
        padding: sizes.base * 2,
        borderRadius: sizes.radius / 2,
        alignItems: "center",
    },
    boxLabel: {
        ...fonts.regular4,
        fontSize: sizes.fs4 - 2,
        letterSpacing: 0.5,
    },
    card: {
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: sizes.base * 2,
        borderRadius: sizes.radius / 2,
        gap: sizes.base * 6,
    },
    cardTitle: {
        color: colors.light,
        ...fonts.semibold3,
        fontSize: sizes.fs3 - 1,
    },
    cardSubtitle: {
        color: colors.light,
        ...fonts.regular6,
        fontSize: sizes.fs6 - 1,
        textTransform: "uppercase",
        letterSpacing: 0.8,
    },
    pageLabel: {
        ...fonts.semibold3,
        fontSize: sizes.fs3 - 2,
    },
    pageBtn: {
        width: sizes.base * 5,
        height: sizes.base * 5,
        borderRadius: sizes.radius * 5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.gray,
    },
    paper: {
        borderWidth: 1,
        padding: sizes.base * 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: sizes.radius / 2,
        gap: sizes.base,
    },
    paperTitle: {
        ...fonts.bold3,
        fontSize: sizes.fs3 - 4,
    },
    paperSubtitle: {
        ...fonts.medium6,
        letterSpacing: 0.5,
        textTransform: "uppercase",
    },
    listWrapper: {
        flex: 1,
        padding: sizes.base * 2,
    },
    listInput: {
        flex: 1,
        borderWidth: 1,
        padding: sizes.base * 1.5,
        borderRadius: sizes.radius / 4,
        ...fonts.regular4,
        fontSize: sizes.fs4 - 2,
    },
    listBtn: {
        width: sizes.base * 5,
        height: sizes.base * 5,
        borderRadius: sizes.radius,
        justifyContent: "center",
        alignItems: "center",
    },
});