import { View, Text, Pressable } from 'react-native';
import { Tabs, Link } from 'expo-router';
import { Entypo, Ionicons, EvilIcons } from '@expo/vector-icons';

import ProfileLink from '@/components/ProfileLink';

const TabLayout = (props: any) => {
    // console.log(props);
    return (
        <Tabs>
            <Tabs.Screen
                name="community"
                options={{
                    title: 'community',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="md-people-outline"
                            size={24}
                            color="black"
                        />
                    ),
                    // header(props) {
                    //     // console.log(props.route.name);
                    //     return <></>;
                    // },
                    headerRight: () => {
                        return <ProfileLink />;
                    },
                }}
            />
            {/* <Tabs.Screen
                name="community/[id]"
                options={{
                    href: null,
                }}
            /> */}
            <Tabs.Screen
                name="index"
                options={{
                    title: 'main',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="map" size={24} color="black" />
                    ),
                    // header(props) {
                    //     // console.log(props.route.name);
                    //     return <></>;
                    // },
                    headerRight: () => {
                        return <ProfileLink />;
                    },
                }}
            />
            <Tabs.Screen
                name="alerts"
                options={{
                    title: 'alerts',
                    tabBarIcon: ({ color }) => (
                        <Ionicons
                            name="alert-circle-outline"
                            size={24}
                            color="black"
                        />
                    ),
                    // header(props) {
                    //     // console.log(props.route.name);
                    //     return <></>;
                    // },
                    headerRight: () => {
                        return <ProfileLink />;
                    },
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
