import {useCallback} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Animated, {
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CONTAINER_H_P} from '../../screens/Products';

const TAGS = ['All', 'Chair', 'Table', 'Lamp', 'Floor'];
const TAG_WIDTH = 64;

const FilterChips = () => {
  const animatedRef = useAnimatedRef<View>();
  const translateX = useSharedValue(0);
  const focusedIndex = useSharedValue(0);

  const tagAStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
    zIndex: -1,
  }));

  const tagTextStyle = (index: number) => {
    return useAnimatedStyle(() => ({
      color: focusedIndex.value === index ? '#FFFFFF' : '#545264',
    }));
  };

  const handleOnLayout = (index: number, xValue: number) => {
    if (index === 0) {
      translateX.value = xValue;
    }
  };

  const handlePress = useCallback((index: number) => {
    runOnUI(() => {
      'worklet';
      const measured = measure(animatedRef);
      const pageX = Math.round(measured?.pageX);
      const distance = Math.abs(pageX - CONTAINER_H_P);
      focusedIndex.value = index;
      translateX.value = withTiming(distance, {duration: 200});
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.tagContainer}>
        {TAGS.map((tag, index) => {
          const textStyle = tagTextStyle(index);
          return (
            <Pressable
              key={tag}
              testID={tag}
              onLayout={({
                nativeEvent: {
                  layout: {x},
                },
              }) => handleOnLayout(index, x)}
              onPress={() => handlePress(index)}
              style={({pressed}) => [styles.tag, {opacity: pressed ? 0.5 : 1}]}
              ref={animatedRef}>
              <Animated.Text style={[styles.tagText, textStyle]}>
                {tag}
              </Animated.Text>
            </Pressable>
          );
        })}
      </View>
      <Animated.View style={[styles.animatedPoint, tagAStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  tag: {
    alignItems: 'center',
    justifyContent: 'center',
    width: TAG_WIDTH,
    height: 30,
    zIndex: 4,
  },
  animatedPoint: {
    width: TAG_WIDTH,
    height: 30,
    borderRadius: 20,
    backgroundColor: '#545264',
    position: 'absolute',
  },
  tagText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
});

export default FilterChips;
