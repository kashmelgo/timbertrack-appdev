<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Task;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class TaskController extends Controller
{
    public function index(){

        $user = Auth::user();


        if($user->usertype == "admin"){
            $task = Task :: all();
            $employee = User::where('usertype', "employee")->get();
            return Inertia::render('Task', ['task' => $task, 'employee' => $employee]);
        }else{
            $task = Task::where('employee_id', $user->id)->get();
            return Inertia::render('Task', ['task' => $task]);
        }
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
        $task = Task::find($request->id);
        $task->delete();

        return redirect('/task');
    }

    public function finishTask(Request $request){

        $task = Task::find($request->id);
        $task->isFinished = !($task->isFinished);

        $task->save();

        return redirect('/task');
    }
}
