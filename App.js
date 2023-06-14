import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'expo-dev-client';
import 'react-native-gesture-handler';
import React , {useEffect,useState}from 'react';
import utilities from './tailwind.json';
//import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTailwind ,TailwindProvider } from "tailwind-rn";
import { BookDetail } from "./screens/";
import Tabs from "./navigation/tabs";
import { useFonts } from 'expo-font';
import Buttons from './screens/Buttons';
import Pdfs from './screens/Pdfs';
import Offer from './screens/Offer';
import Purchases, { PurchasesOffering } from 'react-native-purchases';
import Premiumoffer from './Premium/Premiumoffer';
import PremiumCongrats from './Premium/PremiumCongrats';
import Premium from './screens/Premium';
const APIKeys = {
  google: "goog_PGMXACamSrFCNRWXgtLKlUQTiqL",
};
const entitlement_id = 'pro';


const theme = {
  ...DefaultTheme,
  colors: {
      ...DefaultTheme.colors,
      border: "transparent"
  }
}

const Stack = createNativeStackNavigator();

const App = () => {

    useEffect(() => {
        Purchases.setDebugLogsEnabled(true);
        Purchases.configure({ apiKey: APIKeys.google });
      }, [])
    
    const tailwind = useTailwind();
  const [loaded] = useFonts({
          "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
          "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
          "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),
      })

  if(!loaded){
      return null;
  }
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer theme={theme}>
          <Stack.Navigator
              screenOptions={{
                  headerShown: false
              }}
              initialRouteName={'Home'}
          >
              {/* Tabs */}
              <Stack.Screen name="Home" component={Tabs} />

              {/* Screens */}
              <Stack.Screen name="BookDetail" component={BookDetail} options={{ headerShown: false }} />
              <Stack.Screen name="Buttons" component={Buttons} />
              <Stack.Screen name="offer" component={Offer} />
              <Stack.Screen name="Pdfs" component={Pdfs} />
              <Stack.Screen name="Premiumoffer" component={Premiumoffer} />
              <Stack.Screen name="Premium" component={Premium} />
              <Stack.Screen name="PremiumCongrats" component={PremiumCongrats} />

          </Stack.Navigator>
      </NavigationContainer>
      </TailwindProvider>
  )
}

export default App;