import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import Badge from '../components/Badge';
import COLORS from '../config/colors';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: this.props.course,
      isUnderBorder: this.props.isUnderBorder,
    };
  }

  underBorder(isUnder) {
    if (isUnder) {
      return <View style={styles.underBorder}></View>;
    }
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.course}>{this.state.course.course}</Text>
          <View style={styles.containerData}>
            <Badge
              title={this.state.course.time}
              backgroundColor={COLORS.yellow}
            />
            <Badge
              title={this.state.course.class}
              backgroundColor={COLORS.yellow}
            />
          </View>
        </View>
        {this.underBorder(this.state.isUnderBorder)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingStart: 20,
    paddingEnd: 20,
  },
  course: {
    fontSize: 25,
    marginTop: 10,
    color: COLORS.orange,
  },
  containerData: {
    flexDirection: 'row',
    marginTop: 5,
  },
  underBorder: {
    borderBottomColor: COLORS.aquaLight_05,
    borderBottomWidth: 2,
  },
});

export default Course;
