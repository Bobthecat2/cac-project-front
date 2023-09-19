import { Stack, useRouter } from 'expo-router';
import { Text, Button } from 'react-native';

// export const unstable_settings = {
//     // Ensure that reloading on `/modal` keeps a back button present.
//     initialRouteName: '(tabs)',
// };

const RootLayoutNav = (props: any) => {
    const router = useRouter();
    const handleNavigateProfile = () => {
        router.push('/profile/edit');
    };
    const handleNavigateBackToProfile = () => {
        router.push('/profile');
    };
    return (
        <Stack
            screenOptions={(props) => {
                console.log(props.route);
                return {};
            }}
        >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

            <Stack.Screen
                name="community/postDetail"
                options={{
                    title: 'postDetail',
                    // headerRight: () => {
                    //     return (
                    //         <Button
                    //             title="edit profile"
                    //             onPress={handleNavigateProfile}
                    //         />
                    //     );
                    // },
                }}
            />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: 'profile',
                    headerRight: () => {
                        return (
                            <Button
                                title="edit profile"
                                onPress={handleNavigateProfile}
                            />
                        );
                    },
                }}
            />
            <Stack.Screen
                name="profile/edit"
                options={{
                    title: 'edit profile',
                    headerRight: () => {
                        return (
                            <Button
                                title="save"
                                onPress={handleNavigateBackToProfile}
                            />
                        );
                    },
                }}
            />
        </Stack>
    );
};

export default RootLayoutNav;
