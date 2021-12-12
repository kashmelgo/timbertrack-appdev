<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Task;
use Inertia\Inertia;
use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TempController extends Controller
{
    public function index()
    {
            $date = Carbon::now()->timezone('America/Los_Angeles')->format('m');
            $user =  Auth::user();
            $dd =  Carbon::createFromFormat('H:i:s','00:00:00');

            $attendance = Attendance :: where('employee_id', $user->id)->get();

            foreach($attendance as $totalHours){
                $dates= strtotime($totalHours->date);
                if(date('m', $dates) == $date){

                    $dd = gmdate('H:i', strtotime($dd) + strtotime($totalHours->work_hours));


                }
            }



            return Inertia::render('Dashboard', ['attendance' => $attendance, 'hours' => $dd]);;
    }


}
