# Веб-приложение «Project Management System»

<p align="center">
<img src="https://badgen.net/badge/PHP/8.3.6?color=purple" alt="PHP Version">
<img src="https://badgen.net/badge/Laravel/11.5.0?color=red" alt="Laravel Version">
<img src="https://badgen.net/badge/Node.js/8.3.6?color=green" alt="NODE Version">
<img src="https://badgen.net/badge/NPM/10.1.0?color=orange" alt="NPM Version">
<img src="https://badgen.net/badge/React/18.2?color=cyan" alt="React Version">
<img src="https://badgen.net/badge/App%20Version/1.0?color=grey" alt="App Version">
</p>

## О проекте
Проект представляет собой сайт для управления проектами и учета прогресса выполнения задач в команде.

## Превью проекта

<img src="https://raw.githubusercontent.com/smileperez/fs-diplom-laravel-react/main/public/images/main_page.png" alt="Main page">
<img src="https://raw.githubusercontent.com/smileperez/fs-diplom-laravel-react/main/public/images/select_seats_page.png" alt="Select seats page">
<img src="https://raw.githubusercontent.com/smileperez/fs-diplom-laravel-react/main/public/images/reserve_page.png" alt="Reserve page">
<img src="https://raw.githubusercontent.com/smileperez/fs-diplom-laravel-react/main/public/images/ticket_page.png" alt="Ticket page">

## Ключевые заметки по работе приложения

-  Приложение реализовано по архитектуре SPA на **Laravel Framework**
-  Использование **Inertia** с использованием **React**
-  Использование пакета стилей **`Tailwind.css`** и плагина **`@tailwindcss/forms`**
-  Использование пакет иконок **`Heroicons`**
-  Использование пакета стилей **`Headless UI`**

## Документация

*Запуск приложения Laravel:*
| **№** | **Действие** | **Подробности** |
|:- |:----------------|:--------------|
| 1.1 | В корневой папке проекта запускаем команду | `composer install` |
| 1.2 | В корневой папке проекта переименовываем имя конфиг-файла `.env.example` на имя `.env` | Проверяем файл в корневой папке проекта `.env` на корректность, например что адрес, название БД, логин и пароль стоят корректные |
| 1.4 | Создаем новую БД с кодировкой `utf8mb4_unicode_ci` | Проверяем, что название новой БД сходится с названием в файле `.env` |
| 1.5 | Выполняем первую миграцию с сидированием БД | `php artisan migrate:fresh --seed` |
| 1.6 | В корневой папке приложения запускаем команду | `php artisan key:generate` |
| 1.6 | В корневой папке приложения запускаем команду | `php artisan storage:link` |
| 1.7 | Проверяем, что Laravel запустился корректно | `php artisan serve` |

## Используемые NPM пакеты

-  @headlessui/react@1.7.19</br>
-  @heroicons/react@2.1.3</br>
-  @inertiajs/react@1.0.16</br>
-  @tailwindcss/forms@0.5.7</br>
-  @vitejs/plugin-react@4.2.1</br>
-  autoprefixer@10.4.19</br>
-  laravel-vite-plugin@1.0.2</br>
-  postcss@8.4.47</br>
-  react-dom@18.3.1</br>
-  react@18.3.1</br>
-  tailwindcss@3.4.3</br>
-  vite@5.4.9</br>




