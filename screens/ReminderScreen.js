import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    useWindowDimensions,
    Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

const ReminderScreen = ({ route, navigation }) => {
    const { prescriptions = [] } = route.params || {};
    const { width } = useWindowDimensions();

    const itemSize = width / 2.5;

    const renderPrescription = ({ item }) => {
        const isImage = /\.(jpeg|jpg|png|heic)$/i.test(item);

        return (
            <LinearGradient
                colors={['#FEE8F3', '#FFEAF5']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={[styles.cardGradient, { width: itemSize }]}>
                <View style={styles.cardContent}>
                    {isImage ? (
                        <Image source={{ uri: item }} style={styles.thumbnail} />
                    ) : (
                        <View style={[styles.thumbnail, styles.placeholder]}>
                            <Text style={styles.placeholderText}>File Preview</Text>
                        </View>
                    )}
                    <Text style={styles.fileName} numberOfLines={1}>
                        {item.split('/').pop()}
                    </Text>
                    <Text style={styles.fileLabel}>Uploaded Prescription</Text>
                </View>
            </LinearGradient>
        );
    };

    return (
        <LinearGradient
            colors={['#F9F4FF', '#FFF']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.containerGradient}>
            <SafeAreaView style={styles.container}>
                {/* Back Button */}
                <Pressable
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}>
                    <Image
                        source={require('../assets/Arrow.png')} // Replace with your arrow image path
                        style={styles.backArrow}
                    />
                </Pressable>

                <Text style={styles.title}>Your Uploaded Files</Text>

                <View style={styles.contentContainer}>
                    <Text style={styles.subTitle}>Here are your uploaded prescriptions!</Text>
                    <Text style={styles.subText}>You can review them below and share as needed.</Text>

                    {prescriptions.length > 0 ? (
                        <FlatList
                            data={prescriptions}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderPrescription}
                            numColumns={2}
                            columnWrapperStyle={styles.columnWrapper}
                            contentContainerStyle={styles.list}
                        />
                    ) : (
                        <View style={styles.emptyState}>
                            <Text style={styles.emptyText}>No files uploaded yet.</Text>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    containerGradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 15,
        left: 15,
        zIndex: 1,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backArrow: {
        width: 30,
        height: 30,
        tintColor: '#333',
        marginTop: '280%'
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#333',
        marginTop: 20,
        textAlign: 'center',
    },
    contentContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 3,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#444',
        textAlign: 'center',
        marginBottom: 5,
    },
    subText: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
        marginBottom: 15,
    },
    list: {
        paddingTop: 10,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    cardGradient: {
        borderRadius: 15,
        padding: 2,
    },
    cardContent: {
        backgroundColor: '#FFF',
        borderRadius: 15,
        alignItems: 'center',
        padding: 10,
    },
    thumbnail: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        marginBottom: 10,
    },
    placeholder: {
        backgroundColor: '#F7F7F7',
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 14,
        color: '#AAA',
        textAlign: 'center',
    },
    fileName: {
        fontSize: 12,
        fontWeight: '600',
        color: '#444',
        textAlign: 'center',
    },
    fileLabel: {
        fontSize: 10,
        color: '#999',
        textAlign: 'center',
        marginTop: 5,
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
    },
});

export default ReminderScreen;
