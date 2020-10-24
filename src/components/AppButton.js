import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

class AppButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      styleContainer: {
        backgroundColor: this.props.backgroundColor || 'black',
      },
      styleTitle: {
        color: this.props.color,
      },
      icon: this.props.icon,
      callBack: this.props.callBack,
    };
  }

  setIcon() {
    if (typeof this.state.icon !== 'undefined') {
      if (this.state.icon === 'plus') {
        return (
          <Image
            source={require('../assets/images/plus.png')}
            style={styles.icon}></Image>
        );
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.container, this.state.styleContainer]}
        onPress={this.state.callBack}>
        {this.setIcon()}
        <Text style={[styles.title, this.state.styleTitle]}>
          {this.state.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 150,
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
});

export default AppButton;
