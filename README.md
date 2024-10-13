# Читательский дневник
## Backend
## Запуск локального сервера
1) Установить Python 3.12 (https://www.python.org/downloads/release/python-3127/), при установке ОБЯЗАТЕЛЬНО выбрать параметр "Add Python to environment variables", после установки желательно перезагрузить компьютер
2) Открыть терминал в директории backend
3) Выполнить команды:
   1) `pip install -r requirements.txt`
   2) `python manage.py migrate`
   3) `python manage.py runserver`

Закрытие окна терминала приведет к отключению сервера.

Доступ к серверу будет осуществляться через localhost:8000. 

## Frontend
## Запуск фронта локально
1) Устанавливаем node js актуальной версии(https://nodejs.org/en/download/package-manager)
2) Открыть терминал в директории frontend(`cd .\frontend\`)
3) Выполнить команды:
   1) `npm i`
   2) `npm run dev`

Доступ к приложению будет по адрусу `http://localhost:5173`

## Важно!!
1) Закрытие окна терминала приведет к отключению сервера.
2) Намеренная остановка через `ctrl + c`, в случае `ctrl + z` необходимо через powershell останавливать скрытый процесс, лио перезагружать компьютер