import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: "rgb(20, 39, 47)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0)",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
    },

    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        letterSpacing: 1,
    },

    pandaTitle: {
        color: " rgb(186, 246, 82)"
    },
    flixTitle: {
        color: "rgb(201, 134, 78)",
        fontStyle: "italic",
    },

    menuBotton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "rgb(201, 134, 78)",
        borderRadius: 5,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    menuDropDown: {
        position: "absolute",
        top: 70,
        right: 0,
        left: 0,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "rgba(42,51,71,1)",
        borderRadius: 15
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderBottomColor: "rgba(53, 101, 133, 0.5)",
        borderBottomWidth: 1,
    },
    menuText: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: 700,
    }
})