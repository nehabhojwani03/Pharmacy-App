import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const ButtonCard = ({ title, imageSource, onPress }) => {
  const { width } = useWindowDimensions();

  // Calculate dynamic sizes based on device width
  const cardWidth = width * 0.4; // 40% of the device width
  const iconSize = width * 0.06; // 6% of the device width
  const fontSize = width * 0.04; // 4% of the device width

  return (
    <TouchableOpacity style={[styles.card, { width: cardWidth }]} onPress={onPress}>
      <View style={styles.content}>
        <Text style={[styles.title, { fontSize }]}>{title}</Text>
        <Image
          source={imageSource}
          style={[styles.icon, { width: iconSize, height: iconSize }]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#6C6060',
    borderWidth: 1,
    alignItems: 'center',
    paddingVertical: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginLeft: 40,
  },
  title: {
    fontWeight: '400',
    color: '#6C6060',
  },
});

export default ButtonCard;
