import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../theme/colors';
import moment from 'moment';
import { MaterialIcons } from '@expo/vector-icons';
import { LocaleConfig } from 'react-native-calendars';

export default class CalendarBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: '',
      markedDates: {},
    };
    LocaleConfig.locales['en'] = {
      monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthNamesShort: [
        'Jan.',
        'Feb.',
        'Mar.',
        'Apr.',
        'May',
        'Jun.',
        'Jul.',
        'Aug.',
        'Sep.',
        'Oct.',
        'Nov.',
        'Dec.',
      ],
      dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      today: 'Today',
    };
    LocaleConfig.defaultLocale = 'en';
  }

  render() {
    return (
      <Calendar
        theme={{
          textMonthFontSize: 23,
          textDayFontWeight: '600',
          textMonthFontWeight: 'bold',
          arrowColor: COLORS.BLUE,
          textDayFontSize: 16,
          textDayHeaderFontSize: 16,
          todayTextColor: COLORS.BLUE,
          selectedDayBackgroundColor: COLORS.BLUE,
          selectedDayTextColor: COLORS.WHITE,
          textDayHeaderFontWeight: 'bold',
          calendarBackground: COLORS.WHITE,
        }}
        minDate={moment().format('YYYY-MM-DD')}
        monthSize={10}
        enableSwipeMonths={true}
        onDayPress={(day) => {
          console.log('selected day', day);
          this.setState({ selectedDate: day.dateString });
        }}
        renderArrow={(direction) => {
          if (direction === 'left') {
            return <MaterialIcons name='arrow-back-ios' color={COLORS.BLUE} size={20} />;
          } else {
            return <MaterialIcons name='arrow-forward-ios' color={COLORS.BLUE} size={20} />;
          }
        }}
        markedDates={{
          [this.state.selectedDate]: {
            selected: true,
            selectedColor: '#5C6EF8',
          },
        }}
      />
    );
  }
}
