<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PayrollController extends Controller
{
    function index(){
        $employees = User::where('usertype', "employee")->get();
        return Inertia::render('Payroll', ['employees' => $employees]);
    }
}
