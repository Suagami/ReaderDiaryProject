# Читательский дневник
## Запуск локального сервера
1) Установить Python 3.12 (https://www.python.org/downloads/release/python-3127/), при установке ОБЯЗАТЕЛЬНО выбрать параметр "Add Python to environment variables", после установки желательно перезагрузить компьютер
2) Открыть терминал в директории backend
3) Выполнить команды:
   1) `pip install -r requirements.txt`
   2) `python manage.py migrate`
   3) `python manage.py runserver`

Закрытие окна терминала приведет к отключению сервера.

Доступ к серверу будет осуществляться через localhost:8000. 