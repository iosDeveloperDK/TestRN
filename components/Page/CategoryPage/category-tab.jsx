import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Empty from '../EmptyPage/empty';
import Category from './category';

const Tab = createBottomTabNavigator();

export default function CategoryTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          if (route.name === 'Category') {
            return <Image source={require('./img/grid.png')} />;
          } else if (route.name === 'Cart') {
            return <Image source={require('./img/shopping-cart.png')} />;
          } else {
            return <Image source={require('./img/user.png')} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        style: {
          padding: 28,
          height: 80,
        },
      }}>
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Cart" component={Empty} />
      <Tab.Screen name="Profile" component={Empty} />
    </Tab.Navigator>
  );
}
