import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { theme, text } from '../styles';
import { useNavigation } from '@react-navigation/core';

interface ReviewInsertProps {
    textReview: string;
    setTextReview: Function;
    handleInsertReview: Function;
}

const ReviewInsertCard: React.FC<ReviewInsertProps> = ({ 
    textReview, setTextReview, handleInsertReview }) => {
    const navigation = useNavigation();

    return (
        <View style={theme.reviewCard}>
            <TextInput
                multiline
                placeholder="Deixe sua avaliação aqui"
                value={textReview}
                onChangeText={(e) => setTextReview(e)}
                style={theme.textAreaReview} />
            <View style={theme.reviewButtonContainer}>
                <TouchableOpacity style={theme.primaryButton} onPress={() =>
                    handleInsertReview()}>
                    <Text style={text.primaryText}>Salvar avaliação</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

};

export default ReviewInsertCard;