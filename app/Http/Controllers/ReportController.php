<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Task;
use Inertia\Inertia;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;


class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
            $date = Carbon::now();
            $employee = User::where('usertype', "employee")->get();
            $attendance = Attendance :: all();
            $task = Task:: all();
            return Inertia::render('Report', ['attendance' => $attendance,'employee' => $employee, 'task' => $task]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $dateChecker = Carbon::now()->timezone('Asia/Manila')->format('Y-m-d');
        $date = Carbon::now()->timezone('Asia/Manila');
        $listUser= Attendance::where('employee_id', $request->id)->get();

        foreach($listUser as $userList){

            if($userList->date == $dateChecker && $userList->time_out == NULL){
                $userList->time_out = $date;
                $t1 = strtotime($userList->time_in);
                $t2 = strtotime($date);
                $userList->work_hours = gmdate('H:i', $t2 - $t1);
                $userList->save();
            }
        }
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

}
