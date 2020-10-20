import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Head = (props) => {
  return (
    <View style={styles.styleHead}>
      <Text style={[styles.center, styles.title]}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styleHead: {
    backgroundColor: '#01C5C4',
    height: 100,
    borderBottomEndRadius: 80,
    borderBottomStartRadius: 80,
  },
  title: {
    fontSize: 30,
    lineHeight: 100,
    color: 'white',
    fontWeight: 'bold',
  },
  center: {
    textAlign: 'center',
  },
});

export default Head;
