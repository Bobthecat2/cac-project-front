import { SafeAreaView, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'expo-router';
import { styles } from '@/styles/community/postDetail';
import { posts } from '@/mock/post';

type Post = {
    id: string;
    title: string;
    category: 'tips' | 'campaign';
};
const postDetail = () => {
    const { id } = useSearchParams();
    console.log(id);

    const [detail, setDetail] = useState<Post | undefined>(undefined);

    useEffect(() => {
        const found = posts.find((post) => post.id === id);
        setDetail(found);
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <Text>{detail?.title}</Text>
        </SafeAreaView>
    );
};

export default postDetail;
