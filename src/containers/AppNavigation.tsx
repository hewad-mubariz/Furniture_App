import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import ProductDetail from '../screens/ProductDetail';
import BottomTabs from './BottomTabs';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          presentation: 'containedModal',
        }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
