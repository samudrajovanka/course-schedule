import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import COLORS from '../config/colors';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'null',
      nullValue: this.props.nullValue,
      dataValues: this.props.dataValues,
    };
  }

  render() {
    // console.warn(this.state.dataValues);
    return (
      <View style={styles.container}>
        <Picker
          style={{color: COLORS.aquaLight}}
          selectedValue={this.state.selectedValue}
          onValueChange={(itemValue) =>
            this.setState({selectedValue: itemValue})
          }>
          <Picker.Item label={this.state.nullValue} value="null"></Picker.Item>
          {this.state.dataValues.map((dataValue, i) => {
            return (
              <Picker.Item
                key={i}
                label={dataValue}
                value={dataValue}></Picker.Item>
            );
          })}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.aquaLight,
    borderRadius: 10,
  },
  item: {
    backgroundColor: 'red',
  },
});

export default Dropdown;
