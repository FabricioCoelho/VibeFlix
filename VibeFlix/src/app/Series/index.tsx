import { FlatList, SafeAreaView, View, Text, BackHandler } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { Media, Sections } from "../../types/types";
import { getAiring, getAir, getPopularSeries, getTopRatedSeries } from "../../services/themoviedb.services";
import HorizontalList from "../../components/HorizontalList";


export default function Home() {

    // List Series
    const [seriePopulars, setSeriePopulars] = useState<Media[]>([]);
    const [serieNoAr, setSeriesNoAr] = useState<Media[]>([]);
    const [seriesRetad, setSeriesRetad] = useState<Media[]>([]);
    const [seriesAir, setSeriesAir] = useState<Media[]>([]);



    //Carregar Lista atraves da comunicação com a API TheMovieDV
    useEffect(() => {
        const fetchData = async () => {
            const popularSeries = await getPopularSeries();
            const noArSeries = await getAiring();
            const retadSeries = await getTopRatedSeries();
            const air = await getAir();


            setSeriesNoAr(noArSeries);
            setSeriesRetad(retadSeries);
            setSeriesAir(air);
            setSeriePopulars(popularSeries);
        }

        fetchData();
    }, [])

    const sections: Sections[] = [
        {title: 'Series Em exibição', data: serieNoAr},
        {title: 'Series no Ar', data: seriesAir},
        {title: 'Series Populares', data: seriePopulars },
        {title: "Series mais bem avaliadas", data: seriesRetad}
    ]

    const renderList = ({ item }: { item: Sections }) => (
        <HorizontalList title={item.title} data={item.data} />
    );


    return (
        <SafeAreaView style={styles.container}>
            {/* <StatusBar style="auto" /> */}

            {/* Header */}
            <Header />

            {/* Listatem de Seções */}
            <FlatList
                data={sections}
                renderItem={renderList}
                keyExtractor={(item) => item.title}

            />


        </SafeAreaView>
    );
}