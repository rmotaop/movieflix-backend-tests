import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import Star from '../core/assets/star.png'
import { theme, text } from '../styles';

interface ReviewProps {
    reviewText: string;
    reviewUsername: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ reviewText, reviewUsername }) => {
    return (
        <View style={theme.reviewContainer}>
            <View style={theme.reviewStarName}>
                <Image source={Star} style={theme.reviewStar}/>
                <Text style={text.username} >
                    {reviewUsername}
                </Text>
            </View>
            <ScrollView style={theme.scrollReviewContainer}>
                <Text style={text.reviewText}>
                    {reviewText}
                </Text>
            </ScrollView>
        </View>
    );

};

export default ReviewCard;