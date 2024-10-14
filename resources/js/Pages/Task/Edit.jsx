import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, task }) {
  const { data, setData, post, errors, reset } = useForm({
    image: '',
    name: task.name || "",
    status: task.status || "",
    description: task.description || "",
    due_date: task.due_date || "",
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
<<<<<<< HEAD
          Изменение проекта "{task.name}"
=======
          Изменение задачи "{task.name}"
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
        </h2>
      }
    >
      <Head title="Проекты" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="p-4 sm:p8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            {task.image_path &&
              <div>
                <img src={task.image_path} className="w-64" />
              </div>}
            <div>
              <InputLabel
                htmlFor="task_name"
<<<<<<< HEAD
                value="Название проекта" />
=======
                value="Название задачи" />
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
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
                htmlFor="task_image_path"
<<<<<<< HEAD
                value="Аватар проекта" />
=======
                value="Аватар задачиа" />
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
              <TextInput
                id="task_image_path"
                type="file"
                name="image"
                className="mt-1 block w-full"
                onChange={(e) => setData('image', e.target.files[0])} />
              <InputError message={errors.image} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="task_description"
<<<<<<< HEAD
                value="Описание проекта" />
=======
                value="Описание задачиа" />
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
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
<<<<<<< HEAD
                value="Дата окончания проекта" />
=======
                value="Дата окончания задачиа" />
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
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
              <InputLabel
                htmlFor="task_status"
<<<<<<< HEAD
                value="Статус проекта" />
=======
                value="Статус задачиа" />
>>>>>>> 05e01ffb2b866496a1e8596caf206d1cf2d4c8af
              <SelectInput
                id="task_status"
                name="status"
                value={data.status}
                className="mt-1 block w-full"
                onChange={(e) => setData('status', e.target.value)}>
                <option value="">Выбрать</option>
                <option value="new">Новый</option>
                <option value="pending">Отложен</option>
                <option value="in_progress">А процессе</option>
                <option value="completed">Завершен</option>
                <option value="canceled">Отменен</option>
              </SelectInput>
              <InputError message={errors.status} className="mt-2" />
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
