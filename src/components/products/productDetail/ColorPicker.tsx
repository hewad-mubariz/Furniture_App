import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../constants/Colors';

const colors = ['#c4b2c4', '#ef88b3', '#595456'];

const ColorPicker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Colors</Text>
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <MaterialCommunityIcons
            key={index}
            name={index === 0 ? 'circle-slice-8' : 'circle'}
            size={index === 0 ? 30 : 25}
            color={color}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dark_gray,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ColorPicker;
