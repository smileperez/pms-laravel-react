<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();

        $totalNewTasks = Task::query()->where('status', 'new')->count();
        $myNewTasks = Task::query()->where('status', 'new')->where('assigned_user_id', $user->id)->count();

        $totalPendingTasks = Task::query()->where('status', 'pending')->count();
        $myPendingTasks = Task::query()->where('status', 'pending')->where('assigned_user_id', $user->id)->count();

        $totalProgressTasks = Task::query()->where('status', 'in_progress')->count();
        $myProgressTasks = Task::query()->where('status', 'in_progress')->where('assigned_user_id', $user->id)->count();

        $totalCompletedTasks = Task::query()->where('status', 'completed')->count();
        $myCompletedTasks = Task::query()->where('status', 'completed')->where('assigned_user_id', $user->id)->count();

        $activeTasks = Task::query()->whereIn('status', ['pending', 'in_progress'])->where('assigned_user_id', $user->id)->orderByDesc('id')->take(10)->get();
        $activeTasks = TaskResource::collection($activeTasks);
        
        return Inertia::render('Dashboard', compact('totalNewTasks', 'myNewTasks', 'totalPendingTasks', 'myPendingTasks', 'totalProgressTasks', 'myProgressTasks', 'totalCompletedTasks', 'myCompletedTasks', 'activeTasks'));
    }
}
