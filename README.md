| Адрес        | Назначение           | Обязательные значения  |
| ------------- |:-------------:| -----:|
| POST /auth     | Авторизация  | login(string) password(string) |
| POST /checkIn      | Регистрация      |   login(string) password(string) name(string) surname(string) email(string) |
| GET /users         | Получение списка прользователей|
| GET /rating        | Получение списка пожеланий     |
| POST /rating/:id       | Добавление пожеланий       | userId(number) content(string)| 
|DELETE /users/id | удаление ползователя по Id|
|DELETE /rating/id| удаление пожелания по Id|
|GET /street | Получение списка улиц |