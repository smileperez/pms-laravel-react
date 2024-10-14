import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: "",
    status: "",
    description: "",
    due_date: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("task.store"));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Создание новой задачи
        </h2>
      }
    >
      <Head title="Задачи" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <form
            onSubmit={onSubmit}
            className="p-4 sm:p8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
          >
            <div>
              <InputLabel htmlFor="task_name" value="Название задачи" />
              <TextInput
                id="task_name"
                type="text"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                isFocused={true}
                onChange={(e) => setData("name", e.target.value)}
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="task_description" value="Описание задачи" />
              <TextAreaInput
                id="task_description"
                name="description"
                value={data.description}
                className="mt-1 block w-full"
                onChange={(e) => setData("description", e.target.value)}
              />
              <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="task_due_date"
                value="Дата окончания задачи"
              />
              <TextInput
                id="task_due_date"
                type="date"
                name="due_date"
                value={data.due_date}
                className="mt-1 block w-full"
                onChange={(e) => setData("due_date", e.target.value)}
              />
              <InputError message={errors.due_date} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel htmlFor="task_status" value="Статус задачи" />
              <SelectInput
                id="task_status"
                name="status"
                value={data.status}
                className="mt-1 block w-full"
                onChange={(e) => setData("status", e.target.value)}
              >
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
                href={route("task.index")}
                className="block bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-7"
              >
                Отменить
              </Link>
              <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm">
                Создать
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
