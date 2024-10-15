import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
  const { data, setData, post, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route('user.store'));
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
          Создание нового пользователя
        </h2>
      }
    >
      <Head title="Пользователи" />

      <div className="py-12">
        <div className="max-w-[1400px] mx-auto sm:px-6 lg:px-8">
          <form onSubmit={onSubmit} className="p-4 sm:p8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
            <div>
              <InputLabel
                htmlFor="user_name"
                value="Имя пользователя" />
              <TextInput
                id="user_name"
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
                htmlFor="user_email"
                value="Почта" />
              <TextInput
                id="user_email"
                type="text"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                onChange={(e) => setData('email', e.target.value)} />
              <InputError message={errors.description} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="user_password"
                value="Пароль" />
              <TextInput
                id="user_password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                onChange={(e) => setData('password', e.target.value)} />
              <InputError message={errors.password} className="mt-2" />
            </div>
            <div className="mt-4">
              <InputLabel
                htmlFor="user_password_confirm"
                value="Проверка пароля" />
              <TextInput
                id="user_password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="mt-1 block w-full"
                onChange={(e) => setData('password_confirmation', e.target.value)} />
              <InputError message={errors.status} className="mt-2" />
            </div>
            <div className="mt-4 flex justify-end items-center">
              <Link
                href={route('user.index')}
                className="block bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2 text-sm h-7"
              >
                Отменить
              </Link>
              <button
                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm"
              >
                Создать
              </button>
            </div>
          </form>
        </div>
      </div>


    </AuthenticatedLayout>
  )
}
