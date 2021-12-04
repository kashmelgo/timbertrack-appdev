import React from 'react';
import ValuesDisplay from '@/Pages/TaskComponents/ValuesDisplay'

<<<<<<< HEAD
export default function TaskDisplay({employee, setEmployee,  employed}) {
=======
export default function TaskDisplay({employee, List, usertype, user}) {
    const current = new Date();
    const date= `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
>>>>>>> tasks
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

    return (
        <div className="my-5  flex space-x-10 ">
                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>

                        <h1>Past Due</h1>

<<<<<<< HEAD
                        {employee.map( employees => {
                            if(employees.employee === employed && employees.day === 'Past'  ){
                                return(
                                    <ValuesDisplay
                                    key= {employees.id}
                                    setEmployee = {setEmployee}
                                    employees={employees}
                                    employee={employee}
                                    task={employees.task}
=======
                        {List.map( list => {

                            if(list.day == date  && list.employee_id == employee.employee_id && (list.employee_id == user.id || user.usertype =="admin")){
                                return(
                                    <ValuesDisplay
                                        key= {employee.id}
                                        List = {list}
                                        employee={employee}
                                        task={list.task_name}
                                        usertype = {user.usertype}
>>>>>>> tasks
                                    />
                                );
                            }
                            })}
<<<<<<< HEAD

=======
>>>>>>> tasks
                    </center>
                </div >

                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>
                        <h1>Today</h1>

<<<<<<< HEAD
                        {employee.map( employees => {
                            if(employees.employee === employed && employees.day === 'Today'){
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

=======
                         {List.map( list => {

                            if(list.day == date  && list.employee_id == employee.employee_id && (list.employee_id == user.id || user.usertype =="admin")){

                                return(
                                    <ValuesDisplay
                                        key= {employee.id}
                                        List = {list}
                                        employee={employee}
                                        task={list.task_name}
                                        usertype = {user.usertype}
                                    />
                                );
                            }
                            })}
                    </center>
                </div>
>>>>>>> tasks
                <div className= "bg-white container shadow-lg px-6 py-2 h-auto w-1/3">
                    <center>
                        <h1>Tomorrow</h1>

<<<<<<< HEAD
                        {employee.map( employees => {
                            if(employees.employee === employed && employees.day === 'Tomorrow'){
                                return(
                                    <ValuesDisplay
                                    key= {employees.id}
                                    setEmployee = {setEmployee}
                                    employees={employees}
                                    employee={employee}
                                    task={employees.task}
=======
                        {List.map( list => {

                            if(list.day == date  && list.employee_id == employee.employee_id && (list.employee_id == user.id || user.usertype =="admin")){

                                return(
                                    <ValuesDisplay
                                        key= {employee.id}
                                        List = {list}
                                        employee={employee}
                                        task={list.task_name}
                                        usertype = {user.usertype}
>>>>>>> tasks
                                    />
                                );
                            }
                            })}

<<<<<<< HEAD



                    </center>
                </div>

        </div>


=======
                    </center>
                </div>
        </div>
>>>>>>> tasks
    );
}
