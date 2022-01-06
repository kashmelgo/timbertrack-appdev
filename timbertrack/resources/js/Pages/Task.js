import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Form from './TaskComponents/TaskForm';
import TaskDisplay from './TaskComponents/TaskDisplay';
import { Inertia } from '@inertiajs/inertia';



export default function Task(props) {
    const current = new Date();
    const date= `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const usertype = props.auth.user.usertype;


    const [employee, setEmployee] = useState({
        employee_id: props.auth.user.id,
        task: "",
        day: date,
        isFinished: false,
    });




    const [inputText, setInputText] = useState("");


    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Task</h2>}

        >
            <Head title="Task" />


            <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">



                     {/* admin */}
                    {usertype == "admin" &&
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-5 bg-white border-b border-gray-200 ">
                                <Form
                                    inputText = {inputText}
                                    setInputText = {setInputText}
                                    employee = {employee}
                                    setEmployee = {setEmployee}
                                    listEmployees = {props.employee}
                                />
                            </div>
                        </div>
                    }
                     {/* end admin */}
                    <TaskDisplay
                        employee = {employee}
                        List = {props.task}
                        user = {props.auth.user}
                        />
                </div>
            </div>
        </Authenticated>
    );
}
