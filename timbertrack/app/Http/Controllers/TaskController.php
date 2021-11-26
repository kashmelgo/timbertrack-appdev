<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    public function index(){
        $task = Task :: all();
        return Inertia::render('Task', ['task' => $task]);
    }


    public function store(Request $request){

        $task = new Task;

        $task->id = $request->id;
        $task->task_name = $request->task;
        $task->day = Carbon::createFromFormat('m/d/Y', $request->day)->format('Y-m-d');
        $task->employee_id = $request->employee_id;
        $task->isFinished = $request->isFinished;

        $task->save();

        return redirect('/task');
    }

    public function destroy(Request $request)
    {
        $request->delete();

        return redirect('/task');
    }
}
