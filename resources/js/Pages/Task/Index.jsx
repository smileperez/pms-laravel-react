import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP, TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP } from "@/constants.jsx";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function index({ auth, tasks, queryParams = null }) {

  queryParams = queryParams || {};

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value
    } else {
      delete queryParams[name]
    }

    router.get(route('task.index', queryParams));
  }

  const onKeyPress = (name, e) => {
    if (e.key !== 'Enter') return;
    searchFieldChanged(name, e.target.value);
  }

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === 'asc') {
        queryParams.sort_direction = 'desc';
      } else {
        queryParams.sort_direction = 'asc';
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = 'asc';
    }

    router.get(route('task.index', queryParams));
  }

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Все задачи</h2>}
    >
      <Head title="Все задачи" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap text-center">
                      <TableHeading
                        name={"id"}
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>
                      <TableHeading
                        name={"name"}
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Название
                      </TableHeading>
                      <TableHeading
                        name={"status"}
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Статус
                      </TableHeading>
                      <TableHeading
                        name={"priority"}
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Приоритет
                      </TableHeading>
                      <TableHeading
                        name={"created_at"}
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Дата создания
                      </TableHeading>
                      <TableHeading
                        name={"due_date"}
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Дата окончания
                      </TableHeading>
                      <th className="px-3 py-2">Создано</th>
                      <th className="px-3 py-2">Обновлено</th>
                      <th className="px-3 py-2">Действия</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap text-center">
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2">
                        <TextInput
                          className="w-full text-xs"
                          defaultValue={queryParams.name}
                          placeholder="...задача"
                          onBlur={e => searchFieldChanged('name', e.target.value)}
                          onKeyPress={e => onKeyPress('name', e)}
                        />
                      </th>
                      <th className="px-3 py-2 text-nowrap">
                        <SelectInput
                          className="w-full"
                          defaultValue={queryParams.status}
                          onChange={e => searchFieldChanged('status', e.target.value)}
                        >
                          <option value="">Выбрать</option>
                          <option value="new">новая</option>
                          <option value="pending">отложена</option>
                          <option value="in_progress">в процессе</option>
                          <option value="completed">завершена</option>
                          <option value="canceled">отменена</option>
                        </SelectInput>
                      </th>
                      <th className="px-3 py-2">
                        <SelectInput
                          className="w-full"
                          defaultValue={queryParams.priority}
                          onChange={e => searchFieldChanged('priority', e.target.value)}
                        >
                          <option value="">Выбрать</option>
                          <option value="low">низкий</option>
                          <option value="medium">средний</option>
                          <option value="high">высокий</option>
                        </SelectInput>
                      </th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.data.map((task) => (
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={task.id}>
                        <th className="px-3 py-2">{task.id}</th>
                        <td className="px-3 py-3">{task.name}</td>
                        <td className="px-3 py-3">
                          <span className={"px-2 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]}>
                            {TASK_STATUS_TEXT_MAP[task.status]}
                          </span>
                        </td>
                        <td className="px-3 py-3">
                          <span className={"px-2 py-1 rounded text-white " + TASK_PRIORITY_CLASS_MAP[task.priority]}>
                            {TASK_PRIORITY_TEXT_MAP[task.priority]}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-nowrap">{task.created_at}</td>
                        <td className="px-3 py-3 text-nowrap">{task.due_date}</td>
                        <td className="px-3 py-3">{task.createdBy.name}</td>
                        <td className="px-3 py-3">{task.updatedBy.name}</td>
                        <td className="px-3 py-3">
                          <Link href={route('task.edit', task.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1">
                            Edit
                          </Link>
                          <Link href={route('task.destroy', task.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1">
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={tasks.meta.links} />
            </div>
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  )
}
