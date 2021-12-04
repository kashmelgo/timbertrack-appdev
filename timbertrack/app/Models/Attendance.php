<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'employee_id',
        'date',
        'time_in',
        'time_out',
    ];

    public function setDateAttribute($value)
    {
        $this->attributes['date'] = Carbon::createFromFormat('m/d/Y', $value)->format('Y-m-d');
    }

    // public function getTime_InAttribute($time_in)
    // {
    //     return Carbon::createFromFormat('Y-m-d H:i:s', $time_in)->format('hh:mm');
    // }
}
