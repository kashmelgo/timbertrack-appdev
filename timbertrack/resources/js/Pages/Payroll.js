import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import PayrollTable from './PayrollComponents/PayrollTable';
import 'material-icons/iconfont/material-icons.css';


export default function Report(props) {

    const [employees, setEmployees] = useState({
        employee_id: "",
        task: "",
        day: date,
        isFinished: false,
    });
    return (

    <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll</h2>}

    >
            <Head title="Payroll" />


    <PayrollTable
        employees = {props.employees}
    />

    </Authenticated>
    );
}
