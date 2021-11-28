import { Inertia } from '@inertiajs/inertia';
import React from 'react';

const AttendanceLog = ()=>{

    return(
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full p-6 ">
        Attendance Log <br/><br/>
            <table className="table-auto w-full  ">
                <thead>
                    <tr className="bg-gray-100 ">
                        <th>Name</th>
                        <th>Time In</th>
                        <th>Time out</th>
                        <th>Office Time</th>
                        <th>Late Time</th>
                    </tr>
                </thead>

                <tbody className="text-center ">

                    <tr className='border-b border-gray-200 border-solid '>
                        <td className="p-2">Jhon</td>
                        <td className="p-2">23:43</td>
                        <td className="p-2">2342</td>
                        <td className="p-2">23:43</td>
                        <td className="p-2">2342</td>
                    </tr>

                    <tr className='border-b border-gray-200 border-solid '>
                        <td className="p-2">Jhon</td>
                        <td className="p-2">23:43</td>
                        <td className="p-2">2342</td>
                        <td className="p-2">23:43</td>
                        <td className="p-2">2342</td>
                    </tr>


                </tbody>
            </table>

    </div>
    );
}
export default AttendanceLog;
