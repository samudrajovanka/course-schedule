import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

const underBorder = (isUnder) => {
  if (isUnder) {
    return <View style={styles.underBorder}></View>;
  }
};

const Day = (props) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() =>
          props.navigation.navigate('Mata Kuliah', {
            day: props.day,
            courses: props.courses,
          })
        }
        underlayColor="white">
        <View style={styles.container}>
          <Text style={styles.subTitle}>{props.day}</Text>
          <Image source={require('../assets/img/arrow.png')}></Image>
        </View>
      </TouchableHighlight>
      {underBorder(props.isUnderBorder)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingStart: 10,
    paddingEnd: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 25,
    margin: 10,
    color: '#F39233',
  },
  underBorder: {
    borderBottomColor: '#01C5C455',
    borderBottomWidth: 2,
  },
});

export default Day;
