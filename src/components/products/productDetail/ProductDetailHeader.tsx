import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
type Props = {
  furniture: TProduct;
};
const ProductDetailHeader: FC<Props> = ({furniture}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.header}>{furniture.title}</Text>
        <Text style={styles.company}>By {furniture.company}</Text>
      </View>
      <View style={styles.ratingContainer}>
        <MaterialCommunityIcons name="star" color={'#FACC0F'} size={25} />
        <Text style={styles.ratingLabel}>4.9</Text>
      </View>
    </View>
  );
};
export default ProductDetailHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flex: 1,
  },
  ratingLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#545264',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#545264',
  },
  company: {
    fontSize: 12,
    fontWeight: '500',
    color: '#666',
  },
  ratingContainer: {
    borderColor: '#f0edf5',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 35,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 80,
    paddingVertical: 2,
  },
});
