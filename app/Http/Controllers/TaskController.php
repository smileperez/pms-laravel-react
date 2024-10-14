<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use Illuminate\Support\Facades\Auth;
<<<<<<< HEAD
=======
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Task::query();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }
        if (request("priority")) {
            $query->where("priority", request("priority"));
        }

        $tasks = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia("Task/Index", [
            "tasks" => TaskResource::collection($tasks),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Task/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $data = $request->validated();
<<<<<<< HEAD
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();

        Task::create($data);

        return to_route('task.index')->with('success', 'Новая задача создана');
=======
        $image = $data['image'] ?? null;
        $data['created_by'] = Auth::id();
        $data['updated_by'] = Auth::id();
        if ($image) {
            $data['image_path'] = $image->store('task/' . Str::random(), 'public');
        }

        Task::create($data);

        return to_route('task.index')->with('success', 'Новый проект создан');
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
    }

    /**
     * Display the specified resource.
     */
    public function show(Task $task)
    {
        $query = $task->tasks();

        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $tasks = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)
            ->onEachSide(1);

        return inertia('Task/Show', [
            'task' => new TaskResource($task),
<<<<<<< HEAD
            'tasks' => TaskResource::collection($tasks),
=======
            "tasks" => TaskResource::collection($tasks),
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Task $task)
    {
        return inertia('Task/Edit', [
            'task' => new TaskResource($task)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $data = $request->validated();
<<<<<<< HEAD
        $data['updated_by'] = Auth::id();
        $task->update($data);

        return to_route('task.index')->with('success', "Задача \"$task->name\" успешно обновлена");
=======
        $image = $data['image'] ?? null;
        $data['updated_by'] = Auth::id();
        if ($image) {
            if ($task->image_path) {
                Storage::disk('public')->deleteDirectory($task->image_path);
            }

            $data['image_path'] = $image->store('task/' . Str::random(), 'public');
        }
        $task->update($data);

        return to_route('task.index')->with('success', "Проект \"$task->name\" был успешно обновлен");
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Task $task)
    {
        $name = $task->name;
        $task->delete();
<<<<<<< HEAD

        return to_route('task.index')
            ->with('success', "Задача \"$name\" успешно удалена");
=======
        return to_route('task.index')->with('success', "Задача \"$name\" была успешно удалена");
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
    }
}
