import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import SearchInput from '../shared/SearchInput';
import IconButton from '../shared/IconButton';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
type Props = {};

const ListHeader: FC<Props> = ({}) => {
  return (
    <View style={[styles.container]}>
      <Text style={styles.header}>Your Furniture</Text>
      <Text style={styles.subTitle}>Your Choice !</Text>
      <View style={[styles.searchBar]}>
        <SearchInput />
        <IconButton
          icon="sliders"
          roundness="small"
          size="big"
          iconColor="black"
          style={{backgroundColor: 'white'}}
        />
      </View>
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#545264',
  },
  subTitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#545264',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
