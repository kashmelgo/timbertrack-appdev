import React from 'react';
import ValuesDisplay from '@/Pages/TaskComponents/ValuesDisplay'

export default function TaskDisplay({employee, setEmployee}) {
    const current = new Date();
    const date= `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    return (
        <div className="my-5  flex space-x-10 ">
                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>

                        <h1>Past Due</h1>

                        {employee.map( employees => {
                            if(employees.day < date){
                                return(
                                    <ValuesDisplay
                                    key= {employees.id}
                                    setEmployee = {setEmployee}
                                    employees={employees}
                                    employee={employee}
                                    task={employees.task}
                                    />
                                );
                            }
                            })}





                    </center>
                </div >

                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>
                        <h1>Today</h1>

                        {employee.map( employees => {
                            if(employees.day === date){
                                return(
                                    <ValuesDisplay
                                    key= {employees.id}
                                    setEmployee = {setEmployee}
                                    employees={employees}
                                    employee={employee}
                                    task={employees.task}
                                    />
                                );

                            }
                            })}


                    </center>
                </div>

                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>
                        <h1>Tomorrow</h1>

                        {employee.map( employees => {
                            if(employees.day > date){
                                return(
                                    <ValuesDisplay
                                    key= {employees.id}
                                    setEmployee = {setEmployee}
                                    employees={employees}
                                    employee={employee}
                                    task={employees.task}
                                    />
                                );
                            }
                            })}




                    </center>
                </div>

        </div>


    );
}
