import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import AttendanceLog from './ReportComponents/AttendanceLog';
import DatePicking from './ReportComponents/DatePicking';
import Chart from './ReportComponents/Chart'

export default function Report(props) {
    const [date, setDate] = useState(new Date());
    const [finished, setFinished] = useState({
        name: "Finished",
        value: ""
    })
    const [unfinished, setUnfinished] = useState({
        name: "Unfinished",
        value: ""
    })

    console.log(finished)
    console.log(unfinished)
    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payroll</h2>}

        >
            <Head title="Payroll" />


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex space-x-5 ">
                    <div className=" shadow-sm sm:rounded-lg w-full ">
                        <div  className="bg-white shadow-sm sm:rounded-lg w-full p-6 mb-3">
                            {/* Insert Table Here */}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
