import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated, {
  FadeIn,
  SharedTransition,
  withTiming,
} from 'react-native-reanimated';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import IconButton from '../components/shared/IconButton';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants/Screen';
import CustomButton from '../components/shared/CustomButton';
import ProductDetailHeader from '../components/products/productDetail/ProductDetailHeader';
import ColorPicker from '../components/products/productDetail/ColorPicker';
import QuantitySelector from '../components/products/productDetail/QuantitySelector';
import {Colors} from '../constants/Colors';
type ProductDetailRouteProps = RouteProp<RootStackParamList, 'ProductDetail'>;

const ProductDetail = () => {
  const route = useRoute<ProductDetailRouteProps>();
  const navigation = useNavigation();
  const {product} = route.params;
  const [amount, setAmount] = useState(0);
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        entering={FadeIn.delay(500)}
        style={[
          styles.iconButtonContainer,
          styles.backButton,
          {top: insets.top + 20},
        ]}>
        <IconButton
          testID="productDetailBackButton"
          icon="chevron-left"
          onPress={() => navigation.goBack()}
          iconColor="black"
          style={{backgroundColor: '#FFFFFF'}}
        />
      </Animated.View>
      <Animated.View
        entering={FadeIn.delay(500)}
        style={[
          styles.iconButtonContainer,
          styles.heartButton,
          {top: insets.top + 20},
        ]}>
        <IconButton
          icon="heart"
          iconFamily="MaterialCommunityIcons"
          iconColor="red"
          style={{backgroundColor: '#FFFFFF'}}
        />
      </Animated.View>
      <Animated.Image
        sharedTransitionTag={`image_${product.id}`}
        source={product.image}
        style={styles.image}
      />
      <View style={{paddingHorizontal: 15, flex: 1, marginTop: 20}}>
        <ProductDetailHeader furniture={product} />

        <Text style={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          aspernatur quos cupiditate, laboriosam corrupti rerum, architecto
          voluptates dignissimos debitis molestias enim maiores, et itaque
          quibusdam tenetur possimus consequatur aliquid sed.
        </Text>
        <View style={styles.colorAndQuantity}>
          <ColorPicker />

          <QuantitySelector amount={amount} setAmount={setAmount} />
        </View>
        <View style={styles.line} />
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <CustomButton
            roundness="full"
            title="Buy Now"
            style={{backgroundColor: 'green'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconButtonContainer: {
    position: 'absolute',
  },
  backButton: {
    left: 10,
  },
  heartButton: {
    right: 10,
  },
  image: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    resizeMode: 'stretch',
    zIndex: -1,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.medium_gray,
    marginTop: 8,
    marginBottom: 16,
    lineHeight: 20,
  },
  colorAndQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    borderTopColor: 'blue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  line: {
    width: SCREEN_WIDTH,
    height: 1,
    backgroundColor: '#DBDADC',
    alignSelf: 'center',
  },
});

export default ProductDetail;
