import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import Transaction from './pages/Transaction';
import LoginScreen from './pages/LoginScreen';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings'
import History from './pages/History';
import Test from './pages/Test';

const backgroundColor = "#20262E";
const colorMode = "light" // 'dark' or 'light'

const Stack = createNativeStackNavigator();


export default function App() {
  const changeNavigationBarColor = async () => {
    await NavigationBar.setBackgroundColorAsync(backgroundColor);
    await NavigationBar.setButtonStyleAsync(colorMode);
  };
  changeNavigationBarColor()
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
      <StatusBar style={colorMode} backgroundColor={backgroundColor} />
    </NavigationContainer>
  );
}