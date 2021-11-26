import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Form from './TaskComponents/TaskForm';
import TaskDisplay from './TaskComponents/TaskDisplay';
import { Inertia } from '@inertiajs/inertia';


export default function Payroll(props) {


    const [employee, setEmployee] = useState({
        employee_id: "",
        task: "",
        day: "Today",
        isFinished: false,
    });



    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll </h2>}

        >
            <Head title="Payroll" />


            <div className="py-12">
             <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                     {/* admin */}
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">

                    <div className="p-5 bg-white border-b border-gray-200 ">
                        <Form

                             employee = {employee}
                             setEmployee = {setEmployee}

                        />


                    </div>


                    </div>
                     {/* end admin */}
                    <PayrollDisplay
                         employee = {employee}
                         setEmployee = {setEmployee}
                         />
                </div>
            </div>
        </Authenticated>
    );
}