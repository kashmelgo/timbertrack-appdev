
import React from 'react';
import Task from '../Task';

const AttendanceLog = ({user, attendance, date, task})=>{

    return(
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full p-6 ">
        Attendance Log <br/><br/>
            <table className="table-auto w-full  ">
                <thead>
                    <tr className="bg-gray-100 ">
                        <th>Name</th>
                        <th>Time In</th>
                        <th>Time out</th>
                        <th>Office Time</th>
                        <th>Task</th>
                    </tr>
                </thead>

                <tbody className="text-center ">


                        {
                            user.map( user => {

                               return attendance.map( info =>{

                                    if( user.id == info.employee_id && info.date == date ){
                                        let count = 0;
                                        let total = 0;
                                        return(
                                            <tr className='border-b border-gray-200 border-solid '>
                                                <td className="p-2">{user.name}</td>
                                                <td className="p-2">{info.time_in}</td>
                                                <td className="p-2">{info.time_out}</td>
                                                <td className="p-2">{info.work_hours}</td>
                                                {
                                                   task.map( task => {

                                                        if(task.employee_id == user.id && task.day == date){
                                                            if(task.isFinished == 1){
                                                                count +=1;
                                                                total += 1;

                                                            }else{
                                                                total+= 1;

                                                            }
                                                        }

                                                   })


                                                }
                                                <td className="p-2" > {count} / {total}</td>
                                            </tr>
                                        );

                                    }

                                })

                            })


                         }



                </tbody>
            </table>

    </div>
    );
}
export default AttendanceLog;
