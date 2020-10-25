import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TouchableNativeFeedback
} from 'react-native';

const NewsCard = ({ news }) => {

    return (
        <TouchableNativeFeedback>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: news.imageUrl }} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{news.title}</Text>
                    <Text style={styles.desc}>{news.description}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
};

export { NewsCard };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 15,
        borderRadius: 5
    },
    textContainer:{
        padding: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
        paddingVertical: 5,
    },
    desc: {
    },
    image: {
        height: Dimensions.get('window').height * 0.25,
        borderRadius: 5,
    },
});