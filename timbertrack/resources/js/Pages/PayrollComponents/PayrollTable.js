import { Inertia } from '@inertiajs/inertia';
import React, {useState} from 'react';

export default function PayrollTable({employees}){

    const [editingState, setEditingState] = useState(false);
    const [salary, setSalary] = useState(0);

    const salaryHandler = (e) => {
        setSalary(e.target.value);
    };

    function deleteHandler(id){
        Inertia.delete(route('deleteuser', id));
    }

    function editHandler(){
        setEditingState(!editingState);
    }

    function handleSubmit(e, id){
        e.preventDefault();

        Inertia.post(route('updateuser', id))
    }
    return(
    <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
            <div className="w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                            <th className="px-4 py-3">Employee Name</th>
                            <th className="px-4 py-3">Salary</th>
                            <th className="px-4 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                    {employees.map( employee => {
                        return(
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black">{employee.name}</p>
                                        </div>
                                    </div>
                                </td>
                                {
                                    editingState ? (
                                        <td className="px-4 py-3 text-ms font-semibold border">
                                            <form onSubmit={() => handleSubmit(employee.id)}>
                                                <input className="shadow appearance-none border rounded py-2 px-3 w-1/2 text-gray-700 focus:outline-none focus:shadow-outline" value={salary} onChange={salaryHandler} id="salary" type="number" step=".02" placeholder={employee.salary} />
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                                    Submit
                                                </button>
                                            </form>
                                        </td>

                                    ) : (
                                        <td className="px-4 py-3 text-ms font-semibold border">{employee.salary}</td>
                                    )
                                }
                                <td className="px-4 py-3 border">
                                    <button onClick={editHandler} className="text-yellow-400 hover:text-gray-100 mx-2">
                                        <i className="material-icons-outlined text-base">edit</i>
                                    </button>
                                    <button onClick={() => deleteHandler(employee.id)} className="text-red-400 hover:text-gray-100 ml-2">
                                        <i className="material-icons-round text-base">delete_outline</i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    );
}
