import { Inertia } from '@inertiajs/inertia';
import React, {useState} from 'react';
import Salary from './SalaryValues'

export default function PayrollTable({employees}){

    const [salary, setSalary] = useState({
        id : '',
        editState: false,
        salary: ''
    });


    return(
    <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full overflow-hidden">
                    <thead>
                        <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Employee Name</th>
                            <th className="px-4 py-3">Salary</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                    {employees.map( employee => {
                        return(
                            <Salary
                            salary = {salary}
                            setSalary = {setSalary}
                            employee = {employee}
                            />
                        );

                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    );
}