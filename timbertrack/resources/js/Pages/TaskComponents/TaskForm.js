import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Form({employee, setEmployee , inputText, setInputText}) {



    const TextHandler = (e) => {
        setInputText(e.target.value);
    };

    const textInput = () =>{

        setEmployee(employee => ({
            ...employee,
            task: inputText,
        }))

    };

    const handleChange = (e) =>{
        const key = e.target.id;
        let value = e.target.value
        const current = new Date();

        if(value === "Today"){
            value =  `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
        }else if (value === "Tomorrow"){
            value =  `${current.getMonth()+1}/${current.getDate()+1}/${current.getFullYear()}`;
        }

        setEmployee(employee => ({
            ...employee,
            [key]: value,
        }))

    };




    const handleSubmit = (e) => {

      e.preventDefault();

      Inertia.post('/task', employee)

      setInputText(" ");

    };

    return (
        <form className="space-x-6" onSubmit= {handleSubmit}>
            <select id="employee_id" value= {employee.employee_id} onChange= {handleChange} className= "border-b border-gray-200">
                    <option value="Destination" selected hidden>Employee </option>
                    <option value="32">John Legend</option>
                    <option value="12">Grande</option>
            </select>

            <input type="text" id="task" value = {inputText} onChange= {TextHandler} className= "border-b border-gray-200 w-3/5" placeholder="Task . . ."></input>
            <select id="day" onChange={handleChange} className= "border-b border-gray-200">
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
            </select>
            <button type="submit" onClick= {textInput} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Insert
            </button>
        </form>


    );
}
