<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    public function index(){
        return Inertia::render('Task');
    }

    public function store(Request $request){

        $task = new Task;

        $task->id = $request->id;
        $task->task_name = $request->task_name;
        $task->day = $request->day;
        $task->employee_id = $request->employee_id;

        $task->save();

        return redirect('/task');
    }
}
