import React, {useState} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';

import 'moment/locale/it';


export default function DatePicking({date, setDate}) {

    return (
        <div>
            <DayPickerInput
                onDayChange={day => setDate(`${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`)}
                placeholder={`${formatDate(date, 'LL')}`}
                formatDate={formatDate}
                parseDate={parseDate}
                format="LL"
                dayPickerProps={{
                    localeUtils: MomentLocaleUtils,
                }}
                inputProps={{ style: { width: 600 , textAlign: 'center' , outlineWidth: 0, cursor: 'pointer'} }}/>
        </div>
    );
}

