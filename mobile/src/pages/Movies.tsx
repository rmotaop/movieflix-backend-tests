import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MovieCard } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, pickerSelectStyles, theme } from '../styles';
import { getGenres, getMovies } from '../services';
import Toast from 'react-native-tiny-toast';
import RNPickerSelect from 'react-native-picker-select';

type Genre = {
    id: number;
    name: string;
    label: string;
    value: number;
}

const Movies: React.FC = () => {
    const [movies, setMovies] = useState([]);
    const [genre, setGenre] = useState<Genre>();
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(false);
    const txtPlaceholder = {
        label: 'Escolha um gênero...',
        value: null,
        color: colors.mediumGray,
    };

    const mapSelectGenres = (genres: Genre[]) => {
        return genres.map(genre => ({
            ...genre,
            label: genre.name,
            value: genre.id,
            key: genre.id
        }));
    }

    async function fillGenres() {
        const res = await getGenres();
        const selectedGenres = mapSelectGenres(res.data);
        setGenres(selectedGenres);
    };

    async function fillProducts() {
        const toast = Toast.showLoading("Carregando...");
        setLoading(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoading(false);
        Toast.hide(toast);
    };

    useEffect(() => {
        fillGenres();
        fillProducts();
    }, []);

    const handleChangeGenre = (genreRes: Genre) => {
        setGenre(genreRes);
    }

    const data = genre ?
        movies.filter(movie => movie.genreId === genre) :
        movies;
    return (
        <View style={theme.container}>
            <ScrollView contentContainerStyle={theme.scrollContainer}>
                {
                    loading ? (<ActivityIndicator size="large" />) : (
                        <>
                            <View style={theme.inputContainer}>
                                <View style={theme.selectContainer}>
                                    <RNPickerSelect
                                        placeholder={txtPlaceholder}
                                        items={genres}
                                        value={genre}
                                        onValueChange={(e) => {
                                            setGenre(e);
                                            handleChangeGenre(e);
                                        }}
                                        style={pickerSelectStyles}
                                    />
                                </View>
                            </View>
                            {(data.map((movie) => (
                                <MovieCard {...movie} key={movie.id} />
                            )))}
                        </>
                    )}
            </ScrollView>
        </View>
    )

}

export default Movies;