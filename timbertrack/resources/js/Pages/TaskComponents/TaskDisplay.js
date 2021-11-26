import React from 'react';
import ValuesDisplay from '@/Pages/TaskComponents/ValuesDisplay'

export default function TaskDisplay({employee, List}) {
    const current = new Date();
    const date= `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

    return (
        <div className="my-5  flex space-x-10 ">
                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>

                        <h1>Past Due</h1>

                        {List.map( list => {

                            if(list.employee_id == employee.employee_id && list.day < date ){

                                return(
                                    <ValuesDisplay
                                        key= {employee.id}
                                        List = {list}
                                        employee={employee}
                                        task={list.task_name}
                                    />
                                );
                            }
                            })}





                    </center>
                </div >

                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>
                        <h1>Today</h1>

                         {List.map( list => {

                            if(list.employee_id == employee.employee_id && list.day == date ){

                                return(
                                    <ValuesDisplay
                                        key= {employee.id}
                                        List = {list}
                                        employee={employee}
                                        task={list.task_name}
                                    />
                                );
                            }
                            })}



                    </center>
                </div>

                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>
                        <h1>Tomorrow</h1>

                        {List.map( list => {

                            if(list.employee_id == employee.employee_id && list.day > date ){

                                return(
                                    <ValuesDisplay
                                        key= {employee.id}
                                        List = {list}
                                        employee={employee}
                                        task={list.task_name}
                                    />
                                );
                            }
                            })}

                    </center>
                </div>

        </div>


    );
}
