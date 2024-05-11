import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    image: '',
    name: '',
    status: '',
    description: '',
    due_date: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('project.create'));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Создание нового проекта
        </h2>
      }
    >
      <Head title="Проекты" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="p-4 sm:p8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
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
                value={data.image}
                className="mt-1 block w-full"
                onChange={(e) => setData('image', e.target.value)} />
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
                name="date"
                value={data.date}
                className="mt-1 block w-full"
                onChange={(e) => setData('date', e.target.value)} />
              <InputError message={errors.date} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="project_status"
                value="Статус проекта" />
              <SelectInput
                id="project_status"
                name="status"
                value={data.date}
                className="mt-1 block w-full"
                onChange={(e) => setData('status', e.target.value)}>
                <option value="">Выбрать</option>
                <option value="new">новый</option>
                <option value="pending">отложен</option>
                <option value="in_progress">в процессе</option>
                <option value="completed">завершен</option>
                <option value="canceled">отменен</option>
              </SelectInput>
              <InputError message={errors.status} className="mt-2" />
            </div>
          </form>
        </div>
      </div>


    </AuthenticatedLayout>
  )
}
