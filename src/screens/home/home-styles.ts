import { StyleSheet } from "react-native";
import { sizes, colors, fonts } from "@/common/theme";

export default StyleSheet.create({
    cityLabel: {
        ...fonts.medium2,
        fontSize: sizes.fs2 - 2,
    },
    badge: {
        borderWidth: 1,
        paddingVertical: sizes.base,
        paddingHorizontal: sizes.base * 2,
        borderRadius: sizes.radius,
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeLabel: {
        ...fonts.medium4,
        fontSize: sizes.fs4 - 3,
        letterSpacing: 0.5,
        color: colors.light,
        textAlign: "center",
    },
    title: {
        ...fonts.semibold1,
        fontSize: sizes.fs1 * 6,
        textAlign: "center",
        lineHeight: sizes.base * 20,
    },
    subtitle: {
        width: "80%",
        ...fonts.regular3,
        textAlign: "center",
    },
    box: {
        borderWidth: 1,
        alignSelf: "stretch",
        padding: sizes.base * 2,
        borderRadius: sizes.radius / 2,
    },
    boxLabel: {
        ...fonts.regular4,
        fontSize: sizes.fs4 - 2,
        textAlign: "center"
    },
    card: {
        alignSelf: "stretch",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.dark,
        padding: sizes.base * 2,
        borderRadius: sizes.radius / 2,
    },
    cardTitle: {
        color: colors.light,
        ...fonts.semibold3,
        fontSize: sizes.fs3 - 1,
    },
    cardSubtitle: {
        color: colors.light,
        ...fonts.regular4,
        fontSize: sizes.fs4 - 4,
    },
    pageLabel: {
        ...fonts.bold3,
        fontSize: sizes.fs3 - 2,
    },
    paper: {
        borderWidth: 1,
        padding: sizes.base,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: sizes.radius / 2,
        gap: sizes.base,
    },
    paperTitle: {},
    paperSubtitle: {},
});