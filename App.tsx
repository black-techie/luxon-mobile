import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './pages/LoginScreen';
import * as NavigationBar from 'expo-navigation-bar';
import Dashboard from './pages/Dashboard';


const backgroundColor = "#20262E";
const colorMode = "light" // 'dark' or 'light'


export default function App() {
  const changeNavigationBarColor = async () => {
    await NavigationBar.setBackgroundColorAsync(backgroundColor);
    await NavigationBar.setButtonStyleAsync(colorMode); 
  };

  changeNavigationBarColor()
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <Dashboard />
      <StatusBar style={colorMode} backgroundColor={backgroundColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems:"center",
    justifyContent:"center"
  },
});
