import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { text, theme } from '../styles';

interface MovieProps {
    id: number;
    imgUrl: string;
    title: string;
    subTitle: string;
    year: string;
}

const MovieCard: React.FC<MovieProps> = ({ id, imgUrl, title, subTitle, year }) => {
    const navigation = useNavigation();
    return (
        <View style={theme.movieCard}>
            <Image source={{ uri: imgUrl }} style={theme.movieImg} />
            <View style={theme.movieDescription}>
                <Text style={text.movieTitle}>
                    {title}
                </Text>
                <Text style={text.movieYear}>
                    {year}
                </Text>
                <Text style={text.movieSubtitle}>
                    {subTitle}
                </Text>
            </View>
            <TouchableOpacity style={theme.detailsBtn} onPress={() => 
                navigation.navigate("MovieDetails", { id })}>
                <Text style={text.detailsBtnTxt}>Ver detalhes</Text>
            </TouchableOpacity>
        </View>
    )

}

export default MovieCard;