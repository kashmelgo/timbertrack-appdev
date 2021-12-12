<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PayrollController extends Controller
{
    function index(){
        $user =  Auth::user();

        if($user->usertype == "admin"){
            $employees = User::where('usertype', "employee")->get();
            return Inertia::render('Payroll', ['employees' => $employees]);
        }else{
            $date = Carbon::now()->timezone('America/Los_Angeles')->format('m');

            $dd =  Carbon::createFromFormat('H:i:s','00:00:00');

            $attendance = Attendance :: where('employee_id', $user->id)->get();

            foreach($attendance as $totalHours){
                $dates= strtotime($totalHours->date);
                if(date('m', $dates) == $date){
                    $dd = gmdate('H:i', strtotime($dd) + strtotime($totalHours->work_hours));
                }
            }
            $hours = date("g", strtotime($dd));
            $salary = (int)$hours * $user->salary;

            return Inertia::render('Payroll', ['attendance' => $attendance, 'hours' => $dd, 'totalSalary' => $salary]);
        }


    }
}
