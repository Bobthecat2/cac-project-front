import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import { styles } from '@/styles/community/index';
import { useState, useEffect } from 'react';
import { posts } from '@/mock/post';
import { useRouter } from 'expo-router';

type Post = {
    id: string;
    title: string;
    category: 'tips' | 'campaign';
};

const community = () => {
    const router = useRouter();

    const [selectedCategory, setSelectedCategory] = useState('tips');
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

    const handleNavigatePostDetail = (post: Post) => {
        router.push({
            pathname: '/community/postDetail',
            params: { id: post.id },
        });
    };

    useEffect(() => {
        const filtered = posts.filter(
            (post) => post.category === selectedCategory
        );
        setFilteredPosts(filtered);
    }, [selectedCategory]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>DownTown</Text>
            </View>
            <View style={styles.categories}>
                <TouchableOpacity
                    onPress={() => setSelectedCategory('tips')}
                    style={styles.categoryButton}
                >
                    <Text
                        style={
                            selectedCategory === 'tips'
                                ? styles.categoryActive
                                : null
                        }
                    >
                        Tips
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSelectedCategory('campaign')}
                    style={styles.categoryButton}
                >
                    <Text
                        style={
                            selectedCategory === 'campaign'
                                ? styles.categoryActive
                                : null
                        }
                    >
                        Campaigns
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredPosts}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleNavigatePostDetail(item)}
                    >
                        <Text style={styles.post}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default community;
