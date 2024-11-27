# Читательский дневник
## Запуск docker-compose
1) Выполнить команду docker-compose up --build -d
2) Доступ к приложению будет по адрусу `http://localhost:5173`

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

## Дополнительная информация по проекту
1) [Ссылка на дизайн проекта](https://design.penpot.app/#/workspace/5e250d03-b345-8112-8005-17de7456b71f/f4c411c4-dd43-81ae-8005-17de86fb5d12)
2) [Ссылка на таск-менеджер](https://mtfaer.kaiten.ru/space/457867)

