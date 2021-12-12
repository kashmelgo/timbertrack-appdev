<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_name',
        'day',
        'employee_id',
        'isFinished' => 'false',
    ];

    public function setTransactionDateAttribute($value)
    {
        $this->attributes['day'] = Carbon::createFromFormat('m/d/Y', $value)->format('Y-m-d');
    }
}
