import { FlatList } from "react-native";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { Media, Sections } from "../types/types";
import { getPopularMovie, getTopRetadMovie, getLatestMovie, getNext } from "../services/themoviedb.services";
import HorizontalList from "../components/HorizontalList";
import StyledContainer from "../components/StyledContainer";



export default function Home() {

    // List Movie
    const [moviePopulars, setMoviePopulars] = useState<Media[]>([]);
    const [movieTopRetad, setMovieTopRetad] = useState<Media[]>([]);
    const [movieLatest, setMovieLatest] = useState<Media[]>([]);
    const [movieNext, setMovieNext] = useState<Media[]>([]);


    //Carregar Lista atraves da comunicação com a API TheMovieDV
    useEffect(() => {
        const fetchData = async () => {
            const dataMedia = await getPopularMovie();
            const retadMovieDate = await getTopRetadMovie();
            const latestMovies = await getLatestMovie();
            const nextMovies = await getNext();

            setMoviePopulars(dataMedia);
            setMovieTopRetad(retadMovieDate);
            setMovieLatest(latestMovies);
            setMovieNext(nextMovies);
        }

        fetchData();
    }, [])

    const sections: Sections[] = [
        { title: 'Filmes em Cataz', data: movieLatest },
        { title: 'Filmes Populares', data: moviePopulars },
        { title: 'Filmes mais bem avaliados', data: movieTopRetad },
        { title: 'Filmes em breve', data: movieNext }
    ]

    const renderList = ({ item }: { item: Sections }) => (
        <HorizontalList title={item.title} data={item.data} />
    );


    return (

        <StyledContainer>
            {/* Header */}
            <Header />

            {/* Listatem de Seções */}
            <FlatList
                data={sections}
                renderItem={renderList}
                keyExtractor={(item) => item.title}

            />

        </StyledContainer >

    );
}