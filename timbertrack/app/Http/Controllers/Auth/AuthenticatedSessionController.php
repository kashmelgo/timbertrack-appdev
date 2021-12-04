<?php

namespace App\Http\Controllers\Auth;

use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Attendance;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Providers\RouteServiceProvider;
use App\Http\Requests\Auth\LoginRequest;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $request->session()->regenerate();
        $user = Auth::user();
        $date = Carbon::now()->timezone('Asia/Manila');
        $dateChecker = Carbon::now()->timezone('Asia/Manila')->format('Y-m-d');
        $count = 0;
        $check = Attendance::all();

            if(Attendance::where('employee_id', $user->id)->doesntExist()){
                $count = 1;
            }else{
                foreach ($check as $checker ){
                    if($user->id == $checker->employee_id){
                        if($dateChecker != $checker->date){
                            $count = 1;
                        }
                    }
                }
            }

        if($count == 1){
            $attendance = new Attendance;
            $attendance->employee_id = $user->id;
            $attendance->date =  $date;
            $attendance->time_in= $date->format('H:i');
            $attendance->save();
        }



        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
