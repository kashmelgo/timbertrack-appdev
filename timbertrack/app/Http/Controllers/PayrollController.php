<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PayrollController extends Controller
{
    function index(){
        return Inertia::render('Payroll');
    }
}
