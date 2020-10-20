import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Time extends Component {
  constructor() {
    super();

    this.state = {currentTime: null, currentDay: null};
    this.daysArray = [
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
      'Minggu',
    ];
  }

  UNSAFE_componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    this.setState({
      currentTime: hour + ':' + minutes + ':' + seconds,
    });

    this.daysArray.map((item, key) => {
      if (key == new Date().getDay()) {
        this.setState({currentDay: item.toUpperCase()});
      }
    });
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }

  render() {
    return (
      <View>
        <View>
          <Text style={styles.time}>
            {this.state.currentDay} {this.state.currentTime}
          </Text>
        </View>
        <View style={styles.line}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  time: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#01C5C4',
    paddingEnd: 5,
    alignSelf: 'center',
  },
  line: {
    backgroundColor: '#01C5C4',
    height: 3,
    width: '100%',
    paddingStart: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Time;
