import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

const HeadNews = ({ banner }) => {
    return (
        <View>
            <View>
                <Image resizeMode='contain' style={styles.icon} source={require('../assets/title.png')} />
            </View>
            <ScrollView horizontal>
                {
                    banner.map(card => {
                        return (
                            <View style={styles.container}>
                                <Image style={styles.image} source={{ uri: card.imageUrl }} />
                                <Text style={styles.text}>{card.text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
};

export { HeadNews };

const styles = StyleSheet.create({
    icon: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.2,
        alignSelf: "center",
    },
    container: {
        backgroundColor: '#555',
        justifyContent: "center",
        margin: 2
    },
    image: {
        width: Dimensions.get('window').width * 0.95,
        height: Dimensions.get('window').height * 0.25
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        padding: 5
    }
});