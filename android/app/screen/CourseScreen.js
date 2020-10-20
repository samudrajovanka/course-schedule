import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Head from '../components/Head';
import Course from '../components/Course';

class CourseScreen extends Component {
  constructor(props) {
    super(props);
    const {params} = this.props.route;
    this.state = {
      day: params.day,
      courses: params.courses,
    };
  }

  render() {
    return (
      <View>
        <Head title={this.state.day} />
        <View style={styles.container}>
          <View style={styles.card}>
            {this.state.courses.map((course, i) => {
              if (this.state.courses.length === i + 1) {
                return <Course key={i} course={course} />;
              }
              return <Course key={i} course={course} isUnderBorder="true" />;
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    backgroundColor: 'white',
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
});

export default CourseScreen;
