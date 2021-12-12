import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import PayrollTable from './PayrollComponents/PayrollTable';
import 'material-icons/iconfont/material-icons.css';
import PayrollEmployee from './PayrollComponents/PayrollEmployee';


export default function Report(props) {

    // const [employees, setemployees] = useState(0);
    return (

    <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll</h2>}

    >
            <Head title="Payroll" />

    {
        props.auth.user.usertype == 'admin'? (
            <PayrollTable
            employees = {props.employees}
            />
        ) : (
            <PayrollEmployee
                props = {props}
            />
        )
    }


    </Authenticated>
    );
}
