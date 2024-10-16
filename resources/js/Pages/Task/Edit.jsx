import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, task, projects, users }) {
  const { data, setData, post, errors, reset } = useForm({
    name: task.name || "",
    description: task.description || "",
    status: task.status || "",
    priority: task.priority || "",
    due_date: task.due_date || "",
    assigned_user_id: task.assigned_user_id || "",
    project_id: task.project_id || "",
    _method: 'PUT'
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('task.update', task.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Изменение задачи "{task.name}"
        </h2>
      }
    >
      <Head title="Проекты" />

      <div className="py-8">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="p-4 sm:p8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div>
              <InputLabel
                htmlFor="task_name"
                value="Название" />
              <TextInput
                id="task_name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={(e) => setData('name', e.target.value)} />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="task_description"
                value="Описание" />
              <TextAreaInput
                id="task_description"
                name="description"
                value={data.description}
                className="mt-1 block w-full"
                onChange={(e) => setData('description', e.target.value)} />
              <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="task_due_date"
                value="Срок задачи" />
              <TextInput
                id="task_due_date"
                type="date"
                name="due_date"
                value={data.due_date}
                className="mt-1 block w-full"
                onChange={(e) => setData('due_date', e.target.value)} />
              <InputError message={errors.due_date} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="task_status" value="Статус" />
              <SelectInput
                id="task_status"
                name="status"
                value={data.status}
                className="mt-1 block w-full"
                onChange={(e) => setData("status", e.target.value)}
              >
                <option value="">выбрать</option>
                <option value="new">новая</option>
                <option value="pending">в ожидании</option>
                <option value="in_progress">в процессе</option>
                <option value="completed">завершена</option>
                <option value="canceled">отменен</option>
              </SelectInput>
              <InputError message={errors.status} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="task_priority" value="Приоритет" />
              <SelectInput
                id="task_priority"
                name="priority"
                value={data.priority}
                className="mt-1 block w-full"
                onChange={(e) => setData("priority", e.target.value)}
              >
                <option value="">выбрать</option>
                <option value="low">низкий</option>
                <option value="medium">средний</option>
                <option value="high">высокий</option>
              </SelectInput>
              <InputError message={errors.priority} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="assigned_user_id" value="Назначено на" />
              <SelectInput
                id="assigned_user_id"
                name="assigned_user_id"
                value={data.assigned_user_id}
                className="mt-1 block w-full"
                onChange={(e) => setData("assigned_user_id", e.target.value)}
              >
                <option value="">Выбрать</option>
                {users.data.map(user => (
                  <option value={user.id}>{user.name}</option>
                ))}
              </SelectInput>
              <InputError message={errors.assigned_user_id} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="project_id" value="Привязка к проекту" />
              <SelectInput
                id="project_id"
                name="project_id"
                value={data.project_id}
                className="mt-1 block w-full"
                onChange={(e) => setData("project_id", e.target.value)}
              >
                <option value="">Выбрать</option>
                {projects.data.map(project => (
                  <option value={project.id}>{project.name}</option>
                ))}
              </SelectInput>
              <InputError message={errors.project_id} className="mt-2" />
            </div>
            <div className="mt-4 flex justify-end items-center">
              <Link
                href={route('task.index')}
                className="block bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-7"
              >
                Отменить
              </Link>
              <button
                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm"
              >
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>


    </AuthenticatedLayout>
  )
}
