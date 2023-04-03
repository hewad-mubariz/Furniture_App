import React from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import Animated from 'react-native-reanimated';
import {Colors} from '../../constants/Colors';
import CustomButton from '../shared/CustomButton';

const ProductCard = ({
  product,
  onPressCard,
  tag,
}: {
  product: TProduct;
  onPressCard: () => void;
  tag: string;
}) => {
  return (
    <View style={styles.card}>
      <Pressable onPress={onPressCard}>
        <Animated.Image
          sharedTransitionTag={`image_${product.id}`}
          source={product.image}
          style={styles.image}
        />
      </Pressable>
      <View style={styles.content}>
        <Pressable onPress={onPressCard} testID={`productCard${product.id}`}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.company}>By {product.company}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text style={styles.price}>${product.price}</Text>
          <CustomButton title="Buy" style={styles.button} roundness={'full'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    resizeMode: 'stretch',
    width: 120,
    height: 120,
    borderRadius: 12,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary,
  },
  company: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.dark_gray,
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.medium_gray,
    marginTop: 8,
    marginBottom: 16,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  button: {
    backgroundColor: 'green',
    height: 34,
    marginLeft: 16,
    paddingHorizontal: 16,
  },
});

export default ProductCard;
