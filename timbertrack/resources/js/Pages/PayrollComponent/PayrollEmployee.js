import React from 'react';

export default function PayrollEmployee ({props}){

    return (
        <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 bg-white border-b border-gray-200 text-center text-xl font-semibold text-gray-800">{props.auth.user.name}</div>
            </div>

            <div className=" flex space-x-5 ">
                <div className=" bg-white overflow-hidden shadow-sm sm:rounded-lg w-full p-6 mt-6">
                    <div className="p-6 bg-white border-b border-gray-200 ">
                        Salary Per Hour :
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200 mt-6">
                        Total Work Hours of the Month : <b>{props.hours} </b>
                    </div>
                    <div className="p-6 bg-white border-b border-gray-200 mt-6">
                        Income of the Month :
                    </div>
                </div>

                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg w-full p-6 mt-6 ">
                    <p className='font-semibold text-gray-800  border-b border-gray-100'>Attendance Log </p> <br/>
                    <table className="table-auto w-full  ">
                    <thead className="text-xs font-semibold uppercase bg-gray-50">
                        <tr className="bg-gray-100 text-center">
                            <th className='p-2'>Date</th>
                            <th className='p-2'>Time In</th>
                            <th className='p-2'>Time out</th>
                            <th className='p-2'>Office Time</th>
                        </tr>
                    </thead>

                    <tbody className="text-center overflow-y-scroll "  >

                        {
                            props.attendance.map( attendance => {
                                return(
                                    <tr className='border-b border-gray-200 border-solid '>
                                        <td className="p-2 text-center">{attendance.date}</td>
                                        <td className="p-2 text-center">{attendance.time_in}</td>
                                        <td className="p-2 text-center">{attendance.time_out}</td>
                                        <td className="p-2 text-center">{attendance.work_hours}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}
