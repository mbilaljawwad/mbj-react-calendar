import { FC, useState } from 'react';
import WeekDays from '../WeekDays';
import { getMonthInString } from '../../utils/dateHelpers';
import Header from '../Header';

import styles from './Calender.module.scss';

export type CalendarProps = {
  startingWeekDay?: 'sunday' | 'monday';
};

const Calendar: FC<CalendarProps> = ({ startingWeekDay = 'sunday' }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div className={styles.root}>
      <Header currenMonth={getMonthInString(currentDate)} />
      <WeekDays />
    </div>
  );
};

export default Calendar;
