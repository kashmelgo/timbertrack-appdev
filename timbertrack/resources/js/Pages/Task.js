import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Form from './TaskComponents/TaskForm';
import TaskDisplay from './TaskComponents/TaskDisplay';


export default function Task(props) {

    const [inputText, setInputText] = useState("");
    const [employee, setEmployee] = useState([]);
    const [day, setDay] = useState("Today");


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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-5 bg-white border-b border-gray-200 ">
                        <Form
                             inputText={inputText}
                             setInputText={setInputText}
                             day = {day}
                             setDay={setDay}
                             employee = {employee}
                             setEmployee = {setEmployee}

                        />


                    </div>


                    </div>
                     {/* end admin */}
                    <TaskDisplay
                         employee = {employee}
                         setEmployee = {setEmployee}
                         />
                </div>
            </div>
        </Authenticated>
    );
}
