import React, {useState} from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
    formatDate,
    parseDate,
  } from 'react-day-picker/moment';

import 'moment/locale/it';


export default function DatePicking({date, setDate, task ,setUnfinished , setFinished, unfinished, finished}) {

    const Changer = (day) =>{

        let month = `${day.getMonth()+1}` < 10? `0${day.getMonth()+1}`: `${day.getMonth()+1}`;
        let days = `${day.getDate()}` < 10? `0${day.getDate()}`: `${day.getDate()}`;

        setDate(`${day.getFullYear()}-${month}-${days}`)
        // setter();
    }

    // function setter(){
    //     let count = 0;
    //     let total = 0;

    //     task.map( tasks => {

    //         if(tasks.day == date){
    //             if(tasks.isFinished == 1){
    //                 count +=1;
    //                 total += 1;

    //             }else{
    //                 total+= 1;

    //             }
    //         }

    //     })
    //     setFinished({ name: "Finished", value : count})
    //     setUnfinished( { name: "Unfinished", value : total})
    // }
    return (
        <div>
            <DayPickerInput
                onDayChange={Changer}
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

