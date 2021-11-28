import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { Head } from '@inertiajs/inertia-react';
import AttendanceLog from './ReportComponents/AttendanceLog';
import Chart from './ReportComponents/Chart';

export default function Report(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Report</h2>}

        >
            <Head title="Report" />


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex space-x-5 ">
                    <div className="overflow-hidden shadow-sm sm:rounded-lg w-1/2 ">
                        <div className="bg-white  shadow-sm sm:rounded-lg w-full p-6 mb-3">
                            <DayPickerInput />
                        </div>

                        <AttendanceLog/>
                    </div>

                    <div className="bg-white  shadow-sm sm:rounded-lg w-1/2 p-6 ">
                    {/* <Chart/> */}
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
