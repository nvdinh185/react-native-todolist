import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: "red"
    },
    input: {
        height: 44,
        width: '80%',
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: color.text
    },
    iconWraper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: color.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        fontSize: 40,
        color: color.white
    }
})

export default styles;