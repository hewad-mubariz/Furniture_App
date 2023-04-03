import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
};

const SearchInput: FC<Props> = ({value, onChangeText}) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={28} color="#666" />
      <TextInput
        style={styles.input}
        value={value}
        placeholder={'Search'}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
  },
  input: {
    marginLeft: 10,
    fontSize: 20,
    color: '#333',
    width: '70%',
  },
});

export default SearchInput;
