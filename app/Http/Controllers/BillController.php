<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBillRequest;
use App\Models\Bill;
use App\Models\User;
use App\Models\UserBill;
use Exception;
use Illuminate\Support\Facades\DB;

class BillController extends Controller
{
    public function store(StoreBillRequest $request)
    {
        $validated = $request->validated();
        $targetType = $validated['target']['type'];

        $newBill = Bill::create([
            'name' => $validated['name'],
            'amount' => $validated['amount'],
            'target' => $targetType,
            'due_date' => $validated['due_date'],
        ]);

        DB::beginTransaction();

        try {
            $users = [];

            switch ($targetType) {
                case 'ALL':
                    $users = User::where('role', 'student')->get();
                    break;
                case 'BYCLASS':
                    $class_origin = $validated['target']['value'];
                    $users = User::whereIn('class_origin', $class_origin)
                        ->where('role', 'student')
                        ->get();
                    break;
                case 'BYSTUDENT':
                    $userIds = $validated['target']['value'];
                    $users = User::whereIn('id', $userIds)
                        ->where('role', 'student')
                        ->get();
                    break;
                default:
                    throw new \Exception('Target not identified');
            }

            foreach ($users as $user) {
                UserBill::create([
                    'bill_id' => $newBill->id,
                    'debt' => $newBill->amount,
                    'is_paid_off' => false,
                    'user_id' => $user->id,
                ]);
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            echo $e->getMessage();
        }
    }

    public function index()
    {
        try {
            $bills = Bill::all();
            $formatedBills = $bills->map(function ($bill) {
                return [
                    'id' => $bill->id,
                    'name' => $bill->name,
                    'amount' => $bill->amount,
                    'target' => $bill->target,
                    'due_date' => $bill->due_date,
                ];
            });

            return view('bills.index', ['bills' => $formatedBills]);
        } catch (Exception $e) {
            echo $e->getMessage();
            return null;
        }
    }
}
