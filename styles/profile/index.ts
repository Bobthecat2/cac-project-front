import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F7F7F7',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    profileEmail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
    },
    profileDescription: {
        fontSize: 14,
        textAlign: 'center',
    },
});
