import {
    View,
    Text,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
} from 'react-native';
import { styles } from '@/styles/main/index';
import { useState, useEffect } from 'react';

interface Geocode {
    SAME: string[];
    UGC: string[];
}

interface AlertProperties {
    '@id': string;
    '@type': string;
    id: string;
    areaDesc: string;
    geocode: Geocode;
    affectedZones: string[];
    references: any[]; // I'm using any here since it's empty in the sample, adjust as needed
    sent: string;
    effective: string;
    onset: string;
    expires: string;
    ends: string | null;
    status: string;
    messageType: string;
    category: string;
    severity: string;
    certainty: string;
    urgency: string;
    event: string;
    sender: string;
    senderName: string;
    headline: string;
    description: string;
    instruction: string | null;
    response: string;
    parameters: {
        AWIPSidentifier: string[];
        WMOidentifier: string[];
        NWSheadline: string[];
        BLOCKCHANNEL: string[];
    };
}

interface AlertItem {
    id: string;
    type: string;
    geometry: any; // Using any since it's null in the sample, adjust as needed
    properties: AlertProperties;
}

const alerts = () => {
    const [data, setData] = useState<AlertItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            let response = await fetch(
                'https://api.weather.gov/alerts/active?area=TX'
            );
            let json = await response.json();
            setData(json.features);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching the data', error);
            setLoading(false);
        }
    }

    console.log(data);
    return (
        <View style={{ flex: 1, padding: 20 }}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View
                            style={{
                                marginBottom: 15,
                                borderWidth: 1,
                                padding: 10,
                                borderRadius: 5,
                            }}
                        >
                            <Text style={{ fontWeight: 'bold' }}>
                                {item.properties.headline}
                            </Text>
                            <Text>Event: {item.properties.event}</Text>
                            <Text>Urgency: {item.properties.urgency}</Text>
                            <Text>Sender: {item.properties.sender}</Text>
                            <Text>
                                Sender Name: {item.properties.senderName}
                            </Text>
                            <Text>
                                Description: {item.properties.description}
                            </Text>
                            <Text>Response: {item.properties.response}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    );
};

export default alerts;
