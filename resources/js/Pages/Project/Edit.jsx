import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, project }) {
  const { data, setData, post, errors, reset } = useForm({
    image: '',
    name: project.name || "",
    status: project.status || "",
    description: project.description || "",
    due_date: project.due_date || "",
    _method: 'PUT'
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('project.update', project.id));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Изменение проекта "{project.name}"
        </h2>
      }
    >
      <Head title="Проекты" />

      <div className="py-12">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="p-4 sm:p8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            {project.image_path &&
              <div>
                <img src={project.image_path} className="w-64" />
              </div>}
            <div>
              <InputLabel
                htmlFor="project_name"
                value="Название проекта" />
              <TextInput
                id="project_name"
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
                htmlFor="project_image_path"
                value="Аватар проекта" />
              <TextInput
                id="project_image_path"
                type="file"
                name="image"
                className="mt-1 block w-full"
                onChange={(e) => setData('image', e.target.files[0])} />
              <InputError message={errors.image} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="project_description"
                value="Описание проекта" />
              <TextAreaInput
                id="project_description"
                name="description"
                value={data.description}
                className="mt-1 block w-full"
                onChange={(e) => setData('description', e.target.value)} />
              <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="project_due_date"
                value="Дата окончания проекта" />
              <TextInput
                id="project_due_date"
                type="date"
                name="due_date"
                value={data.due_date}
                className="mt-1 block w-full"
                onChange={(e) => setData('due_date', e.target.value)} />
              <InputError message={errors.due_date} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="project_status"
                value="Статус проекта" />
              <SelectInput
                id="project_status"
                name="status"
                value={data.status}
                className="mt-1 block w-full"
                onChange={(e) => setData('status', e.target.value)}>
                <option value="">выбрать</option>
                <option value="new">новый</option>
                <option value="pending">отложен</option>
                <option value="in_progress">в процессе</option>
                <option value="completed">завершен</option>
                <option value="canceled">отменен</option>
              </SelectInput>
              <InputError message={errors.status} className="mt-2" />
            </div>
            <div className="mt-4 flex justify-end items-center">
              <Link
                href={route('project.index')}
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
