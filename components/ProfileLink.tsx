import { Pressable } from 'react-native';
import { Link } from 'expo-router';
import { EvilIcons } from '@expo/vector-icons';

const ProfileLink = () => {
    return (
        <Link href="/profile" asChild>
            <Pressable>
                {({ pressed }) => {
                    console.log(pressed);
                    return (
                        <EvilIcons
                            name="user"
                            size={50}
                            color="black"
                            style={{
                                marginRight: 15,
                                opacity: pressed ? 0.5 : 1,
                            }}
                        />
                    );
                }}
                {/* <Text>Home</Text> */}
            </Pressable>
        </Link>
    );
};

export default ProfileLink;
