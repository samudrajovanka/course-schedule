import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Head from '../components/Head';
import Day from '../components/Day';
import Time from '../components/Time';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Head title={'Hello Jovan'} />
        <View style={styles.container}>
          <Time />
          <View style={styles.card}>
            <Day
              day="Senin"
              isUnderBorder="true"
              navigation={this.props.navigation}
              courses={[
                {
                  course: 'Sistem Operasi',
                  time: '10.00 - 11.40',
                  class: 'B',
                },
                {
                  course: 'Praktikum Basis Data Lanjut',
                  time: '13.00 - 14.40',
                  class: 'C',
                },
                {
                  course: 'Teori Bahasa dan Automata',
                  time: '15.30 - 17.10',
                  class: 'C',
                },
              ]}
            />
            <Day
              day="Selasa"
              isUnderBorder="true"
              navigation={this.props.navigation}
              courses={[
                {
                  course: 'Praktikum Sistem Operasi',
                  time: '10.00 - 11.40',
                  class: 'B',
                },
                {
                  course: 'Pemrograman Berorientasi Objek',
                  time: '15.00 - 16.40',
                  class: 'C',
                },
              ]}
            />
            <Day
              day="Rabu"
              isUnderBorder="true"
              navigation={this.props.navigation}
              courses={[
                {
                  course: 'Praktikum Pemrograman Berorientasi Objek',
                  time: '08.00 - 09.40',
                  class: 'C',
                },
                {
                  course: 'Analisis Algoritma',
                  time: '10.30 - 12.10',
                  class: 'C',
                },
              ]}
            />
            <Day
              day="Kamis"
              isUnderBorder="true"
              navigation={this.props.navigation}
              courses={[
                {
                  course: 'Statistik dan Probabilitas',
                  time: '08.00 - 09.40',
                  class: 'A',
                },
                {
                  course: 'Basis Data Lanjut',
                  time: '13.00 - 14.40',
                  class: 'C',
                },
                {
                  course: 'Arsitektur dan Organisasi Komputer',
                  time: '15.00 - 17.30',
                  class: 'A',
                },
              ]}
            />
            <Day
              day="Jumat"
              navigation={this.props.navigation}
              courses={[
                {
                  course: 'Technopreneurship',
                  time: '08.00 - 09.40',
                  class: 'A',
                },
                {
                  course: 'Praktikum Statistik dan Probabilitas',
                  time: '10.00 - 11.30',
                  class: 'A',
                },
              ]}
            />
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

export default HomeScreen;
