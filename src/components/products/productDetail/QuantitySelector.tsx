import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from '../../shared/IconButton';

interface Props {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelector: React.FC<Props> = ({amount, setAmount}) => {
  return (
    <View style={styles.container}>
      <IconButton
        onPress={() => setAmount(prev => prev + 1)}
        iconColor="#545264"
        icon="plus"
        variant="text"
      />
      <Text style={styles.amount}>{amount}</Text>
      <IconButton
        onPress={() => amount && setAmount(prev => prev - 1)}
        iconColor="#545264"
        icon="minus"
        variant="text"
      />
    </View>
  );
};

export default QuantitySelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DEDDE0',
    borderRadius: 20,
    justifyContent: 'space-between',
    height: 30,
  },
  amount: {
    color: '#545264',
    width: 20,
    textAlign: 'center',
  },
});
