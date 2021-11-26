import { Inertia } from '@inertiajs/inertia';
import React from 'react';

const ValueDisplay= ({task, List, employee})=>{

    function deleteHandler(){

        Inertia.delete(route("task.destroy", List.id));
    };

    // const completeStatus = (e) =>{
    //     setEmployee(employee.map((item) => {
    //         if(item.id === employees.id){

    //             return{
    //                 ...item , completed: !item.completed
    //             }
    //         }
    //         return item;
    //     }));
    // };

    return(
        <div  className="rounded-lg p-2 my-3 bg-gray-100 neumorph-1 text-center text-gray-800">

        <div

        className={`bg-white p-5 ${List.isFinished? "opacity-50 line-through hover:no-underline hover:opacity-100": ""} `}
        >
            {task}
            <br/>
            {/* onClick={completeStatus} */}
           <button   className="rounded-full h-7 w-7 border-2 border-black-200 mx-2 hover:border-black">
            <svg className="h-5 w-5 text-black mx-0.5"  width="24" height="24" viewBox="0 0 24 24"
             stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>

            {(List.isFinished)?<line x1="18" y1="6" x2="6" y2="18" />
              :<path d="M5 12l5 5l10 -10" /> }
            {(List.isFinished)?<line x1="6" y1="6" x2="18" y2="18" />: undefined}

              </svg>



            </button>

            {/* admin */}

            <button onClick={deleteHandler} className="rounded-full h-7 w-7 border-2 border-black-200  hover:border-black" >
            <svg className="h-5 w-5 text-black mx-0.5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </button>
            {/* end admin */}
         </div>

     </div>
    );
}
export default ValueDisplay;
