import { ru } from 'date-fns/locale';
import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

function Calendar() {
  const [selectedDay, setSelectedDay] = useState();

  const footer = selectedDay ? (
    <p>Ты выбрал {format(selectedDay, 'PPP', {locale: ru})}</p>
  ) : (
    <p>Пожалуйста, выбери день</p>
  );

  return (
    <>
     <DayPicker locale={ru} mode="single"
      selected={selectedDay}
      onSelect={setSelectedDay}
      footer={footer} />
    </>
  );
}

export default Calendar;
