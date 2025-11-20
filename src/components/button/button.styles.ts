import { StyleSheet } from "react-native";
import { fonts, sizes, colors } from "@/common/theme";

export default StyleSheet.create({
    button: {
        paddingVertical: sizes.base * 1.6,
        paddingHorizontal: sizes.base * 2,
        //borderRadius: sizes.radius,
        borderRadius: sizes.radius / 4,
        flexDirection: "row",
        gap: sizes.base,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: colors.gray,                
        shadowOffset: { width: 0, height: 2 },  
        shadowOpacity: 0.25,                 
        shadowRadius: 3.84,                  
        elevation: 5,      
    },
    text: {
        ...fonts.semibold4,
        fontSize: sizes.fs4 - 2,
        textTransform: "uppercase",
        letterSpacing: 1,
    },
    disabledButton: {
        opacity: 0.8,
        backgroundColor: colors.gray_1,
        borderColor: colors.transparent,
    }
})