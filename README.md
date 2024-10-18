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

## Дополнительная информация по проекту
1) [Ссылка на дизайн проекта](https://design.penpot.app/#/workspace/5e250d03-b345-8112-8005-17de7456b71f/f4c411c4-dd43-81ae-8005-17de86fb5d12?page-id=f4c411c4-dd43-81ae-8005-17de86fb5d13&layout=layers)
2) [Ссылка на таск-менеджер](https://mtfaer.kaiten.ru/space/457867)