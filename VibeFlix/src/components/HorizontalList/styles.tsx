import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(20, 39, 47)",
        paddingVertical: 10,
        marginVertical: 15,
        borderRadius: 8
    },

    sectionTitle: {
        color: "rgb(153, 202, 69)",
        fontSize: 20,
        fontWeight: 700,

        textTransform: 'uppercase',
        letterSpacing: 0.3,

        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 0.3,
        marginLeft: 15,
        marginBottom: 10
    },

    item:{
        width: 140,
        marginLeft: 15,
        borderRadius: 8,
        backgroundColor: "rgba(34, 89, 112, 0.3)",

        shadowColor: "#000",
        shadowOffset: {width:0, height:4},
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 8,
    },

    itemImage: {
        width: 140,
        height: 200,

        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },

    itemText: {
        marginVertical: 5,
        marginHorizontal: 5,
        fontSize: 17,
        fontWeight: 700,
        textAlign: "center",
        color: "#fff",

        textShadowColor: "#000",
        textShadowOffset: {width:1, height:1},
        textShadowRadius: 0.3,
    },

    list: {
        paddingHorizontal: 15,
        paddingBottom: 8,
    }
})