import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
  TASK_STATUS_CLASS_MAP,
  TASK_PRIORITY_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
  TASK_PRIORITY_TEXT_MAP,
} from "@/constants";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, task, users }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Задача "${task.name}"`}
          </h2>
          <Link
            href={route("task.edit", task.id)}
            className="bg-amber-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-amber-600"
          >
            Изменить
          </Link>
        </div>
      }
    >
      <Head title={`Задача "${task.name}"`} />
      <div className="py-8">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">ID задачи</label>
                    <p className="mt-1">{task.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Название</label>
                    <p className="mt-1">{task.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Проект</label>
                    <p className="mt-1">
                      <Link href={route("project.show", task.project.id)}>
                        {task.project.name}
                      </Link>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Создатель</label>
                    <p className="mt-1">{task.updatedBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">
                      Последнее обновление от
                    </label>
                    <p className="mt-1">{task.updatedBy.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Назначена</label>
                    <p className="mt-1">
                      <p className="mt-1">{task.assignedUser.name}</p>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Статус</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          TASK_STATUS_CLASS_MAP[task.status]
                        }
                      >
                        {TASK_STATUS_TEXT_MAP[task.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Приоритет</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          TASK_PRIORITY_CLASS_MAP[task.priority]
                        }
                      >
                        {TASK_PRIORITY_TEXT_MAP[task.priority]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Дата создания</label>
                    <p className="mt-1">{task.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Срок</label>
                    <p className="mt-1">{task.due_date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Описание задачи</label>
                <p className="mt-1">{task.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
