import React from 'react';


export default function Form({employee, setEmployee}) {



    const handleChange = (e) =>{
        const key = e.target.id;
        let value = e.target.value
        const current = new Date();

        if(value === "Today"){
            value =  `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        }else if (value === "Tomorrow"){
            value =  `${current.getDate()+1}/${current.getMonth()+1}/${current.getFullYear()}`;
        }

        setEmployee(values => ({
            ...values,
            [key]: value,
        }))
    };




    const handleSubmit = (e) => {

      e.preventDefault();
      Inertia.post('/task', values)

    };

    return (
        <form className="space-x-6" onSubmit= {handleSubmit}>
            <select id="employee_id" value= {employee.employee_id} onChange= {handleChange} className= "border-b border-gray-200">
                    <option value="Destination" selected disabled hidden>Employee </option>
                    <option value="John Legend">John Legend</option>
            </select>

            <input type="text" id="task" value = {employee.task} onChange= {handleChange} className= "border-b border-gray-200 w-3/5" placeholder="Task . . ."></input>
            <select id="day" onChange={handleChange} className= "border-b border-gray-200">
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
            </select>
            <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Insert
            </button>
        </form>


    );
}
