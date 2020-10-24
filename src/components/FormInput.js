import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

import COLORS from '..//config/colors';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder || 'Placeholder',
      value: this.props.value || '',
      editable:
        typeof this.props.editable !== 'undefined' ? this.props.editable : true,
      multiline:
        typeof this.props.multiline !== 'undefined'
          ? this.props.multiline
          : true,
    };
  }

  handleChange = (value) => {
    this.setState({value});
  };

  render() {
    return (
      <TextInput
        style={styles.container}
        placeholder={this.state.placeholder}
        onChangeText={this.handleChange}
        value={this.state.value}
        multiline={this.state.multiline}
        spellCheck={false}
        editable={this.state.editable}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: COLORS.aquaLight_05,
  },
});

export default FormInput;
