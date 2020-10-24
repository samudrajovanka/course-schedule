import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

import COLORS from '../config/colors';
import FormInput from '../components/FormInput';
import Dropdown from '../components/Dropdown';
import courses from '../config/courses';
import AppButton from '../components/AppButton';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDatePickerVisible: false,
      deadlineDate: '',
    };
  }

  getCourse() {
    const dataCourses = [];
    for (const [key, value] of Object.entries(courses)) {
      value.map((course) => {
        dataCourses.push(course.course);
      });
    }
    return dataCourses;
  }

  showDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (datetime) => {
    this.setState({
      deadlineDate: moment(datetime).format('Do MMMM YYYY, hh:mm'),
    });
    // FormInput.setState({
    //   value: moment(datetime).format('Do MMMM YYYY, hh:mm'),
    // });
    this.hideDatePicker();
  };

  render() {
    return (
      <View style={styles.body}>
        <View style={styles.head}>
          <Text style={styles.title}>Tambahkan Tugasmu</Text>
          <Text style={styles.subtitle}>
            Jangan lupa kerjain tugasnya ya...
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.formInput}>
            <Dropdown
              nullValue="Pilih Mata Kuliah"
              dataValues={this.getCourse()}
            />
          </View>
          <View style={styles.formInput}>
            <FormInput placeholder="Nama Tugas" />
          </View>
          <View style={styles.formInput}>
            <FormInput placeholder="Deskripsi Tugas" multiline={true}/>
          </View>
          <View style={styles.formInput}>
            <TouchableOpacity onPress={this.showDatePicker}>
              <FormInput
                placeholder="Deadline"
                editable={false}
                value={this.state.deadlineDate}
              />
            </TouchableOpacity>
            {/* <AppButton
              title="Atur Deadline"
              backgroundColor={COLORS.aquaLight}
              color={COLORS.white}
              callBack={this.showDatePicker}
            /> */}
            <DateTimePickerModal
              isVisible={this.state.isDatePickerVisible}
              onConfirm={this.handleConfirm}
              onCancel={this.hideDatePicker}
              mode="datetime"
            />
            {/* <Text style={styles.dateDeadline}>{this.state.deadlineDate}</Text> */}
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <AppButton
                title="Batal"
                backgroundColor={COLORS.salmon}
                color={COLORS.white}
                callBack={() => this.props.navigation.goBack(null)}
              />
            </View>
            <AppButton
              title="Tambah"
              backgroundColor={COLORS.green}
              color={COLORS.white}
              callBack={() => alert('Tugas ditambah')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: COLORS.aquaLight,
  },
  container: {
    width: '100%',
    height: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: COLORS.white,
    padding: 20,
  },
  head: {
    marginStart: 20,
    paddingTop: 50,
    paddingBottom: 50,
  },
  title: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: COLORS.white,
  },
  formInput: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  button: {
    marginRight: 10,
  },
  deadline: {
    flexDirection: 'row',
  },
  dateDeadline: {
    marginLeft: 10,
    textAlignVertical: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.aquaLight_05,
  },
});

export default AddTask;
