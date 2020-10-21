import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import COLORS from '../config/colors';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: null, currentDay: null};
    this.daysArray = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
  }

  UNSAFE_componentWillMount() {
    this.getCurrentTime();
  }

  getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

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
            {this.state.currentDay} - {this.state.currentTime}
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
    color: COLORS.aquaLight,
    paddingEnd: 5,
    alignSelf: 'center',
  },
  line: {
    backgroundColor: COLORS.aquaLight,
    height: 3,
    width: '100%',
    paddingStart: 5,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default Time;
