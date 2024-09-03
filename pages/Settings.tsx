import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';


const Settings = ({ navigation }: any) => {

    return (
        <View style={styles.main}>
            <View>
                <Text>MQTT Example</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#20262E",
        alignItems: "center",
        justifyContent: "center"
    },
    container: {
        width: "100%",
        height: "100%"
    },
    luxonLogo: {
        height: 40,
        width: 40,
        tintColor: "#3081D0",
        margin: "5%",
    }
})

export default Settings;
