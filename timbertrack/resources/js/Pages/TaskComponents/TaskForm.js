import React from 'react';


export default function Form({inputText, setInputText, setDay, day,employee, employed, setEmployed, setEmployee}) {

    const inputTextHandler = (e) =>{
        setInputText(e.target.value);

    };

    const setEmployer = (e) => {
        setEmployed(e.target.value);
    }

    const daySet = (e) =>{
        setDay(e.target.value);

    };


    const submitToDoHandler = (e) => {

      e.preventDefault();


      setEmployee([
            ...employee, {task: inputText , employee:employed , day: day, completed:false, id: Math.random() * 1000}
        ]);

        setInputText('');
    };

    return (
        <form className="space-x-6">
            <select onChange={setEmployer} className= "border-b border-gray-200">
                    <option value="Destination" selected disabled hidden>Employee </option>
                    <option value="John Legend">John Legend</option>
                    <option value="ariana">Grande</option>
            </select>

            <input type="text" value = {inputText} onChange= {inputTextHandler} className= "border-b border-gray-200 w-3/5" placeholder="Task . . ."></input>
            <select  onChange={daySet} className= "border-b border-gray-200">
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
            </select>
            <button onClick= {submitToDoHandler} type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Insert
            </button>
        </form>


    );
}
