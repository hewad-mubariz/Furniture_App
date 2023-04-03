import {StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import ProductCard from '../components/products/ProductCard';
import {useNavigation} from '@react-navigation/native';
import FilterChips from '../components/products/FilterChips';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ListHeader from '../components/products/ListHeader';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SCREEN_HEIGHT} from '../constants/Screen';
import {
  setSharedTransitionTag,
  useProductContext,
} from '../contexts/ProductContext';

type ProductDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ProductDetail'
>;
const DATA = [
  {
    id: 1,
    title: 'Comfy Sofa',
    company: 'Pocco',
    description: 'Make a statement with our luxurious brand',
    price: 200,
    image: require('../../assets/chairs/chair1.png'),
  },
  {
    id: 2,
    title: 'Eames Lounge Chair',
    company: 'Herman Miller',
    description: 'Classic mid-century modern design',
    price: 1000,
    image: require('../../assets/chairs/chair2.png'),
  },
  {
    id: 3,
    title: 'Wingback Chair',
    company: 'West Elm',
    description: 'Elegant and comfortable',
    price: 500,
    image: require('../../assets/chairs/chair3.png'),
  },
  {
    id: 4,
    title: 'Chaise Lounge',
    company: 'CB2',
    description: 'Perfect for lounging and relaxing',
    price: 800,
    image: require('../../assets/chairs/chair4.png'),
  },
  {
    id: 5,
    title: 'Accent Chair',
    company: 'Article',
    description: 'Adds a pop of color to any room',
    price: 300,
    image: require('../../assets/chairs/chair5.png'),
  },
  {
    id: 6,
    title: 'Rocking Chair',
    company: 'IKEA',
    description: 'Great for nurseries and relaxation',
    price: 150,
    image: require('../../assets/chairs/chair6.png'),
  },
  {
    id: 7,
    title: 'Barcelona Chair',
    company: 'Knoll',
    description: 'Iconic modernist design',
    price: 2000,
    image: require('../../assets/chairs/chair7.png'),
  },
  {
    id: 8,
    title: 'Recliner',
    company: 'La-Z-Boy',
    description: 'Ultimate comfort for TV watching',
    price: 600,
    image: require('../../assets/chairs/chair8.png'),
  },
  {
    id: 9,
    title: 'Sling Chair',
    company: 'Crate & Barrel',
    description: 'Modern and minimal',
    price: 400,
    image: require('../../assets/chairs/chair9.png'),
  },
  {
    id: 10,
    title: 'Task Chair',
    company: 'Steelcase',
    description: 'Perfect for home offices',
    price: 300,
    image: require('../../assets/chairs/chair10.png'),
  },
];
export const CONTAINER_H_P = 20;
const Products = () => {
  const navigation = useNavigation<ProductDetailScreenNavigationProp>();
  const handleCardPress = (product: TProduct) => {
    navigation.navigate('ProductDetail', {
      product: product,
    });
  };
  const renderItem = ({item}: {item: TProduct}) => (
    <ProductCard
      tag={`image_${item.id}`}
      onPressCard={() => handleCardPress(item)}
      key={item.id}
      product={item}
    />
  );

  const insets = useSafeAreaInsets();
  return (
    <Animated.View style={[styles.container, {paddingTop: insets.bottom}]}>
      <FlatList
        contentContainerStyle={styles.content}
        testID="productsFlatList"
        ListHeaderComponent={() => {
          return (
            <>
              <ListHeader />
              <FilterChips />
            </>
          );
        }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Animated.View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingVertical: 50,
    paddingHorizontal: CONTAINER_H_P,
    paddingBottom: SCREEN_HEIGHT / 4,
    justifyContent: 'center',
  },
});
