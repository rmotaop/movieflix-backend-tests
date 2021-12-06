import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { theme, text } from '../styles';
import seta from '../core/assets/Seta.png';
import desenho from '../core/assets/Desenho.png';
import { useNavigation } from '@react-navigation/core';

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.container}>
            <Image source={desenho} style={theme.draw} />
            <View style={theme.textContainer}>
                <Text style={text.bold}>
                    Avalie filmes
                    </Text>
                <Text style={text.regular}>
                    Diga o que você achou do seu filme favorito.
                    </Text>
            </View>
            <TouchableOpacity
                style={theme.primaryButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Login")}
            >
                <Text style={text.primaryText}>
                    Fazer login
                </Text>
                <View style={theme.arrowContainer}>
                    <Image source={seta} />
                </View>
            </TouchableOpacity>
        </View>
    )

}

export default Home;