import {View, StyleSheet, Text} from 'react-native';
import CustomBottomTab from '../components/shared/BottomTabs/CustomBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Products from '../screens/Products';
import Cart from '../screens/Cart';
import Favourites from '../screens/Favourites';
import Profile from '../screens/Profile';
const Tab = createBottomTabNavigator();

// const TABS = [
//   {
//     name: 'Products',
//     icon: 'home',
//     label: 'Home',
//   },
//   {
//     name: 'Cart',
//     icon: 'shopping-bag',
//     label: 'Cart',
//   },
//   {
//     name: 'Favourites',
//     icon: 'star',
//     label: 'Favourites',
//   },
//   {
//     name: 'Profile',
//     icon: 'user',
//     label: 'Profile',
//   },
// ];

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Products"
          component={Products}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Cart'}}
          name="Cart"
          component={Cart}
        />

        <Tab.Screen
          options={{tabBarLabel: 'Favourites'}}
          name="Favourites"
          component={Favourites}
        />
        <Tab.Screen
          options={{tabBarLabel: 'Profile'}}
          name="Profile"
          component={Profile}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};
export default BottomTabs;
