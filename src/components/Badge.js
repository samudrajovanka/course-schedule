import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import COLORS from '../config/colors';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      backgroundColor: this.props.backgroundColor,
      color: this.props.color,
    };
  }

  setContainerStyle() {
    const containerStyle = [styles.container];
    if (typeof this.state.backgroundColor !== 'undefined')
      containerStyle.push({backgroundColor: this.state.backgroundColor});

    return containerStyle;
  }

  setTitleStyle() {
    const titleStyle = [styles.title];
    if (typeof this.state.color !== 'undefined')
      titleStyle.push({color: this.state.color});

    return titleStyle;
  }

  render() {
    return (
      <View style={this.setContainerStyle()}>
        <Text style={this.setTitleStyle()}>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginEnd: 10,
    marginBottom: 15,
    padding: 5,
    paddingStart: 10,
    paddingEnd: 10,
    borderRadius: 120,
    backgroundColor: COLORS.black,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    color: COLORS.white,
    fontWeight: 'bold',
  },
});

export default Badge;
