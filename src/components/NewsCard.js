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
                <Text style={styles.title}>{news.title}</Text>
                <Text style={styles.desc}>{news.description}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

export { NewsCard };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        borderRadius: 5,
        margin: 10,
        padding: 5,
        alignItems: 'center'
    },
    title: {
        fontWeight: "bold",
        fontSize: 17,
        padding: 5,
        paddingHorizontal: 15,
    },
    desc: {
        padding: 15,
    },
    image: {
        height: Dimensions.get('window').height * 0.25,
        width: Dimensions.get('window').width * 0.8,
        borderRadius: 10,
        margin: 10,
    },
});