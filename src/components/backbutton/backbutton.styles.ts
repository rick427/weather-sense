import { StyleSheet } from "react-native";
import { sizes, colors } from "@/common/theme";

export default StyleSheet.create({
    button: {
        width: sizes.base * 6,
        height: sizes.base * 6,
        borderRadius: sizes.radius * 6,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.gray_4
    },
})