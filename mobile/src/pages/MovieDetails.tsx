import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import { text, theme } from '../styles';
import { getMovie, insertReview } from '../services';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';
import ReviewCard from './ReviewCard';
import ReviewInsertCard from './ReviewInsertCard';
import { isAllowedByRole } from '../services/auth';
import Toast from 'react-native-tiny-toast';

const MovieDetails = ({ route: { params: { id } } }) => {
    const navigation = useNavigation();
    const [movie, setMovie] = useState({
        id: null,
        title: null,
        synopsis: null,
        year: null,
        imgUrl: null,
        subTitle: null,
        reviews: []
    });

    const [loading, setLoading] = useState(false);
    const [allowed, setAllowed] = useState(true);
    const [textReview, setTextReview] = useState("");

    async function loadMovieData() {
        const toast = Toast.showLoading("Carregando...");
        setLoading(true);
        const res = await getMovie(id);
        setMovie(res.data);
        setLoading(false);
        setAllowed(await isAllowedByRole(['ROLE_MEMBER']));
        Toast.hide(toast);
    };

    useEffect(() => {
        loadMovieData();
    }, []);

    const notBlankText = (text: string) => {
        return text.replace(/\s/g, '') !== '';
    }

    async function handleInsertReview() {
        if (notBlankText(textReview)) {
            await insertReview(id, textReview)
                .then(result => {
                    setTextReview("");
                    Toast.showSuccess("Avaliação inserida com sucesso");
                    loadMovieData();
                }).catch(err => {
                    Toast.show("Erro ao inserir avaliação. Revise use texto ou informe ao administrador o erro: " + err);
                });
        } else {
            Toast.show("A avaliação não pode estar em branco.");
        }
    }

    return (
        <View style={theme.container}>
            {loading ? (<ActivityIndicator size="large" />) :
                (
                    <ScrollView>
                        <View style={theme.detailCard}>
                            <Text style={text.movieTitleDetails}>
                                {movie.title}
                            </Text>
                            <Image source={{ uri: movie.imgUrl }}
                                style={theme.movieImgDetails} />
                            <View style={theme.movieDescription}>
                                <Text style={text.movieYearDetails}>
                                    {movie.year}
                                </Text>
                                <Text style={text.movieSubtitleDetails}>
                                    {movie.subTitle}
                                </Text>
                                <Text style={text.movieSynopsisText}>
                                    Sinopse
                            </Text>
                                <ScrollView style={theme.scrollTextContainer}>
                                    <Text style={text.movieSynopsis}>
                                        {movie.synopsis}
                                    </Text>
                                </ScrollView>
                            </View>
                        </View>
                        {allowed && (
                            <ReviewInsertCard
                                textReview={textReview}
                                setTextReview={setTextReview}
                                handleInsertReview={handleInsertReview} />)}
                        {movie.reviews.length > 0 ?
                            <View style={theme.reviewCard}>
                                <View style={theme.movieDescription}>
                                    <Text style={text.movieAvalicoesText}>
                                        Avaliações
                                    </Text> 
                                </View>
                                {movie.reviews?.map((review) => (
                                    <ReviewCard reviewText={review.text} 
                                    reviewUsername={review.userName} 
                                    key={review.id}/>))}
                            </View> : null
                        }
                    </ScrollView>
                )
            }
        </View>
    )
}

export default MovieDetails;