import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    categoryButton: {
        padding: 10,
    },
    categoryActive: {
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },
    post: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
});
