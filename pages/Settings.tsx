import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Navigation from '../layouts/NavigationBar';

const Settings = ({ navigation }: any) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

    const toggleDarkMode = () => setIsDarkMode(previousState => !previousState);
    const toggleNotifications = () => setIsNotificationsEnabled(previousState => !previousState);

    return (
        <View style={styles.main}>
            <View
                style={{
                    height: "90%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center"

                }}
            >
                <View style={styles.container}>
                    <Text style={styles.header}>Settings</Text>

                    {/* <View style={styles.settingRow}>
                        <Text style={styles.settingText}></Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isDarkMode ? "#3081D0" : "#f4f3f4"}
                            onValueChange={toggleDarkMode}
                            value={isDarkMode}
                        />
                    </View> */}

                    <View style={styles.settingRow}>
                        <Text style={styles.settingText}>Notifications</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isNotificationsEnabled ? "#3081D0" : "#f4f3f4"}
                            onValueChange={toggleNotifications}
                            value={isNotificationsEnabled}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.settingRow}
                        // onPress={() => navigation.navigate('LanguageSettings')}
                    >
                        <Text style={styles.settingText}>Change Password</Text>
                        <Text style={styles.arrow}>›</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingRow}
                        // onPress={() => navigation.navigate('LanguageSettings')}
                    >
                        <Text style={styles.settingText}>Add Meter</Text>
                        <Text style={styles.arrow}>›</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.settingRow}
                        // onPress={() => navigation.navigate('LanguageSettings')}
                    >
                        <Text style={styles.settingText}>Logout</Text>
                        <Text style={styles.arrow}>›</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    height: "8%",
                    width: "100%"
                }}
            >
                <Navigation page="settings" navigator={navigation} />
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
        width: "90%",

        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderRadius: 10,
        padding: 20,
    },
    header: {
        fontSize: 30,
        fontWeight: "800",
        color: "#fff",
        marginBottom: 20,
        textAlign: 'center',
    },
    settingRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomColor: 'rgba(255, 255, 255, 0.3)',
        borderBottomWidth: 1,
    },
    settingText: {
        fontSize: 18,
        color: "#fff",
    },
    arrow: {
        fontSize: 18,
        color: "#fff",
    },
});

export default Settings;
