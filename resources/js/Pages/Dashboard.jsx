import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import {
  TASK_STATUS_CLASS_MAP,
  TASK_STATUS_TEXT_MAP,
  TASK_PRIORITY_CLASS_MAP,
  TASK_PRIORITY_TEXT_MAP,
} from "@/constants.jsx";

export default function Dashboard({
  auth,
  totalNewTasks,
  myNewTasks,
  totalPendingTasks,
  myPendingTasks,
  totalProgressTasks,
  myProgressTasks,
  totalCompletedTasks,
  myCompletedTasks,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Панель
        </h2>
      }
    >
      <Head title="Панель" />

      <div className="py-12">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8 grid grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-sky-400 text-2xl font-semibold">Новые</h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{totalNewTasks}</span>/
                <span className="ml-2">{myNewTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                В ожидании
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{totalPendingTasks}</span>/
                <span className="ml-2">{myPendingTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-violet-500 text-2xl font-semibold">
                В работе
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{totalProgressTasks}</span>/
                <span className="ml-2">{myProgressTasks}</span>
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-emerald-500 text-2xl font-semibold">
                Завершенные
              </h3>
              <p className="text-xl mt-4">
                <span className="mr-2">{totalCompletedTasks}</span>/
                <span className="ml-2">{myCompletedTasks}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8 mt-4">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-gray-200 text-2xl font-semibold">
                Мои последние задачи
              </h3>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-2">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                  <tr className="text-nowrap text-center">
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Проект</th>
                    <th className="px-3 py-2">Задача</th>
                    <th className="px-3 py-2">Статус</th>
                    <th className="px-3 py-2">Срок</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.data.map((task) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={task.id}
                    >
                      <td className="px-3 py-3">{task.id}</td>
                      <td className="px-3 py-3 hover:text-white">
                        <Link href={route("project.show", task.project_id)}>
                          {task.project.name}
                        </Link>
                        </td>
                      <td className="px-3 py-3 hover:text-white">
                        <Link href={route("task.show", task.id)}>
                          {task.name}
                        </Link>
                      </td>
                      <td className="px-3 py-3">
                        <span
                          className={
                            "px-2 py-1 rounded text-white text-nowrap " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-nowrap">{task.due_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
