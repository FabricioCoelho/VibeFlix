import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { styles } from "./styles";
import {Feather} from "@expo/vector-icons/";
import { useState } from "react";
import { Modal } from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const handleVisible = () => {
        setMenuVisible(!menuVisible)
    }

    //Configuração das rotas
    const router = useRouter();

    const naviToSeries = () => {
        router.push('/Series')
    }

    const naviToFilmes = () => {
        router.push('/')
    }

    return (

        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                <Text style={styles.pandaTitle}>Vibe</Text>
                <Text style={styles.flixTitle}>Flix</Text>
            </Text>

            <TouchableOpacity onPress={handleVisible} style={styles.menuBotton}>
                <Feather name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={menuVisible}
                animationType="fade"
                onRequestClose={handleVisible}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.modalOverlay}
                    onPress={handleVisible}>
                    <View style={styles.menuDropDown}>
                        <TouchableOpacity style={styles.menuItem} onPress={naviToFilmes}>
                            <Text style={styles.menuText}>Filmes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.menuItem} onPress={naviToSeries}>
                            <Text style={styles.menuText}>Séries</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>

    );
}