import React, {useState} from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import AttendanceLog from './ReportComponents/AttendanceLog';
import DatePicking from './ReportComponents/DatePicking';

export default function Report(props) {
    const [date, setDate] = useState(new Date());

    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report</h2>}

        >
            <Head title="Report" />


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex space-x-5 ">
                    <div className=" shadow-sm sm:rounded-lg w-full ">
                        <div  className="bg-white shadow-sm sm:rounded-lg w-full p-6 mb-3">
                        <DatePicking
                            date={date}
                            setDate={setDate}
                        />

                        </div>

                        <AttendanceLog
                            user= {props.employee}
                            attendance= {props.attendance}
                            date = {date}
                        />
                    </div>
                    <div className="overflow-hidden shadow-sm sm:rounded-lg w-full ">
                        <div className="bg-white  shadow-sm sm:rounded-lg w-full p-6 mb-3">
                            Chart pero ang version trash mao di mu work :)
                        </div>
                        {/* <Chart/> */}
                    </div>

                </div>
            </div>
        </Authenticated>
    );
}
