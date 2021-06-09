| Адрес        | Назначение           | Обязательные значения  |
| ------------- |:-------------:| -----:|
| POST /auth     | Авторизация  | login(string) password(string) |
| POST /checkIn      | Регистрация      |   login(string) password(string) name(string) surname(string) email(string) |
| GET /users         | Получение оценок прользователей|
| GET /rating        | Получение списка пожеланий     |
| POST /rating/:id       | Добавление рейтинга       | userId(number))| 
|DELETE /users/id | удаление ползователя по ID|
|GET /street | Получение списка улиц |
|GET /appeals | Получение пожеланий | 
|DELETE /appeals/id | удаление пожеланий по ID|