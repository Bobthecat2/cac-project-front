import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { styles } from '@/styles/profile/index';

const Profile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require('@/assets/images/profile.png')}
                style={styles.profileImage}
            />
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileEmail}>johndoe@example.com</Text>
            <Text style={styles.profileDescription}>
                A passionate developer from California who loves coding and
                coffee.
            </Text>
        </SafeAreaView>
    );
};

export default Profile;
