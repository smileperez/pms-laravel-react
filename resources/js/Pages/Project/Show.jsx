import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, success, project, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Проект "${project.name}"`}
          </h2>
          <Link
            href={route("project.edit", project.id)}
            className="bg-amber-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-amber-600"
          >
            Изменить
          </Link>
        </div>
      }
    >
      <Head title={`Проект "${project.name}"`} />
      <div className="py-8">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">ID проекта</label>
                    <p className="mt-1">{project.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">
                      Название проекта
                    </label>
                    <p className="mt-1">{project.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">
                      Создатель проекта
                    </label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">
                      Последнее обновление от
                    </label>
                    <p className="mt-1">{project.updatedBy.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Статус проекта</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">
                      Дата создания проекта
                    </label>
                    <p className="mt-1">{project.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">
                      Дата окончания проекта
                    </label>
                    <p className="mt-1">{project.due_date}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="font-bold text-lg">Описание проекта</label>
                <p className="mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TasksTable
                tasks={tasks}
                queryParams={queryParams}
                hideProjectColumn={true}
                success={success}
              />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
